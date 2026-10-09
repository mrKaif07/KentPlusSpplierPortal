'use client';

import { use, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  ArrowLeft, CheckCircle2, XCircle, Phone, Navigation,
  ShieldCheck, IndianRupee, Package, KeyRound, AlertTriangle
} from 'lucide-react';
import SupplierLayout from '@/components/SupplierLayout';

export default function SupplierDeliveryActionPage({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = use(params);
  const deliveryId = unwrappedParams.id;
  const router = useRouter();

  const [cansDelivered, setCansDelivered] = useState(2);
  const [emptyCollected, setEmptyCollected] = useState(2);
  const [paymentMode, setPaymentMode] = useState<'ledger' | 'cash' | 'upi'>('ledger');
  const [cashAmount, setCashAmount] = useState(130);
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState(false);
  const [completed, setCompleted] = useState(false);

  // Failed modal
  const [showFailedModal, setShowFailedModal] = useState(false);
  const [failedReason, setFailedReason] = useState('Customer Door Locked / Not Answering');
  const [failedSuccess, setFailedSuccess] = useState(false);

  const handleComplete = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate OTP (demo OTP is 1234 or any 4 digits)
    if (otp !== '1234' && otp.length !== 4) {
      setOtpError(true);
      return;
    }
    setOtpError(false);
    setCompleted(true);
  };

  const handleFailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFailedSuccess(true);
    setTimeout(() => {
      setShowFailedModal(false);
      router.push('/today');
    }, 1500);
  };

  return (
    <SupplierLayout>
      <div className="space-y-6 max-w-3xl mx-auto">
        <div className="flex items-center gap-3">
          <Link
            href="/today"
            className="p-2 rounded-xl bg-white border border-kp-border text-kp-navy hover:bg-kp-ice transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <h1 className="text-2xl font-extrabold text-kp-navy tracking-tight">Delivery Stop #{deliveryId}</h1>
            <p className="text-xs text-kp-muted">Customer: Rahul Sharma • Flat 302, Block M, Saket</p>
          </div>
        </div>

        {!completed ? (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-kp-border shadow-xs space-y-6">
            {/* Customer Details Box */}
            <div className="bg-kp-ice/60 p-4 rounded-2xl border border-kp-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="font-extrabold text-sm text-kp-navy">Rahul Sharma</h3>
                <p className="text-xs text-kp-muted">Flat 302, Block M, Saket • 3rd Floor (Lift: Yes)</p>
                <span className="text-[11px] font-semibold text-kp-primary">Order: 2 Cans Regular Daily</span>
              </div>
              <div className="flex gap-2">
                <a
                  href="tel:9811122334"
                  className="px-3.5 py-2 rounded-xl bg-white border border-kp-border font-bold text-xs text-kp-navy flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-600" /> Call (9811122334)
                </a>
              </div>
            </div>

            <form onSubmit={handleComplete} className="space-y-6">
              {/* Quantities */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-kp-navy mb-1.5">Delivered 20L Jars</label>
                  <div className="flex items-center gap-3">
                    {[1, 2, 3, 4].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setCansDelivered(num)}
                        className={`flex-1 py-2.5 rounded-xl border font-bold text-xs transition-all ${
                          cansDelivered === num
                            ? 'border-amber-500 bg-amber-50 text-amber-900 ring-2 ring-amber-400'
                            : 'border-kp-border bg-white text-kp-muted'
                        }`}
                      >
                        {num} Cans
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-kp-navy mb-1.5">Empty Containers Collected</label>
                  <div className="flex items-center gap-3">
                    {[0, 1, 2, 3].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setEmptyCollected(num)}
                        className={`flex-1 py-2.5 rounded-xl border font-bold text-xs transition-all ${
                          emptyCollected === num
                            ? 'border-kp-primary bg-kp-light text-kp-navy ring-2 ring-kp-primary'
                            : 'border-kp-border bg-white text-kp-muted'
                        }`}
                      >
                        {num} Empty
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Payment Mode */}
              <div>
                <label className="block text-xs font-bold text-kp-navy mb-2">Payment Collection Status</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMode('ledger')}
                    className={`p-3 rounded-xl border text-xs font-bold transition-all ${
                      paymentMode === 'ledger'
                        ? 'border-amber-500 bg-amber-50 text-amber-900 ring-2 ring-amber-400'
                        : 'border-kp-border bg-white text-kp-muted'
                    }`}
                  >
                    Monthly Ledger
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMode('cash')}
                    className={`p-3 rounded-xl border text-xs font-bold transition-all ${
                      paymentMode === 'cash'
                        ? 'border-amber-500 bg-amber-50 text-amber-900 ring-2 ring-amber-400'
                        : 'border-kp-border bg-white text-kp-muted'
                    }`}
                  >
                    Cash Collected
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMode('upi')}
                    className={`p-3 rounded-xl border text-xs font-bold transition-all ${
                      paymentMode === 'upi'
                        ? 'border-amber-500 bg-amber-50 text-amber-900 ring-2 ring-amber-400'
                        : 'border-kp-border bg-white text-kp-muted'
                    }`}
                  >
                    UPI QR Scanned
                  </button>
                </div>
              </div>

              {/* OTP Verification Box */}
              <div className="bg-amber-50/60 p-5 rounded-2xl border border-amber-200">
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-xs font-bold text-kp-navy flex items-center gap-1.5">
                    <KeyRound className="w-4 h-4 text-amber-600" /> Customer OTP Verification
                  </label>
                  <span className="text-[11px] font-mono text-amber-700 bg-amber-100 px-2 py-0.5 rounded-md">
                    Demo OTP: 1234
                  </span>
                </div>
                <p className="text-[11px] text-kp-muted mb-3">
                  Ask customer for the 4-digit OTP shown in their Kent Plus app or received via SMS.
                </p>

                <input
                  type="text"
                  maxLength={4}
                  required
                  value={otp}
                  onChange={(e) => {
                    setOtp(e.target.value);
                    setOtpError(false);
                  }}
                  placeholder="Enter 4-digit OTP (e.g. 1234)"
                  className="w-full text-center tracking-widest font-mono text-xl py-3 rounded-xl border border-amber-300 bg-white font-bold text-kp-navy focus:outline-none focus:ring-2 focus:ring-amber-500"
                />

                {otpError && (
                  <p className="text-xs font-bold text-rose-600 mt-2 text-center">
                    Invalid OTP! Please use demo OTP: 1234
                  </p>
                )}
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowFailedModal(true)}
                  className="py-3 px-4 rounded-xl border border-rose-300 bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <XCircle className="w-4 h-4" /> Report Delivery Failed
                </button>

                <button
                  type="submit"
                  className="flex-1 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-sm shadow-md shadow-amber-500/25 transition-all flex items-center justify-center gap-2 hover:scale-[1.01]"
                >
                  <CheckCircle2 className="w-5 h-5" /> Confirm Delivery & Settle
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Delivery Completed Success Card */
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-kp-border shadow-lg text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h2 className="text-2xl font-black text-kp-navy mb-1">Delivery Logged Successfully!</h2>
            <p className="text-xs text-kp-muted mb-6">
              {cansDelivered} Cans delivered to Rahul Sharma. {emptyCollected} empty cans collected. Stock updated.
            </p>

            <div className="p-4 rounded-2xl bg-kp-ice border border-kp-border text-xs text-left max-w-sm mx-auto mb-6 space-y-1">
              <div className="flex justify-between">
                <span className="text-kp-muted">Remaining Van Stock:</span>
                <span className="font-bold text-kp-navy">14 Cans</span>
              </div>
              <div className="flex justify-between">
                <span className="text-kp-muted">Empty Jars on Vehicle:</span>
                <span className="font-bold text-kp-navy">24 Jars</span>
              </div>
              <div className="flex justify-between">
                <span className="text-kp-muted">Customer OTP Status:</span>
                <span className="font-bold text-emerald-600">✓ Verified (1234)</span>
              </div>
            </div>

            <Link
              href="/today"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-amber-500 text-white font-bold text-xs hover:bg-amber-600 shadow-md shadow-amber-500/20 transition-all hover:scale-105"
            >
              Continue to Next Stop #14
            </Link>
          </div>
        )}

        {/* Failed Modal */}
        {showFailedModal && (
          <div className="fixed inset-0 bg-kp-navy/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-kp-border">
              {failedSuccess ? (
                <div className="text-center py-6">
                  <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto mb-3">
                    <XCircle className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-kp-navy">Stop Marked As Failed</h3>
                  <p className="text-xs text-kp-muted">Hub dispatch coordinator has been notified.</p>
                </div>
              ) : (
                <form onSubmit={handleFailSubmit} className="space-y-4">
                  <h3 className="font-bold text-lg text-kp-navy flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-rose-600" /> Mark Delivery Failed
                  </h3>
                  <p className="text-xs text-kp-muted">Please specify why this scheduled delivery could not be completed.</p>

                  <div>
                    <label className="block text-xs font-bold text-kp-navy mb-1">Reason</label>
                    <select
                      value={failedReason}
                      onChange={(e) => setFailedReason(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-kp-border text-xs text-kp-navy"
                    >
                      <option value="Customer Door Locked / Not Answering">Customer Door Locked / Not Answering</option>
                      <option value="Customer Requested Delivery in Evening">Customer Requested Rescheduling to Evening</option>
                      <option value="Customer Refused Delivery">Customer Refused Delivery (Already Has Water)</option>
                      <option value="No Empty Cans Available">No Empty Cans to Exchange</option>
                      <option value="Address Inaccessible">Address Inaccessible / Gate Locked</option>
                    </select>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setShowFailedModal(false)}
                      className="flex-1 py-2.5 rounded-xl border border-kp-border text-xs font-semibold text-kp-navy"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-2.5 rounded-xl bg-rose-600 text-white text-xs font-bold hover:bg-rose-700"
                    >
                      Confirm Failed
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
