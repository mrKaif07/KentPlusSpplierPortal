'use client';

import { Bell, Truck, AlertTriangle, CheckCheck } from 'lucide-react';
import SupplierLayout from '@/components/SupplierLayout';

const DISPATCH_ALERTS = [
  { id: 1, title: 'Extra Can Added to Stop #15', message: 'Customer Sanjay Kapoor requested 1 additional can on app. Updated in your stops.', time: '10 mins ago', urgent: true },
  { id: 2, title: 'Morning Route Batch Assigned', message: '40 Cans loaded on tempo DL 1V 3422 from Okhla central plant.', time: '2 hours ago', urgent: false },
  { id: 3, title: 'Cash Settlement Confirmed', message: 'Yesterday evening cash of ₹2,450 successfully reconciled by cashier.', time: '1 day ago', urgent: false }
];

export default function SupplierNotificationsPage() {
  return (
    <SupplierLayout>
      <div className="space-y-6 max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-extrabold text-kp-navy tracking-tight">Dispatch Notifications</h1>
            <p className="text-xs text-kp-muted mt-0.5">Real-time alerts and route adjustments from South Delhi Hub Manager</p>
          </div>
        </div>

        <div className="space-y-3">
          {DISPATCH_ALERTS.map((alert) => (
            <div
              key={alert.id}
              className={`p-5 rounded-2xl border flex items-start gap-4 ${
                alert.urgent ? 'bg-amber-50/60 border-amber-300 shadow-xs' : 'bg-white border-kp-border'
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0">
                <Bell className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-bold text-xs text-kp-navy">{alert.title}</h3>
                  <span className="text-[11px] text-kp-muted">{alert.time}</span>
                </div>
                <p className="text-xs text-kp-muted mt-1">{alert.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SupplierLayout>
  );
}
