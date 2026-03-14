import TipForm from '@/components/TipForm';
import RecentTips from '@/components/RecentTips';
import Membership from '@/components/Membership';

const HOBBY_TAGS = [
  '� Full-Stack Dev',
  '☁️ Cloud Engineering',
  '🤖 AI & Chatbots',
  '🐳 Docker & DevOps',
  '🔐 OAuth & Security',
  '☕ Coffee Lover',
];

export default function Home() {
  return (
    <main className="min-h-screen py-12 px-4">
      {/* Profile Section */}
      <div className="max-w-4xl mx-auto mb-10">
        <div className="card p-8 bg-gradient-to-br from-coffee-50 via-white to-white relative overflow-hidden">
          {/* Decorative blobs */}
          <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-coffee-100 opacity-50 pointer-events-none" />
          <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full bg-coffee-200 opacity-30 pointer-events-none" />

          <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-6">
            {/* Avatar */}
            <div className="flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://syafiq.vercel.app/assets/profile-BCbeTjKp.jpg"
                alt="Syafiq"
                className="w-24 h-24 rounded-full object-cover shadow-lg ring-4 ring-coffee-100"
              />
            </div>

            {/* Info */}
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-3xl font-extrabold text-coffee-900 mb-0.5">Syafiq</h1>
              <p className="text-coffee-400 text-sm mb-1 font-medium">Full-Stack Developer &amp; Cloud Engineer · Malaysia</p>
              <p className="text-coffee-500 text-xs mb-3">Currently @ Maxis Broadband &mdash; 8+ yrs · 30+ projects · 20+ technologies</p>
              <p className="text-coffee-700 leading-relaxed mb-4 max-w-xl">
                <span className="animate-wave inline-block">👋</span> Hey! I&apos;m Syafiq — I build scalable
                microservices, cloud-native systems, and modern web apps. From government portals and
                e-commerce platforms to AI-powered chatbots, I love turning ideas into clean,
                production-ready software. If my open-source work or content has helped you, a coffee
                goes a long way!
              </p>
              {/* Hobby / Interest Tags */}
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                {HOBBY_TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-coffee-100 text-coffee-700 px-3 py-1 rounded-full font-medium border border-coffee-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-4xl mx-auto text-center mb-8">
        <div className="flex items-center justify-center gap-3">
          <span className="h-px w-20 bg-coffee-200"></span>
          <span className="text-coffee-400 text-xl animate-float inline-block">☕</span>
          <span className="h-px w-20 bg-coffee-200"></span>
        </div>
        <p className="text-coffee-400 mt-2 text-sm tracking-wide">Support the work. Fuel the curiosity.</p>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Tip Form */}
        <div className="lg:col-span-3">
          <TipForm />
        </div>

        {/* Side Panel */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <RecentTips />
          <Membership />
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto mt-16 text-center text-coffee-400 text-sm">
        <p>Made with ☕ and ❤️ by <span className="font-semibold text-coffee-600">Syafiq</span> &mdash; powered by Next.js &amp; Stripe</p>
      </footer>
    </main>
  );
}
