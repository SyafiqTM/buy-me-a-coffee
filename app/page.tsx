import TipForm from '@/components/TipForm';
import RecentTips from '@/components/RecentTips';
import TopTips from '@/components/TopTips';

export default function Home() {
  return (
    <main className="min-h-screen py-12 px-4">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="text-7xl mb-4 animate-float inline-block">☕</div>
        <h1 className="text-5xl font-extrabold text-coffee-900 mb-4 leading-tight">
          Buy Me a Coffee
        </h1>
        <p className="text-xl text-coffee-700 max-w-xl mx-auto leading-relaxed">
          Hey there! <span className="animate-wave inline-block">👋</span> I&apos;m a developer who loves building
          cool things. If my work has helped you, consider supporting me with a
          coffee. It means the world to me!
        </p>
        <div className="flex items-center justify-center gap-2 mt-6">
          <span className="h-1 w-16 rounded-full bg-coffee-300"></span>
          <span className="text-coffee-400 text-lg">☕</span>
          <span className="h-1 w-16 rounded-full bg-coffee-300"></span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Tip Form - takes more space */}
        <div className="lg:col-span-3">
          <TipForm />
        </div>

        {/* Side Panel */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <RecentTips />
          <TopTips />
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto mt-16 text-center text-coffee-500 text-sm">
        <p>Made with ☕ and ❤️ &mdash; powered by Next.js &amp; Stripe</p>
      </footer>
    </main>
  );
}
