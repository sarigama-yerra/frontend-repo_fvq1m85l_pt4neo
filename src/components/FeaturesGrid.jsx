import React from 'react';
import { Car, Shield, Clock, Wallet, MapPin, Phone } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="group rounded-xl border border-white/10 bg-white/5 p-5 text-white shadow-sm transition hover:border-white/20 hover:bg-white/10">
    <div className="mb-3 inline-flex rounded-lg bg-white/10 p-2 text-white">
      <Icon className="h-5 w-5" />
    </div>
    <h4 className="text-lg font-semibold">{title}</h4>
    <p className="mt-1 text-sm text-white/70">{desc}</p>
  </div>
);

export default function FeaturesGrid() {
  return (
    <section id="features" className="relative w-full bg-neutral-950 py-14 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">Built for riders and drivers</h2>
            <p className="mt-2 max-w-2xl text-white/70">
              Real‑time tracking, transparent pricing, and safety-first tooling come standard.
            </p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold"><Car className="h-5 w-5" /> Rider</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <FeatureCard icon={MapPin} title="One‑tap pickup" desc="Auto-detect your location with precise GPS for faster pickups." />
              <FeatureCard icon={Clock} title="Live ETA" desc="Track your driver on the map with minute-by-minute arrival updates." />
              <FeatureCard icon={Wallet} title="Upfront fares" desc="Clear pricing with surge transparency and multiple pay options." />
              <FeatureCard icon={Shield} title="Safety tools" desc="SOS, trip sharing, and verified profiles for peace of mind." />
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold"><Shield className="h-5 w-5" /> Driver</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <FeatureCard icon={Clock} title="Smart dispatch" desc="Requests matched by proximity, traffic, and preferences." />
              <FeatureCard icon={Phone} title="In‑app support" desc="Fast help with chat assistance when you need it most." />
              <FeatureCard icon={Wallet} title="Earnings insights" desc="Daily and weekly breakdowns with withdrawal tracking." />
              <FeatureCard icon={Car} title="Seamless navigation" desc="Optimized routes with live traffic awareness." />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
