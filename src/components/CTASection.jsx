import React from 'react';

export default function CTASection() {
  return (
    <section className="w-full bg-gradient-to-b from-neutral-950 to-black py-16 text-white">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h3 className="text-2xl font-semibold sm:text-3xl">Ready to roll?</h3>
        <p className="mx-auto mt-3 max-w-2xl text-white/70">
          Experience ultra‑reliable rides and earning tools built for the road. Create your profile and take your first trip in minutes.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#rider" className="rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-black shadow hover:bg-white/90">Get the Rider App</a>
          <a href="#driver" className="rounded-md border border-white/20 bg-transparent px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10">Drive with FluxRide</a>
        </div>
      </div>
    </section>
  );
}
