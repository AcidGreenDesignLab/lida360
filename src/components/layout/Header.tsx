import Link from 'next/link';
import { Navigation } from './Navigation';

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-glass-surface backdrop-blur-md border-b border-glass-border shadow-2xl px-6 py-4 flex items-center justify-between">
      <div className="flex items-center">
        <Link href="/" className="flex flex-col items-start" aria-label="LIDA360 Home">
          <span className="font-heading text-4xl font-bold tracking-tight text-white">
            <span>LIDA</span><span className="text-accent-pink">360</span>
          </span>
          <span className="text-[10px] text-slate-300 font-sans tracking-wide uppercase mt-1">Reputation is your greatest asset. Drive it!™</span>
        </Link>
      </div>
      <Navigation />
      <div className="hidden md:block">
        <Link 
          href="/work-with-lida"
          className="bg-accent text-white rounded-full px-6 py-2 font-sans text-lg hover:bg-accent-light transition-colors inline-block shadow-md"
        >
          Work With Lida
        </Link>
      </div>
      <div className="md:hidden">
        {/* Mobile menu button placeholder */}
        <button aria-label="Open menu" className="p-2 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </header>
  );
}