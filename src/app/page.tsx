import Link from 'next/link';

export default function Option1Page() {
  return (
    <div className="bg-bg-primary min-h-screen">
      {/* 1. HERO SECTION WITH BACKGROUND VIDEO */}
      <section className="relative min-h-[90vh] w-full flex items-end justify-start overflow-hidden">
        {/* Background Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/LIDA360 Hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Dark Navy Overlay for Readability */}
        <div className="absolute inset-0 bg-surface-deep/60 z-10"></div>
        
        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 pb-[180px] pt-32 w-full">
          <div className="max-w-4xl text-left text-white bg-[#0A112D]/50 backdrop-blur-md border border-glass-border rounded-glass shadow-2xl p-8 md:p-12">
            <span className="text-accent-citron font-sans text-[16px] font-bold tracking-[0.12em] uppercase mb-4 block">
              Strategic Reputation & Influence
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold leading-[1.1] mb-6 text-white">
              Executive Coaching, Personal Branding & Reputation Repair for <span className="text-accent-pink">High-Achieving, Impact-Driven Leaders</span>
            </h1>
            <p className="font-sans text-xl md:text-2xl mb-4 text-surface-light font-normal max-w-3xl">
              Redefine what people think of when they think of you.
            </p>
            <p className="font-sans text-sm md:text-base font-semibold tracking-[0.12em] uppercase text-accent-citron mb-10 max-w-2xl">
              INFLUENCE POSITIVE PERCEPTION. CREATE NEW OPPORTUNITIES. BUILD A MEANINGFUL LEGACY.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/work-with-lida" 
                className="bg-accent text-white hover:bg-accent-light rounded-full px-8 py-3.5 font-sans text-[16px] font-medium transition-colors inline-block text-center shadow-lg"
              >
                Secure Your Strategic Authority (Work With Lida)
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. AS SEEN IN (TRUST LOGOS) */}
      <section className="bg-bg-pure min-h-[750px] flex items-center py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-accent-pink font-sans text-[16px] font-bold tracking-[0.12em] uppercase mb-6 block">
            TRUSTED CONSULTANT TO GLOBAL CLIENTS & AS SEEN IN
          </span>
          <div className="flex justify-center items-center opacity-85 hover:opacity-100 transition-opacity w-full">
            <img 
              src="/as-seen-in_logos.png" 
              alt="Media appearances logos: Google, Disney, SiriusXM, etc." 
              className="w-full h-auto object-contain filter invert dark:invert-0"
            />
          </div>
        </div>
      </section>

      {/* 3. THE LIDA360 FRAMEWORK */}
      <section className="min-h-[750px] flex items-center py-24 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent-pink font-sans text-[16px] font-bold tracking-[0.12em] uppercase mb-3 block">
              Methodology
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-4">
              The LIDA360 Framework
            </h2>
            <p className="font-sans text-lg text-text-muted">
              Strategic Authority and Reputation Management for Global Leaders Who Value Authenticity as Much as Results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Card 1: Executive Branding */}
            <Link href="/Consulting/executive-branding" className="flex flex-col items-center md:items-start text-center md:text-left bg-[#FCFCFC] p-8 border-4 border-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer">
              <div className="w-full flex justify-center mb-6">
                <img 
                  src="/icon_executive-coaching.png" 
                  alt="Executive Branding Icon" 
                  className="w-[120px] h-[127px] object-contain"
                />
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">Executive Branding</h3>
              <p className="font-sans text-base text-text-muted leading-relaxed">
                Architect a brand DNA that commands respect and opens doors to elite opportunities.
              </p>
            </Link>

            {/* Card 2: Reputation Recovery */}
            <Link href="/Consulting/reputation-repair" className="flex flex-col items-center md:items-start text-center md:text-left bg-[#FCFCFC] p-8 border-4 border-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer">
              <div className="w-full flex justify-center mb-6">
                <img 
                  src="/icon_image-repair.png" 
                  alt="Reputation Recovery Icon" 
                  className="w-[120px] h-[127px] object-contain"
                />
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">Reputation Recovery</h3>
              <p className="font-sans text-base text-text-muted leading-relaxed">
                Protect your professional capital. Move from crisis to control with a confidential, high-stakes strategy.
              </p>
            </Link>

            {/* Card 3: The Human Advantage */}
            <Link href="/Consulting" className="flex flex-col items-center md:items-start text-center md:text-left bg-[#FCFCFC] p-8 border-4 border-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer">
              <div className="w-full flex justify-center mb-6">
                <img 
                  src="/icon_personal-branding.png" 
                  alt="The Human Advantage Icon" 
                  className="w-[120px] h-[127px] object-contain"
                />
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">The Human Advantage</h3>
              <p className="font-sans text-base text-text-muted leading-relaxed">
                Equip your organization with the frameworks for authentic influence that technology cannot replicate.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. BIO SECTION (ABOUT LIDA) */}
      <section className="min-h-[750px] flex items-center py-24 bg-bg-pure">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Bio Image */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md aspect-[3/4] overflow-hidden rounded-lg shadow-2xl border-4 border-white">
                <img 
                  src="/LidaCitroen_executive-coach.png" 
                  alt="Lida Citroën Executive Coach" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Right: Bio Content */}
            <div className="lg:col-span-7 text-left">
              <span className="text-accent-pink font-sans text-[16px] font-bold tracking-[0.12em] uppercase mb-4 block">
                Meet Lida Citroën
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight mb-6">
                I’m Lida Citroën, executive coach, personal branding expert, influence builder, and reputation management pro.
              </h2>
              <div className="space-y-6 font-sans text-lg text-text-muted leading-relaxed mb-8">
                <p>
                  For 20+ years, I’ve helped hundreds of global executives, entrepreneurs, and thought leaders like you impact the way they’re perceived by the people who matter to them.
                </p>
                <p>
                  A published author (7x), TEDx speaker, and LinkedIn Learning instructor, I’m also a trusted consultant to clients like Google, Disney, and SiriusXM.
                </p>
                <p>
                  Making a meaningful, lasting difference is my mission. I live my values and am passionate about giving back to military veterans transitioning to civilian life and work.
                </p>
              </div>
              <Link 
                href="/about" 
                className="text-accent-pink hover:text-accent-pink/80 font-sans font-semibold text-lg inline-flex items-center gap-2 transition-colors border-b-2 border-accent-pink/30 hover:border-accent-pink pb-1"
              >
                Read more about my values and approach &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SERVICES CALLOUT (IT'S TIME FOR A NEW CAREER STRATEGY) */}
      <section className="min-h-[750px] flex items-center py-24 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">It’s time for a new career strategy</h2>
            <p className="font-sans text-lg text-text-muted">
              One that plays to your strengths, aligns with your values, and puts you in control of your destiny.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
            {/* Service 1: Executive Coaching */}
            <div className="p-8 bg-[#FCFCFC] border-4 border-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
              <h3 className="font-display text-2xl font-bold mb-4 text-primary">Executive Coaching</h3>
              <p className="font-sans text-sm text-text-muted mb-6">
                confidential 1:1 guidance to refine your personal presence and leadership reputation.
              </p>
              <Link href="/Consulting/executive-branding" className="text-accent-pink font-sans font-medium hover:underline">
                Learn more &rarr;
              </Link>
            </div>

            {/* Service 2: Speaking */}
            <div className="p-8 bg-[#FCFCFC] border-4 border-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
              <h3 className="font-display text-2xl font-bold mb-4 text-primary">Speaking</h3>
              <p className="font-sans text-sm text-text-muted mb-6">
                Keynotes and workshops that provide actionable strategies for authentic leadership.
              </p>
              <Link href="/speaking" className="text-accent-pink font-sans font-medium hover:underline">
                Learn more &rarr;
              </Link>
            </div>

            {/* Service 3: Podcast */}
            <div className="p-8 bg-[#FCFCFC] border-4 border-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
              <h3 className="font-display text-2xl font-bold mb-4 text-primary">Podcast</h3>
              <p className="font-sans text-sm text-text-muted mb-6">
                Deep dives and insights on reputation management, personal branding, and career growth.
              </p>
              <Link href="/podcast" className="text-accent-pink font-sans font-medium hover:underline">
                Learn more &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION SECTION */}
      <section className="min-h-[750px] flex items-center py-24 bg-bg-pure">
        <div className="max-w-7xl mx-auto px-6">
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

      {/* 7. NEWSLETTER SIGNUP */}
      <section className="min-h-[750px] flex items-center py-24 bg-bg-alt">
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
              className="px-6 py-4 bg-bg-pure border border-ui-muted/20 focus:border-accent-pink focus:outline-none rounded-full sm:rounded-r-none sm:rounded-l-full flex-grow text-text-primary text-base font-sans"
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
