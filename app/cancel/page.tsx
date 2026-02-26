import Link from 'next/link';

export default function CancelPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="bg-white rounded-3xl shadow-xl border border-coffee-100 p-10">
          <div className="text-7xl mb-4">😢</div>
          <h1 className="text-3xl font-extrabold text-coffee-900 mb-3">
            Payment Cancelled
          </h1>
          <p className="text-coffee-600 text-lg mb-2 leading-relaxed">
            No worries! Your payment was cancelled and you were not charged.
          </p>
          <div className="my-8 h-px bg-coffee-100"></div>
          <p className="text-coffee-500 text-sm mb-6">
            If you&apos;d like to try again or have any questions, feel free to
            head back to the main page.
          </p>
          <Link
            href="/"
            className="btn-primary inline-block"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
