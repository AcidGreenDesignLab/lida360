import Link from 'next/link';

export default function ExecutiveBrandingPage() {
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

  const phases = [
    {
      num: '01',
      title: 'Assessment & Goal-Setting',
      mainText: 'Get laser-focused on your career and legacy goals so you can bridge the gap between where you are now and where you want to be.',
      items: [
        'Identify your career- and character-defining experiences to illuminate your reputation assets and superhero-like strengths',
        'Conduct online research and a perception mapping survey to understand how you’re perceived and reveal blind spots about your brand',
        'Create your personal brand assessment to help transition into the action phase',
        'Pinpoint the opportunities, audiences, and tactics to help you redefine your brand'
      ],
      outcome: 'The outcome is a deep understanding of your reputation today and a fresh perspective on which strategies will help you develop and capitalize on your personal brand.',
      icon: '/icon_goal-setting.png'
    },
    {
      num: '02',
      title: 'Building Your Strategy',
      mainText: 'We’ll co-create your personal brand strategy geared toward your long-term goals and the people in your world who matter most.',
      items: [
        'Craft a plan to curate your online presence, build your network, amplify your presence, and establish new language for how you talk about yourself to refine your reputation strategy',
        'Determine specific tactics for your personal brand—actions as granular as revising your LinkedIn profile, modifying your elevator pitch, and targeting organizations to get involved with',
        'Produce a visual brand DNA that tells your story and an in-depth blueprint of do’s and don’ts for your narrative, online presence, network, communication, and more'
      ],
      outcome: 'This process works best when it’s collaborative and you have ownership of your action plan. You have the option to continue working with me to execute your strategy, or you can take it and run with it on your own (or with your team).',
      icon: '/icon_strategy.png'
    },
    {
      num: '03',
      title: 'Executive Coaching (Implementation)',
      mainText: 'You have your assessment and strategy—now let’s launch it.',
      items: [
        'Meet with you 1-2 times monthly to deploy your strategy and tactics in the context of what else is happening in your work and life, so you get real-life application feedback',
        'Help you stay accountable to executing your strategy on your desired timeline',
        'Provide guidance along the way with a coaching style that offers thorough input and advice on how move forward'
      ],
      outcome: 'A typical coaching container program is 3-6 months long, depending on your needs. You’ll feel supported every step of the way.',
      icon: '/icon_executive-coaching.png'
    }
  ];

  const caseStudies = [
    {
      name: 'Charles',
      tagline: 'Leveraging an Impressive Reputation',
      text: 'Charles had become synonymous with the company he had led for many years. Ready to step out as an industry expert, he sought my help to focus on a personal branding campaign that leveraged his impressive reputation to create new opportunities.'
    },
    {
      name: 'Aimee',
      tagline: 'Navigating Cultural Transitions',
      text: 'A successful executive in the Asian tourism industry, Aimee was looking to relocate and launch her career in the U.S. But her cultural norms and approach to self-promotion were impeding her job search. I helped Aimee shift to a more proactive approach to market herself as a highly sought-after asset to target higher-up positions.'
    },
    {
      name: 'Richard',
      tagline: 'Strategic Career Pivot',
      text: 'Richard wanted to change careers while continuing to leverage his expertise and reputation. With my guidance, he embarked on a personal branding journey to merge his established and new passions and maintain influence in his new livelihood.'
    }
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
                LIDA360 - EXECUTIVE BRANDING
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] mb-6 text-text-primary">
                Influence <span className="text-accent-pink block sm:inline">Every Room.</span> Lead With Your Values.
              </h1>
              <p className="font-sans text-xl font-semibold text-text-primary mb-4 leading-relaxed max-w-2xl">
                Architecture for the Modern Leader: Alignment, Presence, and Purpose.
              </p>
              <p className="font-sans text-lg text-text-muted mb-8 max-w-2xl leading-relaxed">
                Perception is the bridge between you and the opportunities you want. To reach the pinnacle of your career, your brand must be designed with the same rigor as a corporate merger.
              </p>
              <Link 
                href="/work-with-lida"
                className="bg-accent text-white hover:bg-accent-light rounded-full px-8 py-3.5 font-sans text-[16px] font-medium transition-colors inline-block shadow-lg"
              >
                Start Your Collaborative Journey
              </Link>
            </div>

            {/* Right: Flipped Image with white border and shadow */}
            <div className="lg:col-span-5 relative flex justify-center w-full">
              <div className="relative w-full max-w-md aspect-[4/3] overflow-hidden rounded-lg border-4 border-white shadow-2xl">
                <img 
                  src="/Lida-in-cityscape.jpg" 
                  alt="Lida Citroën Executive Branding" 
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

      {/* 3. THE STRATEGIC HOOK & METHODOLOGY */}
      <section className="bg-bg-pure py-24 min-h-[750px] flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left side: Hook & Intro text */}
            <div className="lg:col-span-7 text-left">
              <span className="text-accent-pink font-sans text-[16px] font-bold tracking-[0.12em] uppercase mb-3 block">
                The Methodology
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight mb-6 text-text-primary">
                You can’t read the label from inside the bottle.
              </h2>
              <p className="font-sans text-lg text-text-muted mb-6 leading-relaxed">
                That’s why when we work together, I’ll guide you outside your comfort zone to inspect every obstacle and opportunity from a new angle.
              </p>
              <p className="font-sans text-lg text-text-muted mb-6 leading-relaxed">
                Our work together isn’t spin or a paint-by-numbers process. It’s a deep, collaborative dive. We don't talk tactics until we've done some soul-searching, clarified your end goal, and pinpointed your brand DNA.
              </p>
              <p className="font-sans text-lg font-semibold text-text-primary leading-relaxed">
                Perception is defined by how others see you. It’s real to them. Take control and influence their perception.
              </p>
            </div>

            {/* Right side: Methodology Cards / Highlight Box */}
            <div className="lg:col-span-5 bg-[#FCFCFC] p-8 border-4 border-white rounded-lg shadow-2xl">
              <h3 className="text-2xl font-display font-bold mb-4 text-text-primary">Build Your Brand with Purpose</h3>
              <p className="font-sans text-base text-text-muted leading-relaxed mb-6">
                To enhance your presence as a leader, make a pivot in your career, or leave a legacy you can be proud of, you need to be in control of how you’re seen.
              </p>
              <p className="font-sans text-base text-text-muted leading-relaxed">
                My highly customized and specific methodology gives you the exact tactics and tools you need to execute on your strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE PHASES SECTION */}
      <section className="bg-bg-alt py-24 border-t border-ui-muted/10">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="text-left max-w-3xl mb-16">
            <span className="text-accent-pink font-sans text-[16px] font-bold tracking-[0.12em] uppercase mb-3 block">
              How We Rebuild
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight text-text-primary">
              The Three Phases of Executive Branding
            </h2>
          </div>

          <div className="flex flex-col gap-12 w-full">
            {phases.map((phase, idx) => (
              <div 
                key={idx}
                className="border border-ui-muted/10 border-l-4 border-l-accent-pink rounded-r-lg rounded-l-md bg-bg-pure p-8 lg:p-10 flex flex-col lg:flex-row items-start gap-8 justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_35px_rgba(0,0,0,0.08)] transition-all duration-300"
              >
                {/* Phase Number, Icon, and Text */}
                <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8 flex-grow">
                  <span className="font-display text-4xl font-bold text-ui-muted/20 w-12 flex-shrink-0">
                    {phase.num}
                  </span>
                  
                  {/* Hexagon Wrapper */}
                  <div className="relative w-16 h-16 flex items-center justify-center flex-shrink-0">
                    <svg className="absolute inset-0 w-full h-full text-accent-pink" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
                      <polygon points="50,3 93,25 93,75 50,97 7,75 7,25" />
                    </svg>
                    <img src={phase.icon} className="w-8 h-8 object-contain relative z-10" alt="Icon" />
                  </div>

                  <div className="text-left max-w-3xl">
                    <h3 className="text-2xl font-display font-bold mb-3 text-text-primary">{phase.title}</h3>
                    <p className="font-sans text-lg font-medium text-text-primary mb-4 leading-relaxed">{phase.mainText}</p>
                    
                    {/* List Items */}
                    <ul className="space-y-3 mb-6">
                      {phase.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 font-sans text-text-muted text-base">
                          <span className="text-accent-pink mt-1.5 flex-shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Outcome Box */}
                    <div className="bg-bg-alt/50 border border-ui-muted/10 p-4 rounded-md font-sans text-sm text-text-muted italic">
                      {phase.outcome}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CONFIDANT AND COLLABORATOR PROFILE */}
      <section className="bg-bg-pure py-24 min-h-[750px] flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Bio Image */}
            <div className="lg:col-span-5 flex justify-center w-full order-last lg:order-first">
              <div className="relative w-full max-w-md aspect-[4/3] overflow-hidden rounded-lg border-4 border-white shadow-2xl">
                <img 
                  src="/Lida-with-client.jpg" 
                  alt="Lida working with executive client" 
                  className="w-full h-full object-cover scale-x-[-1]"
                />
              </div>
            </div>

            {/* Right: Bio Text */}
            <div className="lg:col-span-7 text-left text-text-primary">
              <span className="text-accent-pink font-sans text-[16px] font-bold tracking-[0.12em] uppercase mb-4 block">
                Expert Guidance
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight mb-6">
                Helping you see the bigger picture so you can influence positive perception.
              </h2>
              <p className="font-sans text-lg text-text-muted mb-6 leading-relaxed">
                I work as a trusted expert, confidant, and collaborator at every step. For 20+ years, I’ve helped hundreds of global executives, entrepreneurs, and thought leaders like you impact the way they’re perceived by the people who matter to them.
              </p>
              <p className="font-sans text-lg font-semibold text-accent-pink leading-relaxed">
                Your personal brand is defined by others’ perception and you should control the narrative.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CASE STUDIES SECTION */}
      <section className="bg-bg-alt py-24 min-h-[750px] flex items-center border-t border-ui-muted/10">
        <div className="max-w-7xl mx-auto px-6 w-full text-left">
          <div className="max-w-3xl mb-16">
            <span className="text-accent-pink font-sans text-[16px] font-bold tracking-[0.12em] uppercase mb-3 block">
              Case Studies
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight text-text-primary">
              Branding Stories in Action
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, idx) => (
              <div 
                key={idx} 
                className="flex flex-col justify-between bg-[#FCFCFC] p-8 border-4 border-white rounded-lg shadow-2xl hover:border-accent-pink/30 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-default"
              >
                <div>
                  <h3 className="font-display text-2xl font-bold mb-1 text-text-primary">{study.name}</h3>
                  <span className="text-accent-pink font-sans text-sm font-semibold tracking-wider block mb-4 uppercase">
                    {study.tagline}
                  </span>
                  <p className="font-sans text-base text-text-muted leading-relaxed">
                    {study.text}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-ui-muted/10">
                  <span className="text-accent-citron hover:text-accent-pink font-sans text-sm font-semibold tracking-wide flex items-center gap-1 transition-colors">
                    Read the Case Study &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION */}
      <section className="min-h-[750px] flex items-center py-24 bg-bg-pure">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Text */}
            <div className="lg:col-span-7 text-left text-text-primary">
              <span className="text-accent-citron font-sans text-[16px] font-bold tracking-[0.12em] uppercase mb-4 block">
                Get Started
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6">
                Foresight is 20/20. Start defining your personal brand vision today.
              </h2>
              <p className="font-sans text-lg md:text-xl text-text-muted mb-8 max-w-2xl leading-relaxed">
                It’s easy to get started. Just reach out below to begin a conversation about your goals and challenges. From there, we’ll come up with a plan for your next steps—together.
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
                  src="/lida-sidebar.jpg" 
                  alt="Contact Lida Citroën" 
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