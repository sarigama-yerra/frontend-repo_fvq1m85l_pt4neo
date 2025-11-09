import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroCover() {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlay for readability without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Live. Safe. On‑time.
        </span>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          Move smarter with
          <span className="bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent"> FluxRide</span>
        </h1>
        <p className="mt-4 max-w-2xl text-white/80">
          Real‑time ride matching, transparent fares, and safety‑first design for riders and drivers.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#rider"
            className="rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-black shadow hover:bg-white/90"
          >
            I'm a Rider
          </a>
          <a
            href="#driver"
            className="rounded-md border border-white/20 bg-transparent px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
          >
            I'm a Driver
          </a>
        </div>
      </div>
    </section>
  );
}
