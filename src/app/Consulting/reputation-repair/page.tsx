import Link from 'next/link';

export default function ReputationRepairPage() {
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
                LIDA360 - REPUTATION REPAIR
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] mb-6 text-text-primary">
                Reputation Recovery. <span className="text-accent-pink block sm:inline">Regain Your Voice</span> and Confidence.
              </h1>
              <p className="font-sans text-xl font-semibold text-text-primary mb-4 leading-relaxed max-w-2xl">
                A Clear-Headed, Compassionate Path Through the Crisis.
              </p>
              <p className="font-sans text-lg text-text-muted mb-8 max-w-2xl leading-relaxed">
                When you feel attacked, your instincts can lead you astray. Most people go into hiding or launch a defensive apology tour. You have better options. We work fast and smart to shift the narrative from "panic" to "purposeful recovery".
              </p>
              <Link 
                href="/work-with-lida"
                className="bg-accent text-white hover:bg-accent-light rounded-full px-8 py-3.5 font-sans text-[16px] font-medium transition-colors inline-block shadow-lg"
              >
                Request a Confidential Consultation
              </Link>
            </div>

            {/* Right: Flipped Image with white border and shadow */}
            <div className="lg:col-span-5 relative flex justify-center w-full">
              <div className="relative w-full max-w-md aspect-[4/3] overflow-hidden rounded-lg border-4 border-white shadow-2xl">
                <img 
                  src="/lida-in-blue.jpg" 
                  alt="Lida Citroën Reputation Repair" 
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

      {/* 3. INTRO / PITFALLS SECTION */}
      <section className="bg-bg-pure py-24 min-h-[750px] flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Pitfalls copy */}
            <div className="lg:col-span-7 text-left">
              <span className="text-accent-pink font-sans text-[16px] font-bold tracking-[0.12em] uppercase mb-3 block">
                The Reality of Crisis
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight mb-6 text-text-primary">
                Everyone is talking about you—and not in a good way.
              </h2>
              <p className="font-sans text-xl font-semibold text-accent-pink mb-6 leading-relaxed">
                At least that’s how it feels.
              </p>
              <p className="font-sans text-lg text-text-muted mb-6 leading-relaxed">
                Whether you made the wrong move or were in the wrong place at the wrong time, it’s impacting your livelihood and legacy. You need to course correct… fast.
              </p>
              
              <div className="bg-[#FCFCFC] border-l-4 border-l-accent-pink p-6 rounded-r-lg shadow-sm mb-6">
                <p className="font-sans text-base font-semibold text-text-primary mb-3">
                  But when you feel attacked, your instincts can lead you astray. Most people either:
                </p>
                <ul className="space-y-2 font-sans text-base text-text-muted pl-4 list-disc">
                  <li>Take down their social media and go into hiding, or</li>
                  <li>Go on an apology tour and defend themselves to every critic on the internet</li>
                </ul>
              </div>
              
              <p className="font-sans text-lg font-bold text-text-primary">
                You have better options.
              </p>
            </div>

            {/* Right Column: Lida Ally Intro */}
            <div className="lg:col-span-5 bg-surface-deep text-white p-8 rounded-lg shadow-2xl border border-glass-border">
              <span className="text-accent-citron font-sans text-sm font-bold tracking-[0.15em] uppercase mb-3 block">
                Your Advocate
              </span>
              <h3 className="text-2xl font-display font-bold mb-4">Second chances are my specialty.</h3>
              <p className="font-sans text-base text-slate-300 leading-relaxed mb-4">
                I’m Lida Citroën, and for 20+ years, I’ve helped hundreds of global executives, entrepreneurs, and thought leaders like you impact the way they’re perceived by the people who matter to them.
              </p>
              <p className="font-sans text-base text-slate-300 leading-relaxed mb-4">
                I work fast and smart to help you navigate the strategy we create together to regain control of your story.
              </p>
              <p className="font-sans text-base font-semibold text-accent-pink leading-relaxed">
                You’ll not only have a trusted expert to help you make the best decisions moving forward, but a nonjudgmental confidant and ally along the way. Together, we’ve got this.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW WE REBUILD / IMAGE STRIPES */}
      <section className="bg-bg-alt py-24 min-h-[750px] flex items-center border-t border-ui-muted/10">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Portrait */}
            <div className="lg:col-span-5 flex justify-center w-full">
              <div className="relative w-full max-w-md aspect-[4/3] overflow-hidden rounded-lg border-4 border-white shadow-2xl">
                <img 
                  src="/Lida-in-stripes.png" 
                  alt="Lida Citroën reputation repair expert" 
                  className="w-full h-full object-cover scale-x-[-1]"
                />
              </div>
            </div>

            {/* Right Column: Process detail */}
            <div className="lg:col-span-7 text-left">
              <span className="text-accent-pink font-sans text-[16px] font-bold tracking-[0.12em] uppercase mb-3 block">
                The Process
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight mb-6 text-text-primary">
                How we rebuild.
              </h2>
              <p className="font-sans text-lg text-text-muted mb-6 leading-relaxed">
                With a smart, focused, and specific methodology, my process goes deep in determining how you’re perceived by the people who matter most—and which steps to take to alter that perception.
              </p>
              <p className="font-sans text-lg text-text-muted mb-6 leading-relaxed">
                This highly customized process gives you the strategy, tactics, and tools you need to repair your reputation.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                <div className="bg-[#FCFCFC] p-5 rounded-lg border border-ui-muted/15">
                  <span className="text-accent-pink font-display text-xl font-bold block mb-2">Strategy</span>
                  <p className="font-sans text-xs text-text-muted leading-relaxed">A clear, objective assessment roadmap built strictly around your legacy goals.</p>
                </div>
                <div className="bg-[#FCFCFC] p-5 rounded-lg border border-ui-muted/15">
                  <span className="text-accent-pink font-display text-xl font-bold block mb-2">Tactics</span>
                  <p className="font-sans text-xs text-text-muted leading-relaxed">Revising profiles, building networks, and implementing custom communication tools.</p>
                </div>
                <div className="bg-[#FCFCFC] p-5 rounded-lg border border-ui-muted/15">
                  <span className="text-accent-pink font-display text-xl font-bold block mb-2">Tools</span>
                  <p className="font-sans text-xs text-text-muted leading-relaxed">Personal brand assessment, perception surveys, and strategic blueprints.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CASE STUDY - FRANK */}
      <section className="bg-bg-pure py-24 min-h-[750px] flex items-center border-t border-ui-muted/10">
        <div className="max-w-7xl mx-auto px-6 w-full text-left">
          <div className="max-w-3xl mb-12">
            <span className="text-accent-pink font-sans text-[16px] font-bold tracking-[0.12em] uppercase mb-3 block">
              Case Study
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight text-text-primary">
              Rebuilding a Legacy
            </h2>
          </div>

          <div className="bg-[#FCFCFC] border-4 border-white shadow-lg hover:shadow-2xl transition-all duration-300 rounded-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Case Study Copy */}
            <div className="p-8 lg:p-12 lg:col-span-7 flex flex-col justify-center text-left">
              <span className="text-accent-pink font-sans text-xs font-semibold tracking-wider block mb-2 uppercase">
                From Workplace Mobbing to Values-Driven Work
              </span>
              <h3 className="text-2xl lg:text-3xl font-display font-bold mb-6 text-text-primary">
                Restoring Career, Confidence, and Control
              </h3>
              <p className="font-sans text-lg text-text-muted mb-6 leading-relaxed">
                When Frank’s coaching career was destroyed by a false accusation, he had to rebuild his personal brand and image to rediscover the love of the game.
              </p>
              <p className="font-sans text-lg text-text-muted mb-8 leading-relaxed">
                See how we were able to restore his career, confidence, and control with a strategy that put him back in the driver’s seat of his life.
              </p>
              <div>
                <span className="bg-accent text-white rounded-full px-6 py-2.5 font-sans text-sm font-semibold tracking-wide hover:bg-accent-light transition-colors inline-block cursor-pointer shadow-md">
                  Read Case Study &rarr;
                </span>
              </div>
            </div>

            {/* Case Study Image */}
            <div className="lg:col-span-5 relative min-h-[300px]">
              <img 
                src="/iStock-942149588-1.jpg" 
                alt="Case Study Workplace Recovery" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="min-h-[750px] flex items-center py-24 bg-bg-alt border-t border-ui-muted/10">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Text */}
            <div className="lg:col-span-7 text-left text-text-primary">
              <span className="text-accent-citron font-sans text-[16px] font-bold tracking-[0.12em] uppercase mb-4 block">
                Regain Control
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6">
                Your reputation is everything. You can get it back on course.
              </h2>
              <p className="font-sans text-lg md:text-xl text-text-muted mb-8 max-w-2xl leading-relaxed">
                You don’t have to navigate an image or reputation crisis alone. Reach out below to begin a confidential conversation about your goals and challenges. From there, we’ll come up with a plan for your next steps—together.
              </p>
              <Link 
                href="/work-with-lida" 
                className="bg-accent text-white hover:bg-accent-light rounded-full px-8 py-3.5 font-sans text-[16px] font-medium transition-colors inline-block shadow-lg"
              >
                Begin Today &rarr;
              </Link>
            </div>

            {/* Right: CTA Image */}
            <div className="lg:col-span-5 flex justify-center w-full">
              <div className="relative w-full max-w-md aspect-[4/3] overflow-hidden rounded-lg border-4 border-white shadow-2xl">
                <img 
                  src="/cta-Lida.png" 
                  alt="Confidential Consultation Lida Citroën" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}