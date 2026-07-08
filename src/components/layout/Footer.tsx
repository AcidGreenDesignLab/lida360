import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-surface-deep text-surface-white py-12 px-6 border-t border-surface-light/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <span className="font-heading text-3xl font-bold mb-4 block text-surface-white">LIDA<span className="text-secondary">360</span></span>
          <p className="text-sm font-sans text-surface-light/80">Empowering high-achieving leaders to take control of their personal brand and reputation.</p>
        </div>
        <div>
          <h3 className="font-sans font-bold text-lg mb-4 text-secondary">Services</h3>
          <ul className="space-y-2 font-sans text-surface-light">
            <li><Link href="/speaking" className="hover:text-accent-pink transition-colors">Speaking</Link></li>
            <li><Link href="/Consulting" className="hover:text-accent-pink transition-colors">Consulting</Link></li>
            <li><Link href="/Consulting/executive-branding" className="hover:text-accent-pink transition-colors">Executive Branding</Link></li>
            <li><Link href="/Consulting/reputation-repair" className="hover:text-accent-pink transition-colors">Reputation Repair</Link></li>
            <li><Link href="/military" className="hover:text-accent-pink transition-colors">Military</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-sans font-bold text-lg mb-4 text-secondary">Company</h3>
          <ul className="space-y-2 font-sans text-surface-light">
            <li><Link href="/about" className="hover:text-accent-pink transition-colors">About</Link></li>
            <li><Link href="/about/meet-lida" className="hover:text-accent-pink transition-colors">Meet Lida</Link></li>
            <li><Link href="/blog" className="hover:text-accent-pink transition-colors">Blog</Link></li>
            <li><Link href="/work-with-lida" className="hover:text-accent-pink transition-colors">Work With Lida</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-sans font-bold text-lg mb-4 text-secondary">Contact</h3>
          <p className="text-sm font-sans text-surface-light/80 mb-2">Have a question or want to work together?</p>
          <Link 
            href="/work-with-lida"
            className="text-accent-pink hover:underline font-sans font-medium"
          >
            Get in touch &rarr;
          </Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-surface-light/20 text-center text-sm font-sans text-surface-light/60">
        <p>&copy; {new Date().getFullYear()} LIDA360. All rights reserved.</p>
      </div>
    </footer>
  );
}