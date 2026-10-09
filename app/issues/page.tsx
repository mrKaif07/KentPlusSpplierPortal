'use client';

import { useState } from 'react';
import { AlertCircle, Plus, CheckCircle2 } from 'lucide-react';
import SupplierLayout from '@/components/SupplierLayout';

export default function SupplierIssuesPage() {
  const [showModal, setShowModal] = useState(false);
  const [category, setCategory] = useState('Vehicle Puncture / Breakdown');
  const [desc, setDesc] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setShowModal(false);
    }, 1500);
  };

  return (
    <SupplierLayout>
      <div className="space-y-6 max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-extrabold text-kp-navy tracking-tight">Report Route Incident / Issue</h1>
            <p className="text-xs text-kp-muted mt-0.5">Report vehicle breakdown, traffic delays, or damaged jar replacements to hub dispatch</p>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow-md shadow-rose-600/20 transition-all hover:scale-105"
          >
            <Plus className="w-4 h-4" /> Report Route Blocker
          </button>
        </div>

        <div className="space-y-4">
          <div className="bg-white p-6 rounded-3xl border border-kp-border shadow-xs">
            <div className="flex items-center justify-between pb-3 border-b border-kp-border">
              <span className="font-mono text-xs font-bold text-kp-navy">INC-9102</span>
              <span className="inline-flex px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                ✓ Resolved
              </span>
            </div>
            <h3 className="font-bold text-sm text-kp-navy mt-2">Puncture at Outer Ring Road, Saket</h3>
            <p className="text-xs text-kp-muted mt-1">Reserve delivery van DL 1V 8820 reached within 20 mins to transfer remaining 18 cans.</p>
          </div>
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-kp-navy/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-kp-border">
              {sent ? (
                <div className="text-center py-6">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-kp-navy">Alert Sent to Hub</h3>
                  <p className="text-xs text-kp-muted">Dispatch team is arranging immediate backup.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-bold text-lg text-kp-navy">Report Route Incident</h3>

                  <div>
                    <label className="block text-xs font-bold text-kp-navy mb-1">Incident Type</label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-kp-border text-xs text-kp-navy"
                    >
                      <option value="Vehicle Puncture / Breakdown">Vehicle Puncture / Breakdown</option>
                      <option value="Severe Traffic Jam">Severe Traffic Delay (Route Delayed 30+ Mins)</option>
                      <option value="Defective / Leaking Can in Transit">Defective / Leaking Can in Transit</option>
                      <option value="Accident / Road Issue">Road Accident / Police Checkpoint</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-kp-navy mb-1">Current Location & Details</label>
                    <textarea
                      rows={3}
                      required
                      value={desc}
                      onChange={(e) => setDesc(e.target.value)}
                      placeholder="Specify your exact landmark and what happened..."
                      className="w-full px-4 py-2.5 rounded-xl border border-kp-border text-xs text-kp-navy resize-none"
                    />
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setShowModal(false)}
                      className="flex-1 py-2.5 rounded-xl border border-kp-border text-xs font-semibold text-kp-navy"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-2.5 rounded-xl bg-rose-600 text-white text-xs font-bold hover:bg-rose-700"
                    >
                      Send Emergency Alert
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </SupplierLayout>
  );
}
