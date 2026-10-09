'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Droplets, LayoutDashboard, Truck, CheckSquare, Users,
  MapPin, IndianRupee, AlertCircle, Bell, User,
  Menu, X, LogOut, ChevronRight, Phone, Power
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const NAV_ITEMS = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: "Today's Deliveries", href: '/today', icon: CheckSquare },
  { name: 'All Deliveries', href: '/deliveries', icon: Truck },
  { name: 'My Route Customers', href: '/customers', icon: Users },
  { name: 'Route Map', href: '/routes', icon: MapPin },
  { name: 'Cash Collections', href: '/payments', icon: IndianRupee },
  { name: 'Report Issue / Blocker', href: '/issues', icon: AlertCircle },
  { name: 'Dispatch Alerts', href: '/notifications', icon: Bell },
  { name: 'Driver Profile', href: '/profile', icon: User },
];

export default function SupplierLayout({ children }: LayoutProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOnDuty, setIsOnDuty] = useState(true);

  return (
    <div className="min-h-screen flex bg-kp-ice">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-kp-border fixed inset-y-0 z-30">
        {/* Brand */}
        <div className="h-16 flex items-center px-6 border-b border-kp-border">
          <Link href="/dashboard" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-500 flex items-center justify-center text-white shadow-sm shadow-amber-500/30">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <span className="font-black text-lg text-kp-navy tracking-tight">KENT<span className="text-amber-500">FLEET</span></span>
              <span className="text-[10px] font-semibold text-kp-muted block leading-none">Driver & Dispatch</span>
            </div>
          </Link>
        </div>

        {/* Driver Badge */}
        <div className="p-4 mx-3 my-3 bg-amber-50/70 rounded-2xl border border-amber-200/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-white font-bold flex items-center justify-center text-sm shadow-xs">
              RK
            </div>
            <div className="overflow-hidden">
              <h4 className="font-bold text-xs text-kp-navy truncate">Rajesh Kumar</h4>
              <p className="text-[11px] text-kp-muted truncate">DL 1V 3422 • Saket Route</p>
            </div>
          </div>
          <div className="mt-3 pt-2.5 border-t border-amber-200/60 flex items-center justify-between">
            <span className="text-[11px] text-kp-muted font-medium">Duty Status:</span>
            <button
              onClick={() => setIsOnDuty(!isOnDuty)}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold transition-all ${
                isOnDuty
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-slate-300 text-slate-700'
              }`}
            >
              <Power className="w-3 h-3" />
              <span>{isOnDuty ? 'ON DUTY' : 'OFF DUTY'}</span>
            </button>
          </div>
        </div>

        {/* Navigation list */}
        <nav className="flex-1 px-3 space-y-1 overflow-y-auto py-2">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/dashboard' && pathname?.startsWith(item.href));
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-amber-500 text-white shadow-xs shadow-amber-500/20'
                    : 'text-kp-muted hover:text-kp-navy hover:bg-kp-ice'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-kp-muted'}`} />
                <span>{item.name}</span>
                {isActive && <ChevronRight className="w-3.5 h-3.5 ml-auto text-white/80" />}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Hub Help & Logout */}
        <div className="p-3 border-t border-kp-border space-y-2">
          <a
            href="tel:+919876543210"
            className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium text-kp-navy bg-kp-ice hover:bg-kp-light transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-amber-600" />
            <span>Hub Hotline: +91 98765 43210</span>
          </a>
          <Link
            href="http://localhost:3000/login"
            className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-rose-600 hover:bg-rose-50 transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>End Shift & Logout</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 lg:pl-64">
        {/* Topbar */}
        <header className="h-16 bg-white border-b border-kp-border sticky top-0 z-20 flex items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-xl text-kp-navy hover:bg-kp-ice"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              <span className={`w-2.5 h-2.5 rounded-full ${isOnDuty ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'}`}></span>
              <span className="text-xs font-bold text-kp-navy">
                {isOnDuty ? 'Live Route: Saket Morning (16 Pending)' : 'Driver Off Duty'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Quick Duty Button for Mobile */}
            <button
              onClick={() => setIsOnDuty(!isOnDuty)}
              className={`lg:hidden px-3 py-1 rounded-xl text-xs font-bold ${
                isOnDuty ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-200 text-slate-700'
              }`}
            >
              {isOnDuty ? 'ON DUTY' : 'OFF'}
            </button>

            {/* Notification Bell */}
            <Link
              href="/notifications"
              className="relative p-2 rounded-xl text-kp-navy hover:bg-kp-ice transition-colors"
            >
              <Bell className="w-5 h-5 text-kp-muted" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-amber-500"></span>
            </Link>

            {/* Profile Avatar */}
            <Link href="/profile" className="flex items-center gap-2 pl-2">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-white text-xs font-bold flex items-center justify-center">
                RK
              </div>
            </Link>
          </div>
        </header>

        {/* Content Body */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 pb-20 lg:pb-8">
          {children}
        </main>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-kp-navy z-40 lg:hidden"
            />
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 w-72 bg-white z-50 flex flex-col lg:hidden shadow-2xl"
            >
              <div className="h-16 flex items-center justify-between px-6 border-b border-kp-border">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-amber-500 flex items-center justify-center text-white">
                    <Truck className="w-4 h-4" />
                  </div>
                  <span className="font-black text-base text-kp-navy">KENT<span className="text-amber-500">FLEET</span></span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-kp-muted hover:text-kp-navy"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
                {NAV_ITEMS.map((item) => {
                  const isActive = pathname === item.href;
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold ${
                        isActive ? 'bg-amber-500 text-white' : 'text-kp-navy hover:bg-kp-ice'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </nav>

              <div className="p-4 border-t border-kp-border">
                <Link
                  href="http://localhost:3000/login"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-rose-50 text-rose-600 text-xs font-bold"
                >
                  <LogOut className="w-4 h-4" /> End Shift & Exit
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Bottom Navigation Bar */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 bg-white border-t border-kp-border z-20 flex items-center justify-around py-2 px-1">
        {[
          { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
          { name: "Today's", href: '/today', icon: CheckSquare },
          { name: 'Route', href: '/routes', icon: MapPin },
          { name: 'Cash', href: '/payments', icon: IndianRupee },
          { name: 'Profile', href: '/profile', icon: User }
        ].map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center gap-1 py-1 px-2 text-[10px] font-semibold transition-colors ${
                isActive ? 'text-amber-600' : 'text-kp-muted'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
