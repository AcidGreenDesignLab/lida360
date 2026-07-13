import Link from 'next/link';

export default function MediaPage() {
  const mediaOutlets = [
    { name: 'Fox News', type: 'Television' },
    { name: 'CNN', type: 'Television' },
    { name: 'Forbes', type: 'Publication' },
    { name: 'Inc. Magazine', type: 'Publication' },
    { name: 'Harvard Business Review', type: 'Publication' },
    { name: 'NBC News', type: 'Television' },
    { name: 'Military.com', type: 'Publication' },
    { name: 'Entrepreneur.com', type: 'Publication' }
  ];

  return (
    <div className="bg-bg-primary min-h-screen pt-24">
      {/* 1. HERO SECTION */}
      <section className="bg-bg-pure py-20 border-b border-ui-muted/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Content Block */}
            <div className="lg:col-span-7 text-left">
              <span className="text-accent-pink font-sans text-[16px] font-bold tracking-[0.12em] uppercase mb-4 block">
                LIDA360 - MEDIA
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] mb-6 text-text-primary">
                Lida Citroën in the News: <span className="text-accent-pink block sm:inline">Expert Branding Commentary.</span>
              </h1>
              <p className="font-sans text-xl text-text-muted mb-8 max-w-2xl leading-relaxed">
                Lida is a sought-after source for global media outlets on subjects including personal branding, corporate reputation repair, crisis communications, and military veteran transition dynamics.
              </p>
              <Link 
                href="/work-with-lida"
                className="bg-accent text-white hover:bg-accent-light rounded-full px-8 py-3.5 font-sans text-[16px] font-medium transition-colors inline-block shadow-lg"
              >
                Inquire for Media Interview &rarr;
              </Link>
            </div>

            {/* Right: Flipped Image with white border and shadow */}
            <div className="lg:col-span-5 relative flex justify-center w-full">
              <div className="relative w-full max-w-md aspect-[4/3] overflow-hidden rounded-lg border-4 border-white shadow-2xl">
                <img 
                  src="/hero_Lida.png" 
                  alt="Lida Citroën Media Coverage" 
                  className="w-full h-full object-cover scale-x-[-1]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MEDIA OUTLETS GRID */}
      <section className="bg-bg-alt py-24 min-h-[750px] flex items-center border-t border-ui-muted/10">
        <div className="max-w-7xl mx-auto px-6 w-full text-left">
          <div className="max-w-3xl mb-16">
            <span className="text-accent-pink font-sans text-[16px] font-bold tracking-[0.12em] uppercase mb-3 block">
              Features
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight text-text-primary">
              Where Lida’s Expert Commentary Has Appeared
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {mediaOutlets.map((outlet, idx) => (
              <div 
                key={idx}
                className="bg-[#FCFCFC] p-6 border-4 border-white rounded-lg shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex flex-col justify-center items-center min-h-[120px] text-center"
              >
                <span className="font-display text-xl font-bold text-text-primary block mb-1">{outlet.name}</span>
                <span className="text-accent-pink font-sans text-xs font-semibold uppercase tracking-wider">{outlet.type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. RECENT HIGHLIGHTS / INTERVIEWS */}
      <section className="bg-bg-pure py-24 min-h-[750px] flex items-center border-t border-ui-muted/10">
        <div className="max-w-7xl mx-auto px-6 w-full text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Highlight Content */}
            <div className="lg:col-span-7">
              <span className="text-accent-pink font-sans text-[16px] font-bold tracking-[0.12em] uppercase mb-3 block">
                Press Focus Areas
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight mb-8 text-text-primary">
                Corporate reputation risk, executive presence, and veteran employment.
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-l-accent-pink pl-6">
                  <h3 className="text-lg font-bold text-text-primary mb-2">Crisis Communication & Reparation</h3>
                  <p className="font-sans text-base text-text-muted leading-relaxed">
                    Lida regular provides real-time analysis of corporate crisis communication, public relations recovery loops, and brand positioning pitfalls.
                  </p>
                </div>
                <div className="border-l-4 border-l-accent-pink pl-6">
                  <h3 className="text-lg font-bold text-text-primary mb-2">Military to Civilian Workforce Dynamic</h3>
                  <p className="font-sans text-base text-text-muted leading-relaxed">
                    Drawing from three published books on military transition, Lida serves as the primary media consultant for bridging veteran talent to corporate hiring pipelines.
                  </p>
                </div>
                <div className="border-l-4 border-l-accent-pink pl-6">
                  <h3 className="text-lg font-bold text-text-primary mb-2">Personal Branding in C-Suite</h3>
                  <p className="font-sans text-base text-text-muted leading-relaxed">
                    Analysis of how executive presence, digital footprints, and leadership narrative drive capital and business opportunities.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Speaker kit Box */}
            <div className="lg:col-span-5 bg-[#FCFCFC] p-8 border-4 border-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
              <span className="text-accent-citron font-sans text-xs font-bold tracking-[0.15em] uppercase mb-3 block">Speaker Resources</span>
              <h3 className="text-2xl font-display font-bold mb-4 text-text-primary">Download LIDA360 Media Kit</h3>
              <p className="font-sans text-sm text-text-muted leading-relaxed mb-6">
                Need high-resolution headshots, official biographies, speaker topics sheets, or sample broadcast clips for your upcoming news program or event?
              </p>
              <div className="space-y-3">
                <Link href="/speaking/speaker-kit" className="w-full text-center bg-accent text-white hover:bg-accent-light rounded-full py-2.5 font-sans text-sm font-semibold tracking-wide transition-colors block shadow-md">
                  Go to Speaker Kit &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}