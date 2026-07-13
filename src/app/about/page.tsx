import Link from 'next/link';

export default function AboutPage() {
  const clientNames = [
    'Barclays',
    'Google',
    'GE Healthcare',
    'LinkedIn',
    'Johnson & Johnson',
    'JPMorgan Chase',
    'HP',
    'SiriusXM',
    'Monster.com',
    'Colonial Life',
    'SAP',
    'Mazda',
    'Federal Reserve Bank'
  ];

  const roles = [
    {
      title: 'Best-Selling Author',
      desc: 'Author of 7 books, including 3 focusing on military veterans in the workplace and executive influence.',
      icon: '/icon-author.png'
    },
    {
      title: 'Successful Entrepreneur',
      desc: 'Founded LIDA360 in 2008 to redefine personal branding around authenticity rather than corporate spin.',
      icon: '/icon-entrepreneur.png'
    },
    {
      title: 'Executive Instructor',
      desc: 'Creator of popular LinkedIn Learning courses and certified Wharton executive coach.',
      icon: '/icon-instructor.png'
    },
    {
      title: 'Military Advocate',
      desc: 'Free mentor on Veterati and MilMentor, helping thousands of transitioning service members.',
      icon: '/icon-military.png'
    },
    {
      title: 'Keynote Speaker',
      desc: 'Dynamic presenter at Talks at Google, TEDx, and corporate conferences globally.',
      icon: '/icon-speaker.png'
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
                LIDA360 - ABOUT
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] mb-6 text-text-primary">
                20 Years of Global Strategy. <span className="text-accent-pink block sm:inline">18 Years of Individual Transformation.</span>
              </h1>
              <p className="font-sans text-xl font-semibold text-text-primary mb-4 leading-relaxed max-w-2xl">
                Founded on individual value rather than corporate spin.
              </p>
              <p className="font-sans text-lg text-text-muted mb-8 max-w-2xl leading-relaxed">
                I founded LIDA360 in 2008 because I saw a profound need for personal branding rooted in individual value rather than corporate spin. For nearly two decades, I’ve fused 20 years of global marketing and public relations rigor with a deep commitment to the individual leader's success.
              </p>
              <Link 
                href="/work-with-lida"
                className="bg-accent text-white hover:bg-accent-light rounded-full px-8 py-3.5 font-sans text-[16px] font-medium transition-colors inline-block shadow-lg"
              >
                See how we can work together &rarr;
              </Link>
            </div>

            {/* Right: Flipped Image with white border and shadow */}
            <div className="lg:col-span-5 relative flex justify-center w-full">
              <div className="relative w-full max-w-md aspect-[4/3] overflow-hidden rounded-lg border-4 border-white shadow-2xl">
                <img 
                  src="/Lida-leather-sofa.jpg" 
                  alt="Lida Citroën Founder of LIDA360" 
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
            Clients We have Served Over 20 Years
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

      {/* 3. ROLES AND EXPERTISE GRID */}
      <section className="bg-bg-pure py-24 min-h-[750px] flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full text-left">
          <div className="max-w-3xl mb-16">
            <span className="text-accent-pink font-sans text-[16px] font-bold tracking-[0.12em] uppercase mb-3 block">
              Roles & Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight text-text-primary">
              Personal branding consultant & reputation management expert
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {roles.map((role, idx) => (
              <div 
                key={idx}
                className="bg-[#FCFCFC] p-6 border-4 border-white rounded-lg shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative w-12 h-12 flex items-center justify-center mb-4 flex-shrink-0">
                    <svg className="absolute inset-0 w-full h-full text-accent-pink" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
                      <polygon points="50,3 93,25 93,75 50,97 7,75 7,25" />
                    </svg>
                    <img src={role.icon} className="w-6 h-6 object-contain relative z-10" alt="Icon" />
                  </div>
                  <h3 className="font-display text-lg font-bold mb-2 text-text-primary leading-tight">{role.title}</h3>
                  <p className="font-sans text-sm text-text-muted leading-relaxed">{role.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VALUES & SUPPORTING VETERANS */}
      <section className="bg-bg-alt py-24 min-h-[750px] flex items-center border-t border-ui-muted/10">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Bio Image */}
            <div className="lg:col-span-5 flex justify-center w-full order-last lg:order-first">
              <div className="relative w-full max-w-md aspect-[4/3] overflow-hidden rounded-lg border-4 border-white shadow-2xl">
                <img 
                  src="/Lida-at-veterans.jpg" 
                  alt="Lida presenting to military veteran group" 
                  className="w-full h-full object-cover scale-x-[-1]"
                />
              </div>
            </div>

            {/* Right: Text Copy */}
            <div className="lg:col-span-7 text-left text-text-primary">
              <span className="text-accent-pink font-sans text-[16px] font-bold tracking-[0.12em] uppercase mb-4 block">
                Values & Legacy
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight mb-6">
                Living my values and supporting military veterans.
              </h2>
              <p className="font-sans text-lg text-text-muted mb-6 leading-relaxed">
                When I first spoke to a group of military veterans, many of whom were severely wounded in combat and staring down the civilian job market for the first time, lessons of freedom took on a whole new meaning that shaped the rest of my career.
              </p>
              <p className="font-sans text-lg text-text-muted mb-6 leading-relaxed">
                Today, I offer veterans and service members tools for transitioning into the civilian workplace and collaborate with employers to provide resources for hiring, training, and engaging military veteran employees.
              </p>
              <p className="font-sans text-lg font-semibold text-accent-pink leading-relaxed">
                To know that I’m able to serve those who’ve served is a big part of my own legacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BRAND VALUE PROP SECTION */}
      <section className="bg-bg-pure py-24 min-h-[750px] flex items-center border-t border-ui-muted/10">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Text */}
            <div className="lg:col-span-7 text-left text-text-primary">
              <span className="text-accent-pink font-sans text-[16px] font-bold tracking-[0.12em] uppercase mb-4 block">
                Personal Branding Rigor
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight mb-6">
                Before I started LIDA360, I spent 20 years positioned in corporate brands.
              </h2>
              <p className="font-sans text-lg text-text-muted mb-6 leading-relaxed">
                I spent 20 years in marketing, PR, and business development leading global product and services companies across multiple industries in positioning and building their brands.
              </p>
              <p className="font-sans text-lg text-text-muted mb-6 leading-relaxed">
                When the economy went belly-up in 2008, I set my sights on making a difference at the individual level at a time when the term “personal brand” wasn’t as known as it is today. And LIDA360 was born.
              </p>
              <p className="font-sans text-lg font-semibold text-text-primary leading-relaxed">
                Since then, I’ve built my reputation as an award-winning expert, in-demand keynote speaker, workshop facilitator, best-selling author, and go-to source for the media.
              </p>
            </div>

            {/* Right: Lida with Client Image */}
            <div className="lg:col-span-5 flex justify-center w-full">
              <div className="relative w-full max-w-md aspect-[4/3] overflow-hidden rounded-lg border-4 border-white shadow-2xl">
                <img 
                  src="/lida-with-client-1.jpg" 
                  alt="Lida working with clients" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIAL / THE REPUTATION SECTION */}
      <section className="bg-bg-alt py-24 min-h-[750px] flex items-center border-t border-ui-muted/10">
        <div className="max-w-7xl mx-auto px-6 w-full text-center">
          <span className="text-accent-pink font-sans text-[16px] font-bold tracking-[0.12em] uppercase mb-4 block">
            The Reputation
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-10 max-w-3xl mx-auto">
            What clients say about working with Lida.
          </h2>
          <div className="bg-[#FCFCFC] border-4 border-white p-8 md:p-12 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 max-w-3xl mx-auto text-left relative">
            <span className="text-accent-pink font-serif text-6xl absolute top-4 left-4 opacity-25">&ldquo;</span>
            <p className="font-sans text-lg md:text-xl text-text-primary italic mb-6 leading-relaxed pl-6 relative z-10">
              Lida has a dynamic combination of intelligence, listening skills, and passion that makes her an invaluable collaborator. She guides you outside your comfort zone to see options you never knew existed.
            </p>
            <div className="pl-6">
              <span className="font-sans text-base font-bold text-text-primary block">Global Executive</span>
              <span className="font-sans text-sm text-text-muted block">Financial Services Client</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION */}
      <section className="min-h-[750px] flex items-center py-24 bg-bg-pure border-t border-ui-muted/10">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 text-left text-text-primary">
              <span className="text-accent-citron font-sans text-[16px] font-bold tracking-[0.12em] uppercase mb-4 block">
                Work With Lida
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6">
                Take control of your professional legacy.
              </h2>
              <p className="font-sans text-lg md:text-xl text-text-muted mb-8 max-w-2xl leading-relaxed">
                Most people accept how others perceive them. You don’t have to. Reach out below to begin a collaborative conversation about positioning yourself for the opportunities you want.
              </p>
              <Link 
                href="/work-with-lida" 
                className="bg-accent text-white hover:bg-accent-light rounded-full px-8 py-3.5 font-sans text-[16px] font-medium transition-colors inline-block shadow-lg"
              >
                Schedule a Consultation &rarr;
              </Link>
            </div>

            {/* Right: CTA Image */}
            <div className="lg:col-span-5 flex justify-center w-full">
              <div className="relative w-full max-w-md aspect-[4/3] overflow-hidden rounded-lg border-4 border-white shadow-2xl">
                <img 
                  src="/cta-Lida.png" 
                  alt="Lida Citroen" 
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