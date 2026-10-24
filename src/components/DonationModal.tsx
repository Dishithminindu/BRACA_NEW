import React, { useState } from 'react';
import { X, Heart, Shield, Copy, Check, ExternalLink, CreditCard, Building2 } from 'lucide-react';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose }) => {
  const [copiedAccount, setCopiedAccount] = useState(false);
  const [copiedBank, setCopiedBank] = useState(false);
  const [amount, setAmount] = useState('2500');

  if (!isOpen) return null;

  const handleCopyAccount = () => {
    navigator.clipboard.writeText('8009124801');
    setCopiedAccount(true);
    setTimeout(() => setCopiedAccount(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-lg bg-[#1c1a17] text-stone-100 rounded-2xl border border-stone-700/80 shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 bg-[#141311] border-b border-stone-800 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 rounded-lg bg-rose-950/80 text-rose-400 border border-rose-800/50">
              <Heart className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h3 className="text-base font-serif font-bold text-white tracking-wide">
                Support BRACA Conservation
              </h3>
              <p className="text-xs text-stone-400">Protecting Sri Lanka's Biodiversity & Wildlife</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5 text-xs text-stone-300">
          <p className="leading-relaxed">
            Your generous contribution funds essential GPS collars, camera trap equipment, veterinary kits, and youth biology field courses across Sri Lanka.
          </p>

          {/* Quick Amounts */}
          <div>
            <label className="block text-[11px] uppercase tracking-wider text-stone-400 font-semibold mb-2">
              Select Donation Amount (LKR)
            </label>
            <div className="grid grid-cols-4 gap-2">
              {['1000', '2500', '5000', '10000'].map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => setAmount(val)}
                  className={`py-2 px-1 text-center font-mono rounded-lg border transition-all text-xs ${
                    amount === val
                      ? 'bg-[#e6f0cd] border-[#e6f0cd] text-[#163319] font-bold shadow-sm'
                      : 'bg-stone-900 border-stone-800 text-stone-300 hover:border-stone-700'
                  }`}
                >
                  Rs. {parseInt(val).toLocaleString()}
                </button>
              ))}
            </div>
          </div>

          {/* Bank Transfer Details */}
          <div className="p-4 bg-stone-900/90 rounded-xl border border-stone-800 space-y-3">
            <div className="flex items-center space-x-2 text-stone-200 font-semibold">
              <Building2 className="w-4 h-4 text-[#e6f0cd]" />
              <span>Direct Bank / Wire Transfer (Sri Lanka)</span>
            </div>

            <div className="space-y-1.5 font-mono text-[11px] text-stone-300">
              <div className="flex justify-between py-1 border-b border-stone-800">
                <span className="text-stone-500">Account Name:</span>
                <span className="text-white font-medium">Biodiversity Research & Conservation Alliance (Pvt) Ltd</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-800">
                <span className="text-stone-500">Bank:</span>
                <span className="text-white">Commercial Bank of Ceylon</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-800">
                <span className="text-stone-500">Branch:</span>
                <span className="text-white">Colombo 07 Branch</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-stone-500">Account No:</span>
                <div className="flex items-center space-x-2">
                  <span className="text-[#e6f0cd] font-bold">8009124801</span>
                  <button
                    onClick={handleCopyAccount}
                    className="text-stone-400 hover:text-white p-1"
                    title="Copy Account Number"
                  >
                    {copiedAccount ? <Check className="w-3.5 h-3.5 text-[#e6f0cd]" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-[11px] text-stone-400 bg-stone-900/50 p-3 rounded-lg border border-stone-800 space-y-1.5">
            <div>✉️ After transferring, please email your receipt to <strong className="text-stone-200">mail@braca.lk</strong> with your name and address for your official acknowledgment.</div>
            <div className="text-stone-400 pt-1 border-t border-stone-800/80 font-mono text-[10px] flex items-center gap-2 flex-wrap">
              <span>Direct Inquiries:</span>
              <span className="text-[#e6f0cd]">0763677875 (Dishith)</span>
              <span>•</span>
              <span className="text-[#e6f0cd]">+94 70 667 4025 (Lasal)</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-[#141311] border-t border-stone-800 flex items-center justify-between">
          <span className="text-[11px] text-stone-500">Official Non-Profit Conservation Fund</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#e6f0cd] hover:bg-[#d6e4b4] text-[#163319] font-bold text-xs rounded-lg transition-all border border-[#e6f0cd]/60 shadow-sm active:scale-95"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
