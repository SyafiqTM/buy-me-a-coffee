import Link from 'next/link';

export default function SuccessPage({
  searchParams,
}: {
  searchParams: { session_id?: string };
}) {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="bg-white rounded-3xl shadow-xl border border-coffee-100 p-10">
          <div className="text-7xl mb-6 animate-float inline-block">☕</div>
          <div className="text-5xl mb-4">🎉</div>
          <h1 className="text-3xl font-extrabold text-coffee-900 mb-3">
            Thank You So Much!
          </h1>
          <p className="text-coffee-600 text-lg mb-2 leading-relaxed">
            Your coffee has been received! I truly appreciate your support —
            it keeps me fuelled and motivated to keep building.
          </p>
          {searchParams.session_id && (
            <p className="text-coffee-400 text-xs mt-2 font-mono break-all">
              Session: {searchParams.session_id}
            </p>
          )}
          <div className="my-8 h-px bg-coffee-100"></div>
          <p className="text-coffee-500 text-sm mb-6">
            Your name and message will show up in the supporters list shortly.
            Cheers! 🥂
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
