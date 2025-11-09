import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-black py-10 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-lg font-semibold">FluxRide</p>
            <p className="text-sm text-white/60">Move smarter. Arrive safer.</p>
          </div>
          <nav className="flex items-center gap-4 text-sm text-white/70">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#rider" className="hover:text-white">Rider</a>
            <a href="#driver" className="hover:text-white">Driver</a>
            <a href="#support" className="hover:text-white">Support</a>
          </nav>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} FluxRide Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
