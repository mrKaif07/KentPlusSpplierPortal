'use client';

import { useState } from 'react';
import { Users, Search, Phone, MapPin, Package } from 'lucide-react';
import SupplierLayout from '@/components/SupplierLayout';

const ROUTE_CUSTOMERS = [
  { id: 'CUST-001', name: 'Rahul Sharma', address: 'Flat 302, Block M, Saket', floor: '3rd Floor (Lift: Yes)', phone: '9811122334', cans: 2, frequency: 'Daily' },
  { id: 'CUST-002', name: 'Vikram Malhotra', address: 'House 44, Block J, Saket', floor: '1st Floor', phone: '9822233445', cans: 2, frequency: 'Daily' },
  { id: 'CUST-003', name: 'Pooja Verma', address: 'Parijat Apts, Flat 12B, Saket', floor: '2nd Floor (Lift: Yes)', phone: '9833344556', cans: 3, frequency: 'Alternate Days' },
  { id: 'CUST-004', name: 'Anil Gupta', address: 'Shop 4, Anupam Complex, Saket', floor: 'Ground Floor', phone: '9844455667', cans: 4, frequency: 'Daily (Commercial)' },
  { id: 'CUST-005', name: 'Sanjay Kapoor', address: 'Block D, Press Enclave, Saket', floor: '4th Floor (Lift: Yes)', phone: '9855566778', cans: 2, frequency: 'Daily' },
  { id: 'CUST-006', name: 'Meenakshi Iyer', address: 'Pocket 3, Block J, Saket', floor: 'Ground Floor', phone: '9866677889', cans: 2, frequency: 'Daily' },
  { id: 'CUST-007', name: 'Rohan Joshi', address: 'Sector 4, Saket', floor: '1st Floor', phone: '9877788990', cans: 2, frequency: 'Daily' }
];

export default function SupplierCustomersPage() {
  const [search, setSearch] = useState('');

  const filtered = ROUTE_CUSTOMERS.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.address.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SupplierLayout>
      <div className="space-y-6 max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-extrabold text-kp-navy tracking-tight">My Route Customers</h1>
            <p className="text-xs text-kp-muted mt-0.5">Assigned subscribers on Driver Rajesh Kumar's Saket Route</p>
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-kp-muted" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search customers..."
              className="w-full pl-9 pr-3 py-2 rounded-xl border border-kp-border text-xs text-kp-navy focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((c) => (
            <div key={c.id} className="bg-white p-5 rounded-3xl border border-kp-border shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                    {c.id}
                  </span>
                  <span className="text-[11px] text-kp-muted font-semibold">{c.frequency}</span>
                </div>
                <h3 className="font-extrabold text-base text-kp-navy">{c.name}</h3>
                <p className="text-xs text-kp-muted flex items-start gap-1.5 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-kp-primary shrink-0 mt-0.5" />
                  <span>{c.address} • <strong>{c.floor}</strong></span>
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-kp-border flex items-center justify-between">
                <span className="text-xs font-bold text-kp-navy bg-kp-ice px-2.5 py-1 rounded-xl">
                  {c.cans} Cans / Trip
                </span>
                <a
                  href={`tel:${c.phone}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" /> Call Customer
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SupplierLayout>
  );
}
