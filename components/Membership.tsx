const PERKS = [
  { emoji: '📬', text: 'Monthly deep-dive newsletter' },
  { emoji: '🎙️', text: 'Member-only podcast episodes' },
  { emoji: '💬', text: 'Private Discord community' },
  { emoji: '🙏', text: 'Name in supporter credits' },
  { emoji: '📊', text: 'Early access to explainers' },
];

export default function Membership() {
  return (
    <div className="card bg-gradient-to-br from-coffee-50 via-white to-white">
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-lg font-bold text-coffee-900 mb-1 flex items-center gap-2">
          <span>⭐</span> Become a Member
        </h3>
        <p className="text-coffee-500 text-sm leading-relaxed">
          Get exclusive content, early access to projects, and support an indie developer building cool things.
        </p>
      </div>

      {/* Perks */}
      <div className="space-y-2.5 mb-5">
        {PERKS.map((perk) => (
          <div key={perk.text} className="flex items-center gap-3 p-2 rounded-lg bg-coffee-50">
            <span className="text-base flex-shrink-0">{perk.emoji}</span>
            <span className="text-coffee-700 text-sm font-medium">{perk.text}</span>
          </div>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="space-y-2">
        <button className="btn-primary w-full text-sm py-2.5 flex items-center justify-center gap-1.5">
          ⭐ Join for $5 / month
        </button>
        <button className="btn-secondary w-full text-sm py-2.5 flex items-center justify-center gap-1.5">
          💎 Annual — $48 / year &nbsp;<span className="text-xs opacity-75">(save 20%)</span>
        </button>
      </div>

      <p className="text-coffee-400 text-xs text-center mt-3">
        Cancel anytime &middot; No hidden fees
      </p>
    </div>
  );
}
