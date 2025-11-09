import React from 'react';
import HeroCover from './components/HeroCover';
import FeaturesGrid from './components/FeaturesGrid';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 text-white">
        <a href="#home" className="text-base font-semibold tracking-tight">FluxRide</a>
        <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#rider" className="hover:text-white">Rider</a>
          <a href="#driver" className="hover:text-white">Driver</a>
          <a href="#support" className="hover:text-white">Support</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#login" className="rounded-md border border-white/20 px-3 py-1.5 text-xs font-medium text-white hover:bg-white/10">Sign in</a>
          <a href="#get-started" className="rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-black hover:bg-white/90">Get started</a>
        </div>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black font-inter text-white">
      <Header />
      <main className="pt-14">
        <HeroCover />
        <FeaturesGrid />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
