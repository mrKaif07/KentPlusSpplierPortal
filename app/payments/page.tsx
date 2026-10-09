'use client';

import { useState } from 'react';
import { IndianRupee, CheckCircle2, History, ArrowRight } from 'lucide-react';
import SupplierLayout from '@/components/SupplierLayout';

const CASH_COLLECTIONS = [
  { id: 'COL-102', customer: 'Sanjay Kapoor', cans: 2, amount: 130, time: '7:15 AM', status: 'In Driver Wallet' },
  { id: 'COL-101', customer: 'Vikram Malhotra', cans: 2, amount: 130, time: '6:50 AM', status: 'In Driver Wallet' },
  { id: 'COL-100', customer: 'Anupam Daily Shop', cans: 10, amount: 650, time: '6:30 AM', status: 'In Driver Wallet' },
  { id: 'COL-099', customer: 'Pooja Society Flat', cans: 5, amount: 325, time: '6:15 AM', status: 'In Driver Wallet' }
];

export default function SupplierPaymentsPage() {
  const [handedOver, setHandedOver] = useState(false);

  return (
    <SupplierLayout>
      <div className="space-y-6 max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-extrabold text-kp-navy tracking-tight">Daily Cash Collections</h1>
            <p className="text-xs text-kp-muted mt-0.5">Track cash and UPI received from customers during deliveries</p>
          </div>

          <button
            onClick={() => setHandedOver(true)}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md shadow-emerald-600/20 transition-all hover:scale-105"
          >
            <CheckCircle2 className="w-4 h-4" /> Deposit Cash to Hub (₹1,235)
          </button>
        </div>

        {handedOver && (
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Deposit voucher logged! Please hand physical cash to Hub Cashier Ram at Okhla Hub upon return.</span>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-3xl border border-kp-border shadow-xs">
            <span className="text-xs text-kp-muted font-semibold block mb-1">Today's Cash in Wallet</span>
            <div className="text-3xl font-black text-emerald-700">₹1,235.00</div>
            <p className="text-[11px] text-kp-muted mt-2">Collected from 4 cash customers</p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-kp-border shadow-xs">
            <span className="text-xs text-kp-muted font-semibold block mb-1">UPI QR Direct to Hub</span>
            <div className="text-3xl font-black text-kp-navy">₹325.00</div>
            <p className="text-[11px] text-kp-muted mt-2">Credited straight to Kent Plus bank</p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-kp-border shadow-xs">
            <span className="text-xs text-kp-muted font-semibold block mb-1">Weekly Driver Commission</span>
            <div className="text-3xl font-black text-amber-600">₹3,450.00</div>
            <p className="text-[11px] text-kp-muted mt-2">₹12 per can delivery incentive</p>
          </div>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-kp-border shadow-xs">
          <h2 className="text-lg font-bold text-kp-navy mb-4 flex items-center gap-2">
            <History className="w-5 h-5 text-amber-600" /> Today's Collection Receipts
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-kp-ice/70 text-kp-navy font-semibold uppercase border-b border-kp-border">
                <tr>
                  <th className="py-3 px-4">Receipt #</th>
                  <th className="py-3 px-4">Customer</th>
                  <th className="py-3 px-4">Cans</th>
                  <th className="py-3 px-4">Cash Amount</th>
                  <th className="py-3 px-4">Collected Time</th>
                  <th className="py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-kp-border">
                {CASH_COLLECTIONS.map((c) => (
                  <tr key={c.id} className="hover:bg-kp-ice/40 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-bold text-kp-navy">{c.id}</td>
                    <td className="py-3.5 px-4 font-bold text-kp-navy">{c.customer}</td>
                    <td className="py-3.5 px-4 text-kp-navy">{c.cans} Cans</td>
                    <td className="py-3.5 px-4 font-extrabold text-emerald-700">₹{c.amount}</td>
                    <td className="py-3.5 px-4 text-kp-muted">{c.time}</td>
                    <td className="py-3.5 px-4">
                      <span className="inline-flex px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-50 text-amber-800 border border-amber-200">
                        {c.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </SupplierLayout>
  );
}
