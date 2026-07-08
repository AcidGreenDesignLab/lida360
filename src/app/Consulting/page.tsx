import Link from 'next/link';

export default function ConsultingPage() {
  return (
    <div className="bg-bg-primary min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[75vh] w-full flex items-end justify-start overflow-hidden bg-surface-deep">
        {/* Background Image: Consulting Hero context */}
        <div className="absolute top-0 left-0 right-0 z-0 opacity-30 h-full w-full">
          <img 
            src="/businessman_with_team.jpg" 
            alt="Lida Citroën Consulting" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Dark Navy Overlay for Readability */}
        <div className="absolute inset-0 bg-[#0A112D]/30 z-10"></div>
        
        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 pb-[100px] pt-32 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 text-left text-white bg-[#0A112D]/50 backdrop-blur-md border border-glass-border rounded-glass shadow-2xl p-8 md:p-12">
              <span className="text-accent-citron font-sans text-[16px] font-bold tracking-[0.12em] uppercase mb-4 block">
                LIDA360 - CONSULTING
              </span>
              <h1 className="text-4xl md:text-5xl font-display font-bold leading-[1.1] mb-6 text-white">
                Manage the way you’re perceived by the people who matter.
              </h1>
              <p className="font-sans text-lg md:text-xl text-surface-light mb-8 max-w-2xl leading-relaxed">
                See how we can work together toward meaningful results.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/work-with-lida" 
                  className="bg-accent text-white hover:bg-accent-light rounded-full px-8 py-3.5 font-sans text-[16px] font-medium transition-colors inline-block text-center shadow-lg"
                >
                  Secure Your Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PERSONAL BRANDING SECTION */}
      <section className="min-h-[700px] flex items-center py-24 bg-bg-pure">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Text */}
            <div className="lg:col-span-7 text-left">
              <span className="text-accent-pink font-sans text-[16px] font-bold tracking-[0.12em] uppercase mb-4 block">
                PERSONAL BRANDING
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight mb-6 text-text-primary">
                Enhance your presence, pivot your career, or manage your reputation.
              </h2>
              <p className="font-sans text-lg text-text-muted mb-8 max-w-2xl leading-relaxed">
                Starts with a no-stone-left-unturned assessment of your strengths, blind spots, and audience so you can more easily identify the right opportunities and begin creating your legacy today.
              </p>
              <Link 
                href="/Consulting/executive-branding" 
                className="text-accent-pink hover:text-accent-pink/80 font-sans font-semibold text-lg inline-flex items-center gap-2 transition-colors border-b-2 border-accent-pink/30 hover:border-accent-pink pb-1"
              >
                See how &rarr;
              </Link>
            </div>

            {/* Right Column: Graphic Card */}
            <div className="lg:col-span-5 flex justify-center w-full">
              <div className="relative w-full max-w-md aspect-square overflow-hidden rounded-lg border-4 border-white shadow-2xl bg-bg-alt flex items-center justify-center p-12">
                <img 
                  src="/icon_personal-branding.png" 
                  alt="Personal Branding Icon" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. REPUTATION REPAIR SECTION */}
      <section className="min-h-[700px] flex items-center py-24 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Graphic Card */}
            <div className="lg:col-span-5 flex justify-center w-full order-2 lg:order-1">
              <div className="relative w-full max-w-md aspect-square overflow-hidden rounded-lg border-4 border-white shadow-2xl bg-bg-pure flex items-center justify-center p-12">
                <img 
                  src="/icon_image-repair-1.png" 
                  alt="Reputation Repair Icon" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Right Column: Text */}
            <div className="lg:col-span-7 text-left order-1 lg:order-2">
              <span className="text-accent-pink font-sans text-[16px] font-bold tracking-[0.12em] uppercase mb-4 block">
                REPUTATION REPAIR
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight mb-6 text-text-primary">
                Your reputation is everything. When something bad happens, you need quick, smart action.
              </h2>
              <p className="font-sans text-lg text-text-muted mb-8 max-w-2xl leading-relaxed">
                We’ll take a clear-headed approach to getting your image back on track with positive goal-setting and tactics that actually work—so you can get back in control of your career and legacy.
              </p>
              <Link 
                href="/Consulting/reputation-repair" 
                className="text-accent-pink hover:text-accent-pink/80 font-sans font-semibold text-lg inline-flex items-center gap-2 transition-colors border-b-2 border-accent-pink/30 hover:border-accent-pink pb-1"
              >
                See how &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SPEAKING SECTION */}
      <section className="min-h-[700px] flex items-center py-24 bg-bg-pure">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Text */}
            <div className="lg:col-span-7 text-left">
              <span className="text-accent-pink font-sans text-[16px] font-bold tracking-[0.12em] uppercase mb-4 block">
                SPEAKING & WORKSHOPS
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight mb-6 text-text-primary">
                Energize your audience or team with more lightbulb moments.
              </h2>
              <p className="font-sans text-lg text-text-muted mb-8 max-w-2xl leading-relaxed">
                Let’s build compelling keynotes, breakout sessions, and workshops designed to drive ACTION! Practical takeaways, and a boost of inspiration.
              </p>
              <Link 
                href="/speaking" 
                className="text-accent-pink hover:text-accent-pink/80 font-sans font-semibold text-lg inline-flex items-center gap-2 transition-colors border-b-2 border-accent-pink/30 hover:border-accent-pink pb-1"
              >
                See how &rarr;
              </Link>
            </div>

            {/* Right Column: Graphic Card */}
            <div className="lg:col-span-5 flex justify-center w-full">
              <div className="relative w-full max-w-md aspect-square overflow-hidden rounded-lg border-4 border-white shadow-2xl bg-bg-alt flex items-center justify-center p-12">
                <img 
                  src="/icon_executive-coaching.png" 
                  alt="Speaking & Consulting Icon" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION SECTION */}
      <section className="min-h-[700px] flex items-center py-24 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: CTA Text */}
            <div className="lg:col-span-7 text-left text-text-primary">
              <span className="text-accent-citron font-sans text-[16px] font-bold tracking-[0.12em] uppercase mb-4 block">
                Get Started
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6 text-text-primary">
                Make your next move a strategic one.
              </h2>
              <p className="font-sans text-lg md:text-xl text-text-muted mb-8 max-w-2xl leading-relaxed">
                Let’s explore your goals, and see if we’re a fit. From there, we’ll schedule a consultation. Ready to get started?
              </p>
              <Link 
                href="/work-with-lida" 
                className="bg-accent text-white hover:bg-accent-light rounded-full px-8 py-3.5 font-sans text-[16px] font-medium transition-colors inline-block shadow-lg"
              >
                Get in touch &rarr;
              </Link>
            </div>

            {/* Right: CTA Image */}
            <div className="lg:col-span-5 flex justify-center w-full">
              <div className="relative w-full max-w-md aspect-[4/3] overflow-hidden rounded-lg border-4 border-white shadow-2xl">
                <img 
                  src="/cta-Lida.png" 
                  alt="Contact Lida Citroën" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. NEWSLETTER SIGNUP */}
      <section className="min-h-[700px] flex items-center py-24 bg-bg-pure">
        <div className="max-w-7xl mx-auto px-6 text-center w-full">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Create your personal brand on purpose, with purpose.
          </h2>
          <p className="font-sans text-lg text-text-muted mb-10 max-w-2xl mx-auto">
            Get my best tips, insights, and resources on managing your personal brand and reputation, delivered straight to your inbox monthly.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 justify-center items-stretch max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-6 py-4 bg-bg-alt border border-ui-muted/20 focus:border-accent-pink focus:outline-none rounded-full sm:rounded-r-none sm:rounded-l-full flex-grow text-text-primary text-base font-sans"
              required 
            />
            <button 
              type="submit" 
              className="px-8 py-4 bg-accent text-white hover:bg-accent-light rounded-full sm:rounded-l-none sm:rounded-r-full text-base font-sans font-semibold transition-colors shadow-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}