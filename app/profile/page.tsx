'use client';

import { User, Truck, ShieldCheck, Award, Phone } from 'lucide-react';
import SupplierLayout from '@/components/SupplierLayout';

export default function SupplierProfilePage() {
  return (
    <SupplierLayout>
      <div className="space-y-6 max-w-4xl mx-auto">
        <div>
          <h1 className="text-2xl font-extrabold text-kp-navy tracking-tight">Driver Profile</h1>
          <p className="text-xs text-kp-muted mt-0.5">Kent Plus Delivery Partner Credentials & Performance Stats</p>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-kp-border shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-kp-border text-center sm:text-left">
            <div className="w-20 h-20 rounded-3xl bg-amber-500 text-white font-extrabold text-2xl flex items-center justify-center shadow-md">
              RK
            </div>
            <div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <h2 className="text-xl font-bold text-kp-navy">Rajesh Kumar</h2>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Verified Partner
                </span>
              </div>
              <p className="text-xs text-kp-muted mt-0.5">Partner ID: KP-DRV-104 • Joined March 2024</p>
              <div className="flex items-center gap-4 text-xs font-semibold text-kp-navy mt-3 justify-center sm:justify-start">
                <span>★ 4.9 Rating (420 reviews)</span>
                <span>• 99.2% On-Time Delivery</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-kp-ice p-4 rounded-2xl border border-kp-border">
              <span className="text-[11px] text-kp-muted font-bold block uppercase">Vehicle Registration</span>
              <span className="text-base font-extrabold text-kp-navy mt-1 block">DL 1V 3422 (Mahindra Bolero Maxi)</span>
              <span className="text-xs text-kp-muted">Capacity: 60 × 20L Water Jars</span>
            </div>

            <div className="bg-kp-ice p-4 rounded-2xl border border-kp-border">
              <span className="text-[11px] text-kp-muted font-bold block uppercase">Assigned Primary Route</span>
              <span className="text-base font-extrabold text-kp-navy mt-1 block">Saket Sectors & Malviya Nagar</span>
              <span className="text-xs text-kp-muted">Central Hub: Okhla Plant Hub 1</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200">
              <span className="text-2xl font-black text-amber-700 block">1,840</span>
              <span className="text-[11px] text-kp-muted font-bold uppercase">Total Deliveries</span>
            </div>
            <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200">
              <span className="text-2xl font-black text-amber-700 block">3,620</span>
              <span className="text-[11px] text-kp-muted font-bold uppercase">Cans Handled</span>
            </div>
            <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200">
              <span className="text-2xl font-black text-emerald-700 block">₹42,800</span>
              <span className="text-[11px] text-kp-muted font-bold uppercase">Monthly Payout</span>
            </div>
          </div>
        </div>
      </div>
    </SupplierLayout>
  );
}
