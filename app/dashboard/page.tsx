'use client';

import Link from 'next/link';
import {
  Truck, CheckCircle2, Clock, Phone, MapPin, IndianRupee,
  Navigation, Package, AlertCircle, ArrowRight, ShieldCheck, UserCheck
} from 'lucide-react';
import SupplierLayout from '@/components/SupplierLayout';

const UPCOMING_STOPS = [
  { id: 'DEL-8942', name: 'Rahul Sharma', address: 'Flat 302, Block M, Saket', floor: '3rd Floor (Lift: Yes)', cans: 2, empty: 2, status: 'In Transit', phone: '9811122334', next: true },
  { id: 'DEL-8943', name: 'Vikram Malhotra', address: 'House 44, Block J, Saket', floor: '1st Floor', cans: 2, empty: 2, status: 'Pending', phone: '9822233445' },
  { id: 'DEL-8944', name: 'Pooja Verma', address: 'Parijat Apts, Flat 12B, Saket', floor: '2nd Floor (Lift: Yes)', cans: 3, empty: 3, status: 'Pending', phone: '9833344556' },
  { id: 'DEL-8945', name: 'Anil Gupta', address: 'Shop 4, Anupam Complex, Saket', floor: 'Ground Floor', cans: 4, empty: 4, status: 'Pending', phone: '9844455667' },
  { id: 'DEL-8946', name: 'Sanjay Kapoor', address: 'Block D, Press Enclave, Saket', floor: '4th Floor (Lift: Yes)', cans: 2, empty: 1, status: 'Pending', phone: '9855566778' }
];

export default function SupplierDashboardPage() {
  const currentStop = UPCOMING_STOPS[0];

  return (
    <SupplierLayout>
      <div className="space-y-6 max-w-7xl mx-auto">
        {/* Header / Shift stats summary */}
        <div className="bg-white p-6 rounded-3xl border border-kp-border shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Morning Delivery Shift</span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-kp-navy tracking-tight mt-0.5">
                Route: Saket Sector Morning Batch
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200">
                Vehicle: DL 1V 3422 (Tempo)
              </span>
            </div>
          </div>

          {/* Progress bar */}
          <div>
            <div className="flex justify-between text-xs font-semibold mb-1.5">
              <span className="text-kp-muted">Route Completion Progress</span>
              <span className="text-kp-navy font-bold">24 / 40 Cans Delivered (60%)</span>
            </div>
            <div className="h-3 w-full bg-kp-ice rounded-full overflow-hidden border border-kp-border">
              <div className="h-full bg-amber-500 rounded-full transition-all" style={{ width: '60%' }}></div>
            </div>
          </div>
        </div>

        {/* 4 Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-kp-border shadow-xs">
            <div className="flex items-center justify-between text-kp-muted mb-2">
              <span className="text-xs font-semibold">Loaded Stock</span>
              <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600">
                <Package className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl font-black text-kp-navy">40 Cans</div>
            <span className="text-[11px] text-kp-muted mt-1 block">16 remaining in vehicle</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-kp-border shadow-xs">
            <div className="flex items-center justify-between text-kp-muted mb-2">
              <span className="text-xs font-semibold">Completed Stops</span>
              <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                <CheckCircle2 className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl font-black text-emerald-600">12 Stops</div>
            <span className="text-[11px] text-kp-muted mt-1 block">8 remaining today</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-kp-border shadow-xs">
            <div className="flex items-center justify-between text-kp-muted mb-2">
              <span className="text-xs font-semibold">Empty Jars In Hand</span>
              <div className="w-8 h-8 rounded-lg bg-kp-light flex items-center justify-center text-kp-primary">
                <Truck className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl font-black text-kp-navy">22 Jars</div>
            <span className="text-[11px] text-kp-muted mt-1 block">Collected for hub refill</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-kp-border shadow-xs">
            <div className="flex items-center justify-between text-kp-muted mb-2">
              <span className="text-xs font-semibold">Cash Collected</span>
              <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                <IndianRupee className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl font-black text-emerald-700">₹1,560</div>
            <span className="text-[11px] text-kp-muted mt-1 block">To deposit at hub 11:30 AM</span>
          </div>
        </div>

        {/* CURRENT NEXT STOP HIGHLIGHT CARD */}
        <div className="bg-gradient-to-br from-amber-500/10 via-white to-white p-6 sm:p-8 rounded-3xl border-2 border-amber-400 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-amber-500 text-white shadow-xs">
              <Navigation className="w-3.5 h-3.5" /> CURRENT ACTIVE STOP #13
            </span>
            <span className="text-xs font-bold text-kp-muted">ETA: 8:15 AM (Next 5 mins)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-3">
              <h2 className="text-2xl font-black text-kp-navy">{currentStop.name}</h2>
              <div className="flex items-start gap-2 text-sm text-kp-muted">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>{currentStop.address} • <strong className="text-kp-navy">{currentStop.floor}</strong></span>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <div className="bg-white px-4 py-2 rounded-xl border border-kp-border text-xs">
                  <span className="text-kp-muted block text-[10px] uppercase font-bold">Deliver</span>
                  <span className="font-extrabold text-kp-navy text-sm">{currentStop.cans} × 20L Cans</span>
                </div>
                <div className="bg-white px-4 py-2 rounded-xl border border-kp-border text-xs">
                  <span className="text-kp-muted block text-[10px] uppercase font-bold">Collect</span>
                  <span className="font-extrabold text-kp-navy text-sm">{currentStop.empty} Empty Jars</span>
                </div>
                <div className="bg-white px-4 py-2 rounded-xl border border-kp-border text-xs">
                  <span className="text-kp-muted block text-[10px] uppercase font-bold">Payment</span>
                  <span className="font-extrabold text-emerald-600 text-sm">Monthly Ledger</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col gap-3">
              <Link
                href={`/deliveries/${currentStop.id}`}
                className="w-full py-4 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-sm shadow-md shadow-amber-500/25 transition-all text-center flex items-center justify-center gap-2 hover:scale-[1.02]"
              >
                <CheckCircle2 className="w-5 h-5" /> Mark Delivered (Enter OTP)
              </Link>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${currentStop.phone}`}
                  className="py-2.5 rounded-xl border border-kp-border bg-white hover:bg-kp-ice text-kp-navy font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-600" /> Call
                </a>
                <button
                  onClick={() => alert(`Opening mock Google Maps Navigation to ${currentStop.address}`)}
                  className="py-2.5 rounded-xl border border-kp-border bg-white hover:bg-kp-ice text-kp-navy font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-blue-600" /> Navigate
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Today's Remaining Queue */}
        <div className="bg-white p-6 rounded-3xl border border-kp-border shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-bold text-kp-navy text-base">Remaining Stops on Route</h3>
              <p className="text-xs text-kp-muted">Sequenced by building pocket to minimize vehicle turnaround</p>
            </div>
            <Link href="/today" className="text-xs font-bold text-amber-600 hover:underline flex items-center gap-1">
              View All Stops <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="divide-y divide-kp-border">
            {UPCOMING_STOPS.slice(1).map((stop) => (
              <div key={stop.id} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-kp-ice/30 px-2 rounded-xl transition-colors">
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="font-mono text-xs font-bold text-kp-navy">{stop.id}</span>
                    <span className="font-bold text-xs text-kp-navy">• {stop.name}</span>
                  </div>
                  <p className="text-xs text-kp-muted">{stop.address} ({stop.floor})</p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-kp-navy bg-kp-ice px-3 py-1 rounded-xl border border-kp-border">
                    {stop.cans} Cans
                  </span>
                  <Link
                    href={`/deliveries/${stop.id}`}
                    className="px-3.5 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-700 font-bold text-xs transition-colors"
                  >
                    Deliver
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SupplierLayout>
  );
}
