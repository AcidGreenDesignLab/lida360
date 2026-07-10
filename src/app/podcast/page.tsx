import Link from 'next/link';

export default function PodcastPage() {
  const episodes = [
    {
      episodeNum: 'Ep. 42',
      title: 'Fostering Veteran Talent in the Modern Economy',
      guest: 'General Thomas (Ret.)',
      desc: 'Discussing employer pipelines, transition milestones, and bridging C-Suite expectations for veteran hires.',
      duration: '45 mins',
      date: 'July 2, 2026'
    },
    {
      episodeNum: 'Ep. 41',
      title: 'Navigating a Reputation Crisis in Corporate Tech',
      guest: 'Sarah Jenkins, Crisis Advisor',
      desc: 'Actionable tactics for handling online smear campaigns, managing Google search footprints, and rebuilding trust.',
      duration: '38 mins',
      date: 'June 18, 2026'
    },
    {
      episodeNum: 'Ep. 40',
      title: 'Building Executive Presence in an AI-Driven Workplace',
      guest: 'Marcus Aurel, C-Suite Coach',
      desc: 'Why authentic human connection, listening skills, and honesty are more critical than ever in the age of automation.',
      duration: '42 mins',
      date: 'June 4, 2026'
    }
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
                LIDA360 - PODCAST
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] mb-6 text-text-primary">
                The Lida Citroën Podcast: <span className="text-accent-pink block sm:inline">Reputation, Brand & Influence.</span>
              </h1>
              <p className="font-sans text-xl text-text-muted mb-8 max-w-2xl leading-relaxed">
                Join Lida as she interviews global executives, authors, thought leaders, and military veterans on how to intentionally design your brand and influence how you're perceived.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://open.spotify.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-accent text-white hover:bg-accent-light rounded-full px-6 py-3 font-sans text-[14px] font-semibold transition-colors inline-block shadow-md text-center"
                >
                  Listen on Spotify
                </a>
                <a 
                  href="https://podcasts.apple.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-bg-alt border border-ui-muted/20 text-text-primary hover:bg-ui-muted/5 rounded-full px-6 py-3 font-sans text-[14px] font-semibold transition-colors inline-block shadow-sm text-center"
                >
                  Listen on Apple Podcasts
                </a>
              </div>
            </div>

            {/* Right: Flipped Image with white border and shadow */}
            <div className="lg:col-span-5 relative flex justify-center w-full">
              <div className="relative w-full max-w-md aspect-[4/3] overflow-hidden rounded-lg border-4 border-white shadow-2xl">
                <img 
                  src="/hero_Lida.png" 
                  alt="The Lida Citroën Podcast cover graphic" 
                  className="w-full h-full object-cover scale-x-[-1]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. RECENT EPISODES */}
      <section className="bg-bg-alt py-24 min-h-[750px] flex items-center border-t border-ui-muted/10">
        <div className="max-w-7xl mx-auto px-6 w-full text-left">
          <div className="max-w-3xl mb-16">
            <span className="text-accent-pink font-sans text-[16px] font-bold tracking-[0.12em] uppercase mb-3 block">
              Episodes
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight text-text-primary">
              Recent Conversations on Influence
            </h2>
          </div>

          <div className="flex flex-col gap-8 w-full">
            {episodes.map((episode, idx) => (
              <div 
                key={idx}
                className="border border-ui-muted/10 border-l-4 border-l-accent-pink rounded-r-lg rounded-l-md bg-bg-pure p-8 flex flex-col md:flex-row items-start md:items-center gap-8 justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_35px_rgba(0,0,0,0.08)] transition-all duration-300"
              >
                <div className="flex items-start md:items-center gap-6 flex-grow text-left">
                  {/* Episode Index */}
                  <span className="font-display text-2xl font-bold text-accent-pink w-16 flex-shrink-0">
                    {episode.episodeNum}
                  </span>
                  
                  {/* Hexagon Play Wrapper */}
                  <div className="relative w-12 h-12 flex items-center justify-center flex-shrink-0 cursor-pointer group">
                    <svg className="absolute inset-0 w-full h-full text-accent-pink group-hover:scale-105 transition-transform" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
                      <polygon points="50,3 93,25 93,75 50,97 7,75 7,25" />
                    </svg>
                    <svg className="w-5 h-5 text-accent-pink relative z-10 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-bold text-text-primary mb-1">{episode.title}</h3>
                    <span className="text-accent-citron font-sans text-xs font-bold tracking-wider block mb-2 uppercase">
                      Guest: {episode.guest}
                    </span>
                    <p className="font-sans text-sm text-text-muted leading-relaxed max-w-3xl">
                      {episode.desc}
                    </p>
                  </div>
                </div>

                {/* Duration / Date Meta */}
                <div className="flex-shrink-0 font-sans text-xs text-text-muted font-semibold flex md:flex-col gap-4 text-right md:pt-0 pt-4 border-t md:border-t-0 border-ui-muted/10 w-full md:w-auto justify-between">
                  <span>{episode.date}</span>
                  <span>{episode.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}