import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const [recentTips, topTips] = await Promise.all([
      prisma.tip.findMany({
        orderBy: { createdAt: 'desc' },
        take: 5,
      }),
      prisma.tip.findMany({
        orderBy: { amount: 'desc' },
        take: 5,
      }),
    ]);

    return NextResponse.json({ recentTips, topTips });
  } catch (error) {
    console.error('Error fetching tips:', error);
    return NextResponse.json(
      { error: 'Failed to fetch tips' },
      { status: 500 }
    );
  }
}
