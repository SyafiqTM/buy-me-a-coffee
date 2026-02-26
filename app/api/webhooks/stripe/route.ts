import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { prisma } from '@/lib/prisma';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-04-10',
});

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get('stripe-signature')!;

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return NextResponse.json({ error: 'Webhook error' }, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    const { name, message, amount } = session.metadata!;

    try {
      await prisma.tip.create({
        data: {
          name,
          message,
          amount: parseInt(amount),
          currency: 'usd',
        },
      });
    } catch (error) {
      console.error('Error saving tip to database:', error);
      return NextResponse.json(
        { error: 'Failed to save tip' },
        { status: 500 }
      );
    }
  }

  return NextResponse.json({ received: true });
}
