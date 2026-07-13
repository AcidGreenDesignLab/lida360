import Link from 'next/link';

export default function BlogPage() {
  const posts = [
    {
      title: 'Brand Agility: Navigating Career Shifts in a Changing Economy',
      excerpt: 'How to keep your core brand values intact while pivoting your skills to meet the demands of emerging technology and shifts in C-Suite expectations.',
      image: '/Agility-600x600.png',
      date: 'July 8, 2026',
      readTime: '5 min read'
    },
    {
      title: 'Be Bold: How to Speak Up and Claim Your Leadership Space',
      excerpt: 'Quiet leadership has its place, but scaling your corporate influence requires knowing when — and how — to boldly command the C-suite.',
      image: '/Bold-768x768.png',
      date: 'June 22, 2026',
      readTime: '6 min read'
    },
    {
      title: 'Building Brand Confidence: Overcoming Imposter Syndrome',
      excerpt: 'Executive presence starts from within. Learn the specific cognitive mindset shifts to project confidence and alignment under fire.',
      image: '/Confidence-768x768.png',
      date: 'May 14, 2026',
      readTime: '7 min read'
    },
    {
      title: 'On the Spot: Managing Reputation Under Pressure',
      excerpt: 'Crisis control strategies for the digital age. What to do in the first 48 hours of an image threat to protect your professional capital.',
      image: '/On-the-spot-768x768.png',
      date: 'April 29, 2026',
      readTime: '8 min read'
    },
    {
      title: 'Perception is Reality: Auditing Your Professional Image',
      excerpt: 'Perform a systematic audit of your digital and physical footprints to align how others see you with your true leadership DNA.',
      image: '/Perception-768x768.png',
      date: 'March 11, 2026',
      readTime: '5 min read'
    },
    {
      title: 'Quiet Fired: Recovering and Rebuilding After a Sudden Job Loss',
      excerpt: 'Workplace transition strategy: how to control your personal narrative and pivot your credentials after being quietly pushed out.',
      image: '/Quiet-fired-768x768.png',
      date: 'February 18, 2026',
      readTime: '6 min read'
    }
  ];

  return (
    <div className="bg-bg-primary min-h-screen pt-24">
      {/* 1. HERO SECTION */}
      <section className="bg-bg-pure py-20 border-b border-ui-muted/10">
        <div className="max-w-7xl mx-auto px-6 text-left">
          <span className="text-accent-pink font-sans text-[16px] font-bold tracking-[0.12em] uppercase mb-4 block">
            LIDA360 - BLOG
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] mb-6 text-text-primary">
            Insights on Brand Strategy, <span className="text-accent-pink block sm:inline">Reputation & Influence.</span>
          </h1>
          <p className="font-sans text-xl text-text-muted max-w-3xl leading-relaxed">
            Browse Lida's latest insights, case analyses, and actionable strategies for building, protecting, and scaling your personal brand and executive presence.
          </p>
        </div>
      </section>

      {/* 2. BLOG POSTS GRID */}
      <section className="bg-bg-alt py-24 min-h-[750px] flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <div 
                key={idx}
                className="flex flex-col justify-between bg-[#FCFCFC] border-4 border-white rounded-lg shadow-lg hover:border-accent-pink/30 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                {/* Post Graphic */}
                <div className="aspect-square relative overflow-hidden bg-bg-pure border-b border-ui-muted/10">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content Details */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 text-xs font-sans text-text-muted mb-3 font-semibold">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="font-display text-xl font-bold mb-3 text-text-primary group-hover:text-accent-pink transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="font-sans text-sm text-text-muted leading-relaxed line-clamp-3 mb-6">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-ui-muted/10 flex items-center justify-between">
                    <span className="text-accent-citron group-hover:text-accent-pink font-sans text-sm font-semibold tracking-wide flex items-center gap-1 transition-colors">
                      Read Article &rarr;
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. NEWSLETTER CTA */}
      <section className="min-h-[750px] flex items-center py-24 bg-bg-pure border-t border-ui-muted/10">
        <div className="max-w-7xl mx-auto px-6 text-center w-full">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-text-primary">
            Get monthly brand advice delivered to your inbox.
          </h2>
          <p className="font-sans text-lg text-text-muted mb-10 max-w-2xl mx-auto">
            Receive actionable strategies on reputation management, professional legacy, and executive presence directly from Lida.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 justify-center items-stretch max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-6 py-4 bg-[#FCFCFC] border border-ui-muted/20 focus:border-accent-pink focus:outline-none rounded-full sm:rounded-r-none sm:rounded-l-full flex-grow text-text-primary text-base font-sans"
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