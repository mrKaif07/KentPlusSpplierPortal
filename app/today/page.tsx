'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CheckSquare, Search, MapPin, Phone, CheckCircle2, Clock, Navigation } from 'lucide-react';
import SupplierLayout from '@/components/SupplierLayout';

const TODAY_STOPS = [
  { id: 'DEL-8942', name: 'Rahul Sharma', address: 'Flat 302, Block M, Saket', floor: '3rd Floor (Lift: Yes)', cans: 2, empty: 2, status: 'In Transit', phone: '9811122334', payment: 'Ledger' },
  { id: 'DEL-8943', name: 'Vikram Malhotra', address: 'House 44, Block J, Saket', floor: '1st Floor', cans: 2, empty: 2, status: 'Pending', phone: '9822233445', payment: 'Cash' },
  { id: 'DEL-8944', name: 'Pooja Verma', address: 'Parijat Apts, Flat 12B, Saket', floor: '2nd Floor (Lift: Yes)', cans: 3, empty: 3, status: 'Pending', phone: '9833344556', payment: 'UPI' },
  { id: 'DEL-8945', name: 'Anil Gupta', address: 'Shop 4, Anupam Complex, Saket', floor: 'Ground Floor', cans: 4, empty: 4, status: 'Pending', phone: '9844455667', payment: 'Ledger' },
  { id: 'DEL-8946', name: 'Sanjay Kapoor', address: 'Block D, Press Enclave, Saket', floor: '4th Floor (Lift: Yes)', cans: 2, empty: 1, status: 'Pending', phone: '9855566778', payment: 'Cash' },
  { id: 'DEL-8935', name: 'Meenakshi Iyer', address: 'Pocket 3, Block J, Saket', floor: 'Ground Floor', cans: 2, empty: 2, status: 'Delivered', phone: '9866677889', payment: 'Ledger' },
  { id: 'DEL-8936', name: 'Rohan Joshi', address: 'Sector 4, Saket', floor: '1st Floor', cans: 2, empty: 2, status: 'Delivered', phone: '9877788990', payment: 'UPI' }
];

export default function SupplierTodayPage() {
  const [filter, setFilter] = useState<'all' | 'pending' | 'delivered'>('all');
  const [search, setSearch] = useState('');

  const filtered = TODAY_STOPS.filter((s) => {
    if (filter === 'pending' && s.status === 'Delivered') return false;
    if (filter === 'delivered' && s.status !== 'Delivered') return false;
    if (search && !s.name.toLowerCase().includes(search.toLowerCase()) && !s.address.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <SupplierLayout>
      <div className="space-y-6 max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-extrabold text-kp-navy tracking-tight">Today's Delivery List</h1>
            <p className="text-xs text-kp-muted mt-0.5">Morning Route: Saket Sector (Total 20 Scheduled Stops)</p>
          </div>

          <div className="flex gap-2">
            <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-amber-50 text-amber-700 border border-amber-200">
              Pending: 5 Stops
            </span>
            <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200">
              Done: 2 Stops
            </span>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between bg-white p-4 rounded-2xl border border-kp-border shadow-xs">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            {(['all', 'pending', 'delivered'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-xl text-xs font-bold capitalize transition-all ${
                  filter === f
                    ? 'bg-amber-500 text-white shadow-xs'
                    : 'bg-kp-ice text-kp-muted hover:text-kp-navy'
                }`}
              >
                {f === 'all' ? 'All Stops' : f}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-kp-muted" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search customer or address..."
              className="w-full pl-9 pr-3 py-2 rounded-xl border border-kp-border text-xs text-kp-navy focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
        </div>

        {/* List Cards */}
        <div className="space-y-3">
          {filtered.map((stop) => (
            <div
              key={stop.id}
              className={`p-5 rounded-3xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                stop.status === 'In Transit'
                  ? 'bg-amber-50/50 border-amber-300 ring-2 ring-amber-400/40 shadow-sm'
                  : stop.status === 'Delivered'
                  ? 'bg-white/80 border-kp-border opacity-75'
                  : 'bg-white border-kp-border shadow-xs'
              }`}
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-xs font-bold text-kp-navy">{stop.id}</span>
                  <span className="font-extrabold text-sm text-kp-navy">• {stop.name}</span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                    stop.status === 'Delivered' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                  }`}>
                    {stop.status}
                  </span>
                </div>
                <p className="text-xs text-kp-muted flex items-center gap-1.5 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-kp-primary shrink-0" />
                  <span>{stop.address} • <strong className="text-kp-navy">{stop.floor}</strong></span>
                </p>
                <div className="flex items-center gap-3 text-xs mt-2 font-medium">
                  <span className="text-kp-navy font-bold">{stop.cans} Cans</span>
                  <span className="text-kp-muted">• Collect {stop.empty} empty</span>
                  <span className="text-kp-muted">• Payment: {stop.payment}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`tel:${stop.phone}`}
                  className="p-2.5 rounded-xl border border-kp-border bg-white text-kp-navy hover:bg-kp-ice transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-600" />
                </a>

                {stop.status !== 'Delivered' ? (
                  <Link
                    href={`/deliveries/${stop.id}`}
                    className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs shadow-xs transition-all hover:scale-105"
                  >
                    Complete Delivery
                  </Link>
                ) : (
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200">
                    ✓ Completed
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SupplierLayout>
  );
}
