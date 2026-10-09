'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Truck, ArrowRight, ShieldCheck, Phone, Lock } from 'lucide-react';

export default function SupplierLoginPage() {
  const router = useRouter();
  const [driverId, setDriverId] = useState('9876500001');
  const [password, setPassword] = useState('supplier123');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      router.push('/dashboard');
    }, 400);
  };

  return (
    <div className="min-h-screen bg-kp-ice flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <div className="w-12 h-12 rounded-2xl bg-amber-500 flex items-center justify-center text-white mx-auto mb-4 shadow-md shadow-amber-500/30">
          <Truck className="w-7 h-7" />
        </div>
        <h1 className="text-2xl font-bold text-kp-navy tracking-tight">Driver & Supplier Login</h1>
        <p className="mt-1 text-xs text-kp-muted">Log daily deliveries, verify customer OTPs, and record cash collections</p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 sm:px-10 rounded-3xl border border-kp-border shadow-xl">
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-kp-navy mb-1.5">Driver Mobile / ID</label>
              <div className="relative">
                <Phone className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-kp-muted" />
                <input
                  type="text"
                  required
                  value={driverId}
                  onChange={(e) => setDriverId(e.target.value)}
                  placeholder="9876500001"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-kp-border text-sm text-kp-navy focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-semibold text-kp-navy">Password</label>
                <span className="text-xs text-amber-600 font-medium">Demo: supplier123</span>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-kp-muted" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-kp-border text-sm text-kp-navy focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm shadow-md shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
            >
              {loading ? 'Starting Shift...' : 'Sign In & Start Shift'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-kp-border text-center">
            <a
              href="http://localhost:3000"
              className="text-xs text-kp-muted hover:text-kp-navy"
            >
              ← Back to Kent Plus Main Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
