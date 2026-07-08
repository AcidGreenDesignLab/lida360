import Link from 'next/link';

export default function ConsultingPage() {
  const clientNames = [
    'Fast Company',
    'Fox News',
    'Military.com',
    'Forbes',
    'NBC',
    'CNN',
    'Inc.',
    'LinkedIn Learning',
    'Entrepreneur',
    'Harvard Business Review'
  ];

  return (
    <div className="bg-bg-primary min-h-screen pt-24">
      {/* 1. HERO SECTION */}
      <section className="bg-bg-pure py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Content Block */}
            <div className="lg:col-span-7 text-left">
              <span className="text-accent-pink font-sans text-[16px] font-bold tracking-[0.12em] uppercase mb-4 block">
                LIDA360 - CONSULTING
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] mb-6 text-text-primary">
                Manage the way you're perceived <span className="text-accent-pink block sm:inline">by the people</span> who matter.
              </h1>
              <p className="font-sans text-lg text-text-muted mb-8 max-w-2xl leading-relaxed">
                See how we can work together toward meaningful results. Lida Citroën brings 20 years of brand strategy to help you own your narrative.
              </p>
            </div>

            {/* Right: Flipped image with white border and shadow */}
            <div className="lg:col-span-5 relative flex justify-center w-full">
              <div className="relative w-full max-w-md aspect-[4/3] overflow-hidden rounded-lg border-4 border-white shadow-2xl">
                <img 
                  src="/JES04066-FIX.jpg" 
                  alt="Lida Citroën Consulting" 
                  className="w-full h-full object-cover scale-x-[-1]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INFINITE SCROLLING CAROUSEL */}
      <section className="bg-bg-alt border-y border-ui-muted/10 py-6 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-3 text-center">
          <span className="text-[11px] font-sans font-bold tracking-[0.15em] text-ui-muted/80 uppercase block">
            As Seen In & Partnered With
          </span>
        </div>
        <div className="relative w-full flex overflow-x-hidden">
          {/* Marquee Inner Container */}
          <div className="animate-marquee flex items-center gap-16 whitespace-nowrap">
            {/* Duplicate the array to make seamless loop */}
            {[...clientNames, ...clientNames, ...clientNames].map((name, index) => (
              <span 
                key={index} 
                className="text-ui-muted/60 font-sans text-[15px] font-bold tracking-[0.12em] uppercase hover:text-accent-pink transition-colors cursor-default"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHAT WE OFFER SECTION */}
      <section className="bg-bg-pure py-24 min-h-[750px] flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="text-left max-w-3xl mb-16">
            <span className="text-accent-pink font-sans text-[16px] font-bold tracking-[0.12em] uppercase mb-3 block">
              What We Offer
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight text-text-primary">
              Our Consulting Services
            </h2>
          </div>

          <div className="flex flex-col gap-8 w-full">
            {/* Service Card 1: Personal Branding */}
            <div className="border border-ui-muted/10 border-l-4 border-l-accent-pink rounded-r-lg rounded-l-md bg-bg-pure p-8 flex flex-col md:flex-row items-start md:items-center gap-8 justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_35px_rgba(0,0,0,0.08)] transition-all duration-300">
              <div className="flex items-center gap-6 md:gap-8 flex-grow">
                <span className="font-display text-4xl font-bold text-ui-muted/20 w-12 flex-shrink-0">
                  01
                </span>
                <div className="relative w-16 h-16 flex items-center justify-center flex-shrink-0">
                  <svg className="absolute inset-0 w-full h-full text-accent-pink" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
                    <polygon points="50,3 93,25 93,75 50,97 7,75 7,25" />
                  </svg>
                  <img src="/icon_personal-branding.png" className="w-8 h-8 object-contain relative z-10" alt="Icon" />
                </div>
                <div className="text-left">
                  <span className="text-accent-citron font-sans text-[12px] font-bold tracking-[0.15em] uppercase mb-1 block">
                    Enhance Your Presence
                  </span>
                  <h3 className="font-display text-2xl font-bold text-text-primary mb-2">
                    Personal Branding
                  </h3>
                  <p className="font-sans text-sm text-text-muted leading-relaxed max-w-3xl">
                    Enhance your presence, pivot your career, or manage your reputation with a personal branding strategy that starts with a no-stone-left-unturned assessment of your strengths, blind spots, and audience so you can more easily identify the right opportunities and begin creating your legacy today.
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 w-full md:w-auto text-right">
                <Link 
                  href="/Consulting/executive-branding" 
                  className="w-full md:w-auto px-6 py-2.5 bg-bg-alt hover:bg-accent-pink/10 rounded-full text-accent-pink font-sans font-semibold text-[14px] transition-colors inline-block text-center"
                >
                  See More &rarr;
                </Link>
              </div>
            </div>

            {/* Service Card 2: Reputation Repair */}
            <div className="border border-ui-muted/10 border-l-4 border-l-accent-pink rounded-r-lg rounded-l-md bg-bg-pure p-8 flex flex-col md:flex-row items-start md:items-center gap-8 justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_35px_rgba(0,0,0,0.08)] transition-all duration-300">
              <div className="flex items-center gap-6 md:gap-8 flex-grow">
                <span className="font-display text-4xl font-bold text-ui-muted/20 w-12 flex-shrink-0">
                  02
                </span>
                <div className="relative w-16 h-16 flex items-center justify-center flex-shrink-0">
                  <svg className="absolute inset-0 w-full h-full text-accent-pink" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
                    <polygon points="50,3 93,25 93,75 50,97 7,75 7,25" />
                  </svg>
                  <img src="/icon_image-repair-1.png" className="w-8 h-8 object-contain relative z-10" alt="Icon" />
                </div>
                <div className="text-left">
                  <span className="text-accent-citron font-sans text-[12px] font-bold tracking-[0.15em] uppercase mb-1 block">
                    Protect Your Legacy
                  </span>
                  <h3 className="font-display text-2xl font-bold text-text-primary mb-2">
                    Reputation Repair
                  </h3>
                  <p className="font-sans text-sm text-text-muted leading-relaxed max-w-3xl">
                    Your reputation is everything. When something bad happens, you need quick, smart action. We’ll take a clear-headed approach to getting your image back on track with positive goal-setting and tactics that actually work—so you can get back in control of your career and legacy.
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 w-full md:w-auto text-right">
                <Link 
                  href="/Consulting/reputation-repair" 
                  className="w-full md:w-auto px-6 py-2.5 bg-bg-alt hover:bg-accent-pink/10 rounded-full text-accent-pink font-sans font-semibold text-[14px] transition-colors inline-block text-center"
                >
                  See More &rarr;
                </Link>
              </div>
            </div>

            {/* Service Card 3: Executive Coaching */}
            <div className="border border-ui-muted/10 border-l-4 border-l-accent-pink rounded-r-lg rounded-l-md bg-bg-pure p-8 flex flex-col md:flex-row items-start md:items-center gap-8 justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_35px_rgba(0,0,0,0.08)] transition-all duration-300">
              <div className="flex items-center gap-6 md:gap-8 flex-grow">
                <span className="font-display text-4xl font-bold text-ui-muted/20 w-12 flex-shrink-0">
                  03
                </span>
                <div className="relative w-16 h-16 flex items-center justify-center flex-shrink-0">
                  <svg className="absolute inset-0 w-full h-full text-accent-pink" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
                    <polygon points="50,3 93,25 93,75 50,97 7,75 7,25" />
                  </svg>
                  <img src="/icon_executive-coaching.png" className="w-8 h-8 object-contain relative z-10" alt="Icon" />
                </div>
                <div className="text-left">
                  <span className="text-accent-citron font-sans text-[12px] font-bold tracking-[0.15em] uppercase mb-1 block">
                    Energize Your Audience
                  </span>
                  <h3 className="font-display text-2xl font-bold text-text-primary mb-2">
                    Executive Coaching
                  </h3>
                  <p className="font-sans text-sm text-text-muted leading-relaxed max-w-3xl">
                    With a smart, focused, and specific methodology, my process goes deep in determining how you’re perceived by the people who matter most—and the steps to take to alter or enhance that perception. This highly customized process gives you the exact tactics and tools you need to execute on your strategy.
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 w-full md:w-auto text-right">
                <Link 
                  href="/Consulting/executive-branding" 
                  className="w-full md:w-auto px-6 py-2.5 bg-bg-alt hover:bg-accent-pink/10 rounded-full text-accent-pink font-sans font-semibold text-[14px] transition-colors inline-block text-center"
                >
                  See More &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}