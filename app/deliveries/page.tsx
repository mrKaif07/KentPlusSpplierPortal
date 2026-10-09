'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Truck, Search, Calendar, ChevronRight } from 'lucide-react';
import SupplierLayout from '@/components/SupplierLayout';

const ALL_DELIVERIES = [
  { id: 'DEL-8942', customer: 'Rahul Sharma', area: 'Saket', cans: 2, empty: 2, status: 'In Transit', time: '07 Oct 2026, 8:15 AM', amount: 130 },
  { id: 'DEL-8935', customer: 'Meenakshi Iyer', area: 'Saket', cans: 2, empty: 2, status: 'Delivered', time: '07 Oct 2026, 7:50 AM', amount: 130 },
  { id: 'DEL-8936', customer: 'Rohan Joshi', area: 'Saket', cans: 2, empty: 2, status: 'Delivered', time: '07 Oct 2026, 7:35 AM', amount: 130 },
  { id: 'DEL-8910', customer: 'Rahul Sharma', area: 'Saket', cans: 2, empty: 2, status: 'Delivered', time: '06 Oct 2026, 7:42 AM', amount: 130 },
  { id: 'DEL-8902', customer: 'Kunal Kapoor', area: 'Malviya Nagar', cans: 3, empty: 3, status: 'Delivered', time: '06 Oct 2026, 8:15 AM', amount: 195 },
  { id: 'DEL-8890', customer: 'Sunil Sethi', area: 'Malviya Nagar', cans: 2, empty: 1, status: 'Delivered', time: '06 Oct 2026, 8:40 AM', amount: 130 }
];

export default function SupplierDeliveriesPage() {
  const [search, setSearch] = useState('');

  const filtered = ALL_DELIVERIES.filter(
    (d) =>
      d.customer.toLowerCase().includes(search.toLowerCase()) ||
      d.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SupplierLayout>
      <div className="space-y-6 max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-extrabold text-kp-navy tracking-tight">All Delivery Records</h1>
            <p className="text-xs text-kp-muted mt-0.5">Complete trip audit trail for Driver Rajesh Kumar</p>
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-kp-muted" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search deliveries..."
              className="w-full pl-9 pr-3 py-2 rounded-xl border border-kp-border text-xs text-kp-navy focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-kp-border shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-kp-ice/70 text-kp-navy font-semibold uppercase border-b border-kp-border">
                <tr>
                  <th className="py-3 px-4">Trip ID</th>
                  <th className="py-3 px-4">Customer</th>
                  <th className="py-3 px-4">Area</th>
                  <th className="py-3 px-4">Cans Delivered</th>
                  <th className="py-3 px-4">Empty Collected</th>
                  <th className="py-3 px-4">Time</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-kp-border">
                {filtered.map((d) => (
                  <tr key={d.id} className="hover:bg-kp-ice/40 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-bold text-kp-navy">{d.id}</td>
                    <td className="py-3.5 px-4 font-bold text-kp-navy">{d.customer}</td>
                    <td className="py-3.5 px-4 text-kp-muted">{d.area}</td>
                    <td className="py-3.5 px-4 font-bold text-kp-navy">{d.cans} Cans</td>
                    <td className="py-3.5 px-4 text-kp-muted">{d.empty} Empty</td>
                    <td className="py-3.5 px-4 text-kp-muted">{d.time}</td>
                    <td className="py-3.5 px-4">
                      <span className={`inline-flex px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                        d.status === 'Delivered' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-amber-50 text-amber-700 border border-amber-200'
                      }`}>
                        {d.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <Link
                        href={`/deliveries/${d.id}`}
                        className="inline-flex items-center gap-1 font-semibold text-amber-600 hover:underline"
                      >
                        Open <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
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
