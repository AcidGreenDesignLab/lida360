import Link from 'next/link';

export default function MeetLidaAndTheTeamPage() {
  const team = [
    {
      name: 'Lida Citroën',
      role: 'CEO & Founder',
      bio: 'Lida knows that who you are is largely influenced by who you’re perceived to be. Working with executives, entrepreneurs, and emerging leaders in over 30 countries, Lida coaches her clients to drive their reputation and personal brand. As a professional keynote speaker and presenter, Lida’s popular TEDx Talk, Talks at Google presentation, and numerous courses on LinkedIn Learning showcase her empowering coaching style and message. She teaches professionals to take control of their narrative and build a personal brand that supports their business. Lida has a B.A. in Political Science from Pomona College and a certificate in Executive Influence and Leadership from Wharton.',
      image: '/Lida-bio.jpg'
    },
    {
      name: 'Sabrina Gilg',
      role: 'Marketing Director',
      bio: 'A bilingual marketing director with 17+ years of professional experience in marketing, digital promotion, electronic communications and advertising, Sabrina brings passion, curiosity, and a commitment to excellence to her work at LIDA360. Sabrina earned an MBA with a marketing concentration and went on to do international agency work, directly managing external client communications and marketing before joining LIDA360. She brings a wonderful sense of compassion to her work – always putting herself in the shoes of the target audience. This, combined with her marketing savvy and communications knowledge, makes her a valuable part of the LIDA360 team.',
      image: '/Sabrina-landscape-1-1-768x432.png'
    },
    {
      name: 'Kristen DiPierro',
      role: 'Executive Assistant',
      bio: 'Kristen is passionate about helping LIDA360 projects stay on track. A graduate of Pennsylvania State University with a degree in Corporate Communications, Kristen is skilled at crafting messages that hit home and keeping projects moving forward. With a sharp mind for organization and dedication to excellence, Kristen helps the team boost productivity and smooth out processes. Whether it’s juggling daily tasks or steering projects in the right direction, she brings a special blend of communication skills and organizational wizardry to the table. With her dedication to top-notch work, an eagle eye for details, and a genuine desire to see others succeed, Kristen ensures the LIDA360 team reaches their goals and serves clients in the best way possible.',
      image: '/Kristen-website-768x432.png'
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
                LIDA360 - MEET THE TEAM
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] mb-6 text-text-primary">
                A team dedicated <span className="text-accent-pink block sm:inline">to your success.</span>
              </h1>
              <p className="font-sans text-xl font-semibold text-text-primary mb-4 leading-relaxed max-w-2xl">
                Global expertise, discrete counsel, and strategic partners.
              </p>
              <p className="font-sans text-lg text-text-muted mb-8 max-w-2xl leading-relaxed">
                All of our work is supported by a loyal, talented, and discrete team of specialists. We’ve got the resources and strategic partners ready to support you.
              </p>
              <Link 
                href="/work-with-lida"
                className="bg-accent text-white hover:bg-accent-light rounded-full px-8 py-3.5 font-sans text-[16px] font-medium transition-colors inline-block shadow-lg"
              >
                Work with LIDA360 &rarr;
              </Link>
            </div>

            {/* Right: Flipped Image with white border and shadow */}
            <div className="lg:col-span-5 relative flex justify-center w-full">
              <div className="relative w-full max-w-md aspect-[4/3] overflow-hidden rounded-lg border-4 border-white shadow-2xl">
                <img 
                  src="/Lida-bio.jpg" 
                  alt="Lida Citroën CEO" 
                  className="w-full h-full object-cover scale-x-[-1]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TEAM MEMBERS LIST */}
      <section className="bg-bg-alt py-24 border-t border-ui-muted/10">
        <div className="max-w-7xl mx-auto px-6 w-full text-left">
          <div className="max-w-3xl mb-16">
            <span className="text-accent-pink font-sans text-[16px] font-bold tracking-[0.12em] uppercase mb-3 block">
              Leadership
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight text-text-primary">
              LIDA360 Leadership Team
            </h2>
          </div>

          <div className="flex flex-col gap-16 w-full">
            {team.map((member, idx) => (
              <div 
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#FCFCFC] p-8 md:p-10 border-4 border-white rounded-lg shadow-lg hover:border-accent-pink/20 hover:shadow-2xl transition-all duration-300"
              >
                {/* Member Photo */}
                <div className="lg:col-span-4 flex justify-center w-full">
                  <div className="relative w-full max-w-xs aspect-[4/3] sm:aspect-square overflow-hidden rounded-lg border-4 border-white shadow-xl">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Member Bio info */}
                <div className="lg:col-span-8 text-left">
                  <h3 className="font-display text-3xl font-bold text-text-primary mb-1">{member.name}</h3>
                  <span className="text-accent-pink font-sans text-sm font-bold tracking-wider uppercase block mb-6">
                    {member.role}
                  </span>
                  <p className="font-sans text-base md:text-lg text-text-muted leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PARTNERS & AFFILIATIONS */}
      <section className="bg-bg-pure py-24 border-t border-ui-muted/10">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 text-left text-text-primary">
              <span className="text-accent-pink font-sans text-[16px] font-bold tracking-[0.12em] uppercase mb-4 block">
                Resource Network
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight mb-6">
                Global reach, backed by strategic partnerships.
              </h2>
              <p className="font-sans text-lg text-text-muted mb-6 leading-relaxed">
                Whether you need digital branding support, legal reputation strategies, or international public relations coordination, our vetted network of strategic partners is ready to act.
              </p>
              <p className="font-sans text-lg text-text-muted mb-6 leading-relaxed">
                We work across corporate boundaries, political groups, and nonprofit segments to deliver results in over 30 countries.
              </p>
            </div>

            {/* Right: Meeting Image */}
            <div className="lg:col-span-5 flex justify-center w-full">
              <div className="relative w-full max-w-md aspect-[4/3] overflow-hidden rounded-lg border-4 border-white shadow-2xl">
                <img 
                  src="/conference.jpg" 
                  alt="LIDA360 corporate conference alignment" 
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
