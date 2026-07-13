import Link from 'next/link';

interface NavLink {
  href: string;
  label: string;
  submenu?: { href: string; label: string }[];
}

const links: NavLink[] = [
  { href: '/speaking', label: 'Speaking' },
  {
    href: '/Consulting',
    label: 'Consulting',
    submenu: [
      { href: '/Consulting/executive-branding', label: 'Executive Branding' },
      { href: '/Consulting/reputation-repair', label: 'Reputation Repair' },
    ],
  },
  { href: '/military', label: 'Military' },
  {
    href: '/about',
    label: 'About',
    submenu: [
      { href: '/about/meet-lida-and-the-team', label: 'Meet Lida and the Team' },
      { href: '/blog', label: 'Blog' },
      { href: '/media', label: 'Media' },
    ],
  },
  { href: '/books', label: 'Books' },
  { href: '/podcast', label: 'Podcast' },
];

export function Navigation() {
  return (
    <nav aria-label="Primary Navigation" className="hidden md:flex items-center">
      {links.map((link, idx) => {
        // Determine custom margin-left for spacing:
        // - Speaking -> Consulting (idx 1): 30px
        // - Consulting -> Military (idx 2): 24px
        // - Military -> About (idx 3): 30px
        // - About -> Books (idx 4): 24px
        // - Books -> Podcast (idx 5): 30px
        const marginLeft = idx === 0 ? '0px' : (idx === 1 || idx === 3 || idx === 5) ? '30px' : '24px';

        if (link.submenu) {
          return (
            <div key={link.href} style={{ marginLeft }} className="relative group py-2">
              <Link 
                href={link.href}
                className="text-white/90 hover:text-accent-pink font-sans text-lg transition-colors inline-flex items-center gap-1"
              >
                {link.label}
                <svg 
                  className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180 text-ui-muted" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth="2" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </Link>
              
              {/* Dropdown Container */}
              <div className="absolute left-0 top-[90%] pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                <div className="bg-glass-surface backdrop-blur-md border border-glass-border py-2 shadow-2xl rounded-glass overflow-hidden">
                  {link.submenu.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className="block px-4 py-2.5 text-white/80 hover:text-white hover:bg-gradient-to-r hover:from-accent-pink/20 hover:to-accent-pink/80 hover:shadow-[0_0_15px_rgba(209,74,155,0.5)] font-sans text-[16px] transition-all duration-200"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          );
        }

        return (
          <Link 
            key={link.href} 
            href={link.href}
            style={{ marginLeft }}
            className="text-white/90 hover:text-accent-pink font-sans text-lg transition-colors"
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}