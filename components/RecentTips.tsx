'use client';

import { useEffect, useState } from 'react';

interface Tip {
  id: number;
  name: string;
  message: string;
  amount: number;
  currency: string;
  createdAt: string;
}

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const minutes = Math.floor(diff / 60000);
  if (minutes < 1) return 'just now';
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

function formatAmount(cents: number): string {
  return `$${(cents / 100).toFixed(0)}`;
}

export default function RecentTips() {
  const [tips, setTips] = useState<Tip[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/tips')
      .then((r) => r.json())
      .then((data) => {
        setTips(data.recentTips || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="card">
      <h3 className="text-lg font-bold text-coffee-900 mb-4 flex items-center gap-2">
        <span>🕐</span> Recent Supporters
      </h3>

      {loading ? (
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="h-4 bg-coffee-100 rounded w-3/4 mb-1"></div>
              <div className="h-3 bg-coffee-100 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      ) : tips.length === 0 ? (
        <div className="text-center py-4">
          <p className="text-4xl mb-2">☕</p>
          <p className="text-coffee-400 text-sm">Be the first to buy a coffee!</p>
        </div>
      ) : (
        <ul className="space-y-3">
          {tips.map((tip) => (
            <li
              key={tip.id}
              className="flex items-start gap-3 p-3 bg-coffee-50 rounded-xl hover:bg-coffee-100 transition-colors"
            >
              <div className="text-2xl flex-shrink-0">☕</div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-1">
                  <span className="font-semibold text-coffee-900 text-sm truncate">
                    {tip.name}
                  </span>
                  <span className="text-coffee-600 font-bold text-sm flex-shrink-0">
                    {formatAmount(tip.amount)}
                  </span>
                </div>
                {tip.message && (
                  <p className="text-coffee-600 text-xs mt-0.5 line-clamp-2 leading-relaxed">
                    &ldquo;{tip.message}&rdquo;
                  </p>
                )}
                <p className="text-coffee-400 text-xs mt-1">
                  {timeAgo(tip.createdAt)}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
