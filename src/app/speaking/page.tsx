import Link from 'next/link';

export default function SpeakingPage() {
  const clientNames = [
    'Disney',
    'Google',
    'SiriusXM',
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

  const speakToAudiences = [
    'Corporate executives and employees',
    'Talent within nonprofit organizations and associations',
    'Recruiters and HR professionals',
    'Employee Resource Groups (ERGs)',
    'Event and conference attendees',
    'Entrepreneurs and business owners',
    'Military employers, service members, and veterans'
  ];

  const topics = [
    {
      num: '01',
      title: 'Personal Branding',
      desc: 'Learn to control the narrative of how you’re perceived, from messaging to mindset, presence and more—so you can build your brand, promote your values, and attract the opportunities you want for a more intentional career AND life.',
      icon: '/icon_personal-branding-1.png',
      programs: [
        'Power Up Your Personal Brand!',
        'Women Leaders: Show Up and Stand Up! Use Your Voice, Use Your Power',
        'Having an Entrepreneurial Mindset in a Corporate Environment',
        'Personal Branding For Emerging Professionals'
      ]
    },
    {
      num: '02',
      title: 'Influence as a Strategic Imperative',
      desc: 'Based on Lida’s best-selling book, The New Rules of Influence. Learn the new rules that drive influence in a world increasingly shaped by AI. These programs equip professionals with practical tools and actionable steps to elevate executive presence, communicate with impact, build trust, and lead change—highlighting how authentic human influence, not technology alone, creates lasting leadership impact and credibility.',
      icon: '/icon_drive-action-1.png',
      programs: [
        'The Human Advantage: Elevating Executive Presence & Influence in the Age of AI',
        'The New Rules of Influence: Authentically Build Trust, Drive Change, and Make an Impact'
      ]
    },
    {
      num: '03',
      title: 'Leadership Presence to Grow Your Career',
      desc: 'Building Executive Presence, Communicating Like a Leader, and Telling a Powerful Story.',
      icon: '/icon_leadership.png',
      programs: [
        'Executive Presence and Leadership Building Skills for Women'
      ]
    },
    {
      num: '04',
      title: 'Leadership and Team-Building',
      desc: 'Influencing positive team dynamics; communication and career building; navigating executive presence, leading in an AI age.',
      icon: '/icon_leadership (1).png',
      programs: [
        'Building Influence, Inspiration and Impact with Your Team',
        'Talking to Your Boss About Your Career Goals',
        'Executive presence rules for leadership growth',
        'Internal Interviewing to Grow Your Career',
        'New rules of leadership in an age of AI'
      ]
    },
    {
      num: '05',
      title: 'Social Media (Online Presence)',
      desc: 'Create an online presence with a solid structure and strategy. Learn how to build influence and thought leadership.',
      icon: '/icon_social-media.png',
      programs: [
        'Curating an Online Presence Consistent with Your Personal Brand',
        'Building a Strategy for Influence and Thought Leadership in Target Markets',
        'Growing Your Online Network to Boost Your Career'
      ]
    },
    {
      num: '06',
      title: 'Reputation Management',
      desc: 'Practical tools for reputation risk management (online and in person) and taking control of a reputation crisis to repair negative perception.',
      icon: '/icon_image-repair-1.png',
      programs: [
        'Navigating Reputation Risk at Work',
        'Reputation Risk Management',
        'Repairing Your Reputation'
      ]
    },
    {
      num: '07',
      title: 'Military',
      desc: 'Recruiting and retaining veteran employees (for employers) and personal branding and transitioning to civilian life (for servicemembers and veterans).',
      icon: '/icon-military-1.png',
      programs: [
        'From Combat to Corporate: Recruiting, Onboarding and Retaining the Veteran Employee',
        'Personal Branding for Today’s Military Veteran'
      ]
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
                LIDA360 - SPEAKING
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] mb-6 text-text-primary">
                Keynote Speaking: <span className="text-accent-pink block sm:inline">The Human Advantage</span> in the Age of AI.
              </h1>
              <p className="font-sans text-xl font-semibold text-text-primary mb-4 leading-relaxed max-w-2xl">
                Equipping Global Teams with the Frameworks for Authentic Influence.
              </p>
              <p className="font-sans text-lg text-text-muted mb-8 max-w-2xl leading-relaxed">
                Lida Citroën delivers more than a keynote; she provides the tactical language, presence, and frameworks required to lead with purpose. Your audience will walk away equipped and inspired to take specific, human-centered action.
              </p>
              <Link 
                href="/work-with-lida"
                className="bg-accent text-white hover:bg-accent-light rounded-full px-8 py-3.5 font-sans text-[16px] font-medium transition-colors inline-block shadow-lg"
              >
                Check Date Availability
              </Link>
            </div>

            {/* Right: Flipped Image with white border and shadow */}
            <div className="lg:col-span-5 relative flex justify-center w-full">
              <div className="relative w-full max-w-md aspect-[4/3] overflow-hidden rounded-lg border-4 border-white shadow-2xl">
                <img 
                  src="/Lida-in-blue-suit.png" 
                  alt="Lida Citroën Keynote Speaker" 
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
            Lida Has Partnered With & Spoken At
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

      {/* 3. SIGNATURE KEYNOTE & BIO PROFILE */}
      <section className="bg-bg-pure py-24 min-h-[750px] flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Bio Copy */}
            <div className="lg:col-span-7 text-left text-text-primary">
              <span className="text-accent-pink font-sans text-[16px] font-bold tracking-[0.12em] uppercase mb-4 block">
                Signature Keynote
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight mb-6">
                Influence as a Strategic Imperative
              </h2>
              <p className="font-sans text-lg text-text-muted mb-6 leading-relaxed">
                Modern-day executive presence mandates new levels of authenticity, agility, and honesty never before seen in the C-suite. Human influence, not technology alone, creates lasting leadership impact and credibility.
              </p>
              <p className="font-sans text-lg text-text-muted mb-6 leading-relaxed">
                I’m Lida Citroën, and I’ve worked with companies like Disney, Google, and SiriusXM on branding, reputation management, veteran employee recruiting, and more for 20+ years. I deliver keynote speeches, train executives and employees, and host interactive workshops on virtual and in-person stages.
              </p>
              <p className="font-sans text-lg font-semibold text-accent-pink leading-relaxed">
                Energize your audience or team with more lightbulb moments, practical takeaways, and a boost of inspiration. Keynotes, breakout sessions, and workshops designed to drive ACTION!
              </p>
            </div>

            {/* Right: Intro Image with white border */}
            <div className="lg:col-span-5 flex justify-center w-full">
              <div className="relative w-full max-w-md aspect-[4/3] overflow-hidden rounded-lg border-4 border-white shadow-2xl">
                <img 
                  src="/intro_header-1.jpg" 
                  alt="Lida presenting on stage" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHO I SPEAK TO GRID */}
      <section className="bg-bg-alt py-24 min-h-[750px] flex items-center border-t border-ui-muted/10">
        <div className="max-w-7xl mx-auto px-6 w-full text-left">
          <div className="max-w-3xl mb-16">
            <span className="text-accent-pink font-sans text-[16px] font-bold tracking-[0.12em] uppercase mb-3 block">
              Audiences
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight text-text-primary">
              I speak to audiences of
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {speakToAudiences.map((audience, idx) => (
              <div 
                key={idx}
                className="bg-[#FCFCFC] p-6 border-4 border-white rounded-lg shadow-lg hover:border-accent-pink/30 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex items-center min-h-[120px]"
              >
                <div className="flex items-center gap-4">
                  <span className="w-2.5 h-2.5 bg-accent-pink rounded-full flex-shrink-0" />
                  <p className="font-sans text-base font-semibold text-text-primary leading-snug">{audience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SPEAKING TOPICS (Alternating horizontal cards) */}
      <section className="bg-bg-pure py-24 border-t border-ui-muted/10">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="text-left max-w-3xl mb-16">
            <span className="text-accent-pink font-sans text-[16px] font-bold tracking-[0.12em] uppercase mb-3 block">
              Core Topics
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight text-text-primary">
              Speaking Topics & Programs
            </h2>
          </div>

          <div className="flex flex-col gap-12 w-full">
            {topics.map((topic, idx) => (
              <div 
                key={idx}
                className="border border-ui-muted/10 border-l-4 border-l-accent-pink rounded-r-lg rounded-l-md bg-[#FCFCFC] p-8 lg:p-10 flex flex-col lg:flex-row items-start gap-8 justify-between shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Topic Number, Icon, and Info */}
                <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8 flex-grow w-full">
                  <span className="font-display text-4xl font-bold text-ui-muted/20 w-12 flex-shrink-0">
                    {topic.num}
                  </span>
                  
                  {/* Hexagon Wrapper */}
                  <div className="relative w-16 h-16 flex items-center justify-center flex-shrink-0">
                    <svg className="absolute inset-0 w-full h-full text-accent-pink" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
                      <polygon points="50,3 93,25 93,75 50,97 7,75 7,25" />
                    </svg>
                    <img src={topic.icon} className="w-8 h-8 object-contain relative z-10" alt="Icon" />
                  </div>

                  <div className="text-left flex-grow">
                    <h3 className="text-2xl font-display font-bold mb-3 text-text-primary">{topic.title}</h3>
                    <p className="font-sans text-base text-text-muted mb-6 leading-relaxed max-w-4xl">{topic.desc}</p>
                    
                    {/* Nested Programs Box */}
                    <div className="bg-bg-pure border border-ui-muted/10 p-6 rounded-lg shadow-sm">
                      <span className="text-accent-citron font-sans text-xs font-bold tracking-[0.15em] uppercase mb-4 block">
                        Programs & Presentations
                      </span>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {topic.programs.map((program, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-3 font-sans text-text-primary text-[15px] leading-relaxed">
                            <svg className="w-5 h-5 text-accent-pink flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{program}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
                Book Lida
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6">
                Bring Lida Citroën to your next event.
              </h2>
              <p className="font-sans text-lg md:text-xl text-text-muted mb-8 max-w-2xl leading-relaxed">
                Whether you need a dynamic keynote, corporate presentation, or an interactive C-suite workshop, we will tailor the experience to deliver maximum action-oriented impact.
              </p>
              <Link 
                href="/work-with-lida" 
                className="bg-accent text-white hover:bg-accent-light rounded-full px-8 py-3.5 font-sans text-[16px] font-medium transition-colors inline-block shadow-lg"
              >
                Check Date Availability &rarr;
              </Link>
            </div>

            {/* Right: CTA Image */}
            <div className="lg:col-span-5 flex justify-center w-full">
              <div className="relative w-full max-w-md aspect-[4/3] overflow-hidden rounded-lg border-4 border-white shadow-2xl">
                <img 
                  src="/LidaCitroen_executive-coach.png" 
                  alt="Lida Citroën speaking C-Suite workshop" 
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