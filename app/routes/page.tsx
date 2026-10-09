'use client';

import { MapPin, Navigation, Truck, Users, Clock } from 'lucide-react';
import SupplierLayout from '@/components/SupplierLayout';

const ROUTE_CLUSTERS = [
  { pocket: 'Saket Block M', stops: 6, totalCans: 12, estTime: '6:30 AM – 7:30 AM', status: 'In Progress' },
  { pocket: 'Saket Block J & Community Center', stops: 5, totalCans: 11, estTime: '7:30 AM – 8:30 AM', status: 'Next' },
  { pocket: 'Press Enclave Road', stops: 4, totalCans: 8, estTime: '8:30 AM – 9:30 AM', status: 'Pending' },
  { pocket: 'Anupam Complex & Market Shops', stops: 5, totalCans: 9, estTime: '9:30 AM – 10:30 AM', status: 'Pending' }
];

export default function SupplierRoutesPage() {
  return (
    <SupplierLayout>
      <div className="space-y-6 max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-extrabold text-kp-navy tracking-tight">Optimized Route Sequence</h1>
            <p className="text-xs text-kp-muted mt-0.5">Automated morning route plan grouped by neighborhood pockets</p>
          </div>

          <button
            onClick={() => alert('Starting full turn-by-turn route navigation in mock maps!')}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-600/20 transition-all hover:scale-105"
          >
            <Navigation className="w-4 h-4" /> Start Route Navigation
          </button>
        </div>

        {/* Visual Map Simulation Card */}
        <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-lg">
          <div className="relative z-10 space-y-4">
            <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">Live Route Telemetry</span>
            <h2 className="text-xl sm:text-2xl font-black">Current Sector: Saket Block M (Stop 13 of 20)</h2>
            <p className="text-xs text-slate-300 max-w-lg">
              Next Turn: Left onto Block M Inner Ring Road towards Flat 302. Distance: 150m.
            </p>
          </div>
          <div className="absolute right-6 -bottom-6 opacity-20 pointer-events-none">
            <MapPin className="w-48 h-48 text-amber-500" />
          </div>
        </div>

        {/* Pocket Clusters */}
        <div className="space-y-4">
          <h3 className="font-bold text-base text-kp-navy">Route Sectors & Time Windows</h3>
          {ROUTE_CLUSTERS.map((cluster, i) => (
            <div key={cluster.pocket} className="bg-white p-6 rounded-3xl border border-kp-border shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-700 font-extrabold flex items-center justify-center text-sm border border-amber-200">
                  {i + 1}
                </div>
                <div>
                  <h4 className="font-bold text-base text-kp-navy">{cluster.pocket}</h4>
                  <div className="flex items-center gap-3 text-xs text-kp-muted mt-1">
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-kp-primary" /> {cluster.estTime}</span>
                    <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5 text-kp-primary" /> {cluster.stops} Stops</span>
                    <span className="font-bold text-kp-navy">{cluster.totalCans} Cans</span>
                  </div>
                </div>
              </div>

              <div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  cluster.status === 'In Progress' ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-600'
                }`}>
                  {cluster.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SupplierLayout>
  );
}
