'use client';

import { useState } from 'react';

const PRESET_AMOUNTS = [
  { value: 3, label: '$3', emoji: '☕', description: '1 coffee' },
  { value: 5, label: '$5', emoji: '☕☕', description: '2 coffees' },
  { value: 10, label: '$10', emoji: '☕', description: 'a large coffee' },
  { value: 25, label: '$25', emoji: '🎁', description: 'a coffee treat' },
];

export default function TipForm() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [selectedAmount, setSelectedAmount] = useState<number>(5);
  const [customAmount, setCustomAmount] = useState('');
  const [isCustom, setIsCustom] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const finalAmount = isCustom ? parseFloat(customAmount) || 0 : selectedAmount;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (finalAmount < 1) {
      setError('Minimum amount is $1.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          message: message.trim(),
          amount: finalAmount,
        }),
      });

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-coffee-900 mb-1">
          Buy Me a Coffee ☕
        </h2>
        <p className="text-coffee-500 text-sm">
          Every coffee keeps the explainers coming. Thank you so much!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-coffee-700 mb-1.5">
            Your Name <span className="text-coffee-400">(required)</span>
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Jane Doe"
            className="input-field"
            maxLength={80}
          />
        </div>

        {/* Message Input */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-coffee-700 mb-1.5">
            Leave a Message <span className="text-coffee-400">(optional)</span>
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Say something nice... 😊"
            rows={3}
            className="input-field resize-none"
            maxLength={280}
          />
          <p className="text-coffee-400 text-xs mt-1 text-right">{message.length}/280</p>
        </div>

        {/* Amount Selection */}
        <div>
          <label className="block text-sm font-semibold text-coffee-700 mb-2">
            Choose Amount
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
            {PRESET_AMOUNTS.map((preset) => (
              <button
                key={preset.value}
                type="button"
                onClick={() => {
                  setSelectedAmount(preset.value);
                  setIsCustom(false);
                  setCustomAmount('');
                }}
                className={`p-3 rounded-xl border-2 text-center transition-all duration-200 ${
                  !isCustom && selectedAmount === preset.value
                    ? 'border-coffee-500 bg-gradient-to-br from-coffee-400 to-coffee-600 text-white shadow-md'
                    : 'border-coffee-200 bg-white text-coffee-700 hover:border-coffee-300 hover:bg-coffee-50'
                }`}
              >
                <div className="font-bold text-lg">{preset.label}</div>
                <div className="text-xs mt-0.5 opacity-80">{preset.description}</div>
              </button>
            ))}
          </div>

          {/* Custom Amount */}
          <div
            className={`flex items-center gap-3 p-3 rounded-xl border-2 transition-all duration-200 cursor-pointer ${
              isCustom
                ? 'border-coffee-500 bg-coffee-50'
                : 'border-coffee-200 bg-white hover:border-coffee-400'
            }`}
            onClick={() => setIsCustom(true)}
          >
            <span className="text-coffee-600 font-bold text-lg">$</span>
            <input
              type="number"
              min="1"
              step="1"
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value);
                setIsCustom(true);
              }}
              placeholder="Custom amount"
              className="flex-1 bg-transparent text-coffee-900 placeholder-coffee-400 focus:outline-none font-medium"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>

        {/* Error */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 rounded-xl px-4 py-3 text-sm">
            ⚠️ {error}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading || finalAmount < 1}
          className="btn-primary w-full flex items-center justify-center gap-2 text-lg disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Redirecting to Stripe...
            </>
          ) : (
            <>
              ☕ Buy me a coffee
              {finalAmount >= 1 && (
                <span className="bg-coffee-700 px-2 py-0.5 rounded-lg text-sm">${finalAmount}</span>
              )}
            </>
          )}
        </button>

        <p className="text-center text-coffee-400 text-xs flex items-center justify-center gap-1">
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
          Secure payment via Stripe. We never store card details.
        </p>
      </form>
    </div>
  );
}
