import Link from 'next/link';

export default function MilitaryPage() {
  const clientNames = [
    'Disney',
    'Google',
    'GE Healthcare',
    'Talks at Google',
    'TEDx',
    'Military.com',
    'Entrepreneur',
    'SiriusXM'
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
                LIDA360 - MILITARY
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] mb-6 text-text-primary">
                Success Beyond Service. <span className="text-accent-pink block sm:inline">Translating Military Excellence</span> into Corporate Influence.
              </h1>
              <p className="font-sans text-xl font-semibold text-text-primary mb-4 leading-relaxed max-w-2xl">
                Bridging the Gap Between Veteran Talent and Global Employers.
              </p>
              <p className="font-sans text-lg text-text-muted mb-8 max-w-2xl leading-relaxed">
                Transitioning to a civilian career reveals a whole new world of challenges and language. I help veterans take control of their narrative by clarifying their values and communicating their unique value to employers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/work-with-lida"
                  className="bg-accent text-white hover:bg-accent-light rounded-full px-6 py-3.5 font-sans text-[15px] font-semibold transition-colors inline-block text-center shadow-lg"
                >
                  Schedule Free Mentorship Call
                </Link>
                <Link 
                  href="/work-with-lida"
                  className="bg-bg-alt border border-ui-muted/20 text-text-primary hover:bg-ui-muted/5 rounded-full px-6 py-3.5 font-sans text-[15px] font-semibold transition-colors inline-block text-center shadow-md"
                >
                  Harness Veteran Talent
                </Link>
              </div>
            </div>

            {/* Right: Flipped Image with white border and shadow */}
            <div className="lg:col-span-5 relative flex justify-center w-full">
              <div className="relative w-full max-w-md aspect-[4/3] overflow-hidden rounded-lg border-4 border-white shadow-2xl">
                <img 
                  src="/lida-camo-dress.jpg" 
                  alt="Lida Citroën Military Transition Expert" 
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
            Military Outreach Partners & Features
          </span>
        </div>
        <div className="relative w-full flex overflow-x-hidden">
          <div className="animate-marquee flex items-center gap-16 whitespace-nowrap">
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

      {/* 3. INTRODUCTION / WORK WITH LIDA SECTION */}
      <section className="bg-bg-pure py-24 min-h-[750px] flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Copy */}
            <div className="lg:col-span-7 text-left text-text-primary">
              <span className="text-accent-pink font-sans text-[16px] font-bold tracking-[0.12em] uppercase mb-4 block">
                The Transition Challenge
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight mb-6">
                Helping veterans, and the companies that hire them, succeed beyond service.
              </h2>
              <p className="font-sans text-lg text-text-muted mb-6 leading-relaxed">
                Military veterans have the adaptability, dedication, and leadership skills most employers dream of. But for veterans, transitioning from the military to the civilian workforce can be a culture shock. It’s not easy to jump into an environment that operates with vastly different norms, values, and stakes.
              </p>
              <p className="font-sans text-lg text-text-muted mb-6 leading-relaxed">
                And employers often struggle to recruit and engage military talent. They see veterans’ potential, but it can be difficult to figure out how to harness it.
              </p>
              <p className="font-sans text-lg font-semibold text-accent-pink leading-relaxed">
                With the right training and tools, veterans can use their experience to grow a meaningful career. And employers can tap into one of the most valuable and underutilized segments of the talent pool.
              </p>
            </div>

            {/* Right: Intro Image with white border */}
            <div className="lg:col-span-5 flex justify-center w-full">
              <div className="relative w-full max-w-md aspect-[4/3] overflow-hidden rounded-lg border-4 border-white shadow-2xl">
                <img 
                  src="/lida-with-tablet.jpg" 
                  alt="Lida presenting tablet tool to veteran" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DUAL SUPPORT SERVICES SECTION (VETERANS & EMPLOYERS) */}
      <section className="bg-bg-alt py-24 min-h-[750px] flex items-center border-t border-ui-muted/10">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="text-left max-w-3xl mb-16">
            <span className="text-accent-pink font-sans text-[16px] font-bold tracking-[0.12em] uppercase mb-3 block">
              Strategic Support
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight text-text-primary">
              Who We Serve
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Box 1: For Veterans */}
            <div className="bg-[#FCFCFC] p-8 border-4 border-white rounded-lg shadow-lg hover:border-accent-pink/30 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <span className="text-accent-citron font-sans text-sm font-bold tracking-[0.15em] uppercase mb-4 block">For Veterans</span>
                <h3 className="text-2xl font-display font-bold mb-6 text-text-primary">Achieve Your Next Mission</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 font-sans text-text-muted text-base leading-relaxed">
                    <span className="text-accent-pink font-bold text-lg mt-0.5">•</span>
                    <span>Use your military training and experience to build a meaningful civilian career.</span>
                  </li>
                  <li className="flex items-start gap-3 font-sans text-text-muted text-base leading-relaxed">
                    <span className="text-accent-pink font-bold text-lg mt-0.5">•</span>
                    <span>Take control over your career by determining what makes you unique and building your personal brand.</span>
                  </li>
                  <li className="flex items-start gap-3 font-sans text-text-muted text-base leading-relaxed">
                    <span className="text-accent-pink font-bold text-lg mt-0.5">•</span>
                    <span>Learn how to do your best work and become invaluable to employers or clients.</span>
                  </li>
                  <li className="flex items-start gap-3 font-sans text-text-muted text-base leading-relaxed">
                    <span className="text-accent-pink font-bold text-lg mt-0.5">•</span>
                    <span>Navigate the job search using AI ethically and strategically.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-ui-muted/10">
                <Link href="/work-with-lida" className="text-accent-pink font-sans font-semibold hover:text-accent-light transition-colors flex items-center gap-2 text-[15px]">
                  Get Veteran Resources &rarr;
                </Link>
              </div>
            </div>

            {/* Box 2: For Employers */}
            <div className="bg-[#FCFCFC] p-8 border-4 border-white rounded-lg shadow-lg hover:border-accent-pink/30 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <span className="text-accent-citron font-sans text-sm font-bold tracking-[0.15em] uppercase mb-4 block">For Employers</span>
                <h3 className="text-2xl font-display font-bold mb-6 text-text-primary">Harness Veteran Talent</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 font-sans text-text-muted text-base leading-relaxed">
                    <span className="text-accent-pink font-bold text-lg mt-0.5">•</span>
                    <span>Train military veteran employees to understand civilian workplace culture for improved retention and results.</span>
                  </li>
                  <li className="flex items-start gap-3 font-sans text-text-muted text-base leading-relaxed">
                    <span className="text-accent-pink font-bold text-lg mt-0.5">•</span>
                    <span>Understand military culture and address biases when evaluating veteran candidates or managing veteran employees.</span>
                  </li>
                  <li className="flex items-start gap-3 font-sans text-text-muted text-base leading-relaxed">
                    <span className="text-accent-pink font-bold text-lg mt-0.5">•</span>
                    <span>Grow, manage, and engage your veteran population as an intentional asset for the company.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-ui-muted/10">
                <Link href="/work-with-lida" className="text-accent-pink font-sans font-semibold hover:text-accent-light transition-colors flex items-center gap-2 text-[15px]">
                  Train Your Hiring Managers &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TEDX AND GRATITUDE SECTION */}
      <section className="bg-bg-pure py-24 min-h-[750px] flex items-center border-t border-ui-muted/10">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Profile Image */}
            <div className="lg:col-span-5 flex justify-center w-full order-last lg:order-first">
              <div className="relative w-full max-w-md aspect-[4/3] overflow-hidden rounded-lg border-4 border-white shadow-2xl">
                <img 
                  src="/intro_header.jpg" 
                  alt="Lida Citroën speaking at corporate event" 
                  className="w-full h-full object-cover scale-x-[-1]"
                />
              </div>
            </div>

            {/* Right: Profile Info */}
            <div className="lg:col-span-7 text-left text-text-primary">
              <span className="text-accent-pink font-sans text-[16px] font-bold tracking-[0.12em] uppercase mb-4 block">
                Our Why
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight mb-6">
                The work I do with veterans comes from gratitude for their sacrifice.
              </h2>
              <p className="font-sans text-lg text-text-muted mb-6 leading-relaxed">
                When I learned about the challenges and biases servicemembers face when transitioning to civilian life, I knew I could use my understanding of the corporate world to help them—and that’s become the bigger purpose of my work.
              </p>
              <p className="font-sans text-lg text-text-muted mb-6 leading-relaxed">
                For 20 years I’ve leveraged this passion to work with companies like Disney, Google, and GE Healthcare, and I’ve appeared on stages like Talks at Google and TEDx.
              </p>
              <p className="font-sans text-lg font-semibold text-accent-pink leading-relaxed">
                I’ve taught thousands of veterans and active duty servicemembers &mdash; on base, virtually, and at corporate conferences &mdash; how to build a personal brand that gives them confidence, control, and focus in their post-military careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. MENTORING AND SPEAKING PROGRAMS */}
      <section className="bg-bg-alt py-24 min-h-[750px] flex items-center border-t border-ui-muted/10">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Mentoring Copy */}
            <div className="lg:col-span-7 text-left text-text-primary">
              <span className="text-accent-pink font-sans text-[16px] font-bold tracking-[0.12em] uppercase mb-4 block">
                Giving Back
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight mb-6">
                Pro Bono Mentoring for Military Veterans
              </h2>
              <p className="font-sans text-lg text-text-muted mb-6 leading-relaxed">
                Transitioning from the military to a civilian career reveals a whole new world of challenges, opportunities, and language. The term “personal brand” may seem foreign when you’ve been trained to put service before self and work as a team, not as an individual.
              </p>
              <p className="font-sans text-lg text-text-muted mb-6 leading-relaxed">
                But building your career requires a new perspective of your strengths to demonstrate your value to employers. That’s why I offer free, one-on-one mentoring sessions to veterans through Post-Veterati and MilMentor.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <a 
                  href="https://www.veterati.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-accent text-white hover:bg-accent-light rounded-full px-6 py-3.5 font-sans text-[14px] font-semibold transition-colors inline-block text-center shadow-md"
                >
                  Book on Post-Veterati
                </a>
                <a 
                  href="https://www.milmentor.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#FCFCFC] border border-ui-muted/20 text-text-primary hover:bg-ui-muted/5 rounded-full px-6 py-3.5 font-sans text-[14px] font-semibold transition-colors inline-block text-center shadow-sm"
                >
                  Book on MilMentor
                </a>
              </div>
              <p className="font-sans text-sm text-text-muted italic">
                * Long-term coaching services are also offered to veterans at a reduced investment.
              </p>
            </div>

            {/* Right: Mentoring Image */}
            <div className="lg:col-span-5 flex justify-center w-full">
              <div className="relative w-full max-w-md aspect-[4/3] overflow-hidden rounded-lg border-4 border-white shadow-2xl">
                <img 
                  src="/aviation_technician.jpg" 
                  alt="Veteran working in aviation technology" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. EMPLOYER SERVICES & CTA */}
      <section className="min-h-[750px] flex items-center py-24 bg-bg-pure border-t border-ui-muted/10">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 text-left text-text-primary">
              <span className="text-accent-citron font-sans text-[16px] font-bold tracking-[0.12em] uppercase mb-4 block">
                Work With Lida
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6">
                Bridge the gap at your organization.
              </h2>
              <p className="font-sans text-lg md:text-xl text-text-muted mb-8 max-w-2xl leading-relaxed">
                If you’re struggling to recruit qualified veterans or are experiencing high turnover with veteran employees, it’s time for a new approach. I’ll help you bridge the gap with custom workshops and employee programs.
              </p>
              <div className="bg-[#FCFCFC] p-6 rounded-lg border border-ui-muted/15 max-w-2xl mb-8">
                <span className="text-accent-pink font-sans text-xs font-bold tracking-[0.15em] uppercase mb-3 block">Corporate Programs Include:</span>
                <ul className="space-y-2 font-sans text-[15px] text-text-muted">
                  <li className="flex items-center gap-2">
                    <span className="text-accent-pink font-bold">•</span>
                    <span>From Combat to Corporate: Recruiting, Onboarding and Retaining the Veteran Employee</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent-pink font-bold">•</span>
                    <span>Military to Civilian Transition: Personal Branding for Today’s Veteran</span>
                  </li>
                </ul>
              </div>
              <Link 
                href="/work-with-lida" 
                className="bg-accent text-white hover:bg-accent-light rounded-full px-8 py-3.5 font-sans text-[16px] font-medium transition-colors inline-block shadow-lg"
              >
                Inquire About Custom Programs &rarr;
              </Link>
            </div>

            {/* Right: CTA Image */}
            <div className="lg:col-span-5 flex justify-center w-full">
              <div className="relative w-full max-w-md aspect-[4/3] overflow-hidden rounded-lg border-4 border-white shadow-2xl">
                <img 
                  src="/woman_veteran.jpg" 
                  alt="Military veteran employee succeeding in office environment" 
                  className="w-full h-full object-cover scale-x-[-1]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}