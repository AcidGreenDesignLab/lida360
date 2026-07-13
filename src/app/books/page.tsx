import Link from 'next/link';

export default function BooksPage() {
  const books = [
    {
      title: 'The New Rules of Influence',
      subtitle: 'How to Authentically Build Trust, Drive Change, and Make an Impact',
      desc: 'Discover the core principles of authentic human influence in a world dominated by AI and digital noise. Learn how to align your values with your actions to build deep C-suite credibility.',
      image: '/The-New-Rules-of-Influence-cover-Lida-Citroen.jpeg'
    },
    {
      title: 'Control the Narrative',
      subtitle: "The Executive's Guide to Building, Protecting, and Restoring Your Reputation",
      desc: 'A high-stakes guide for executive leaders on reputation management. Learn the exact strategies needed to proactively secure your professional capital and navigate crisis recovery.',
      image: '/book_Control-the-Narrative@2x.png'
    },
    {
      title: 'Reputation 360',
      subtitle: 'Creating Power Through Personal Branding',
      desc: 'The core personal branding guidebook. Provides a systematic, practical framework for auditing, designing, and projecting a personal brand that commands respect and drives opportunities.',
      image: '/book_Reputation-360.png'
    },
    {
      title: 'Success After Service',
      subtitle: "The Veteran's Guide to a Meaningful Civilian Career",
      desc: 'The definitive guide for transitioning military service members. Helps veterans translate military excellence into corporate value, offering practical career planning tips.',
      image: '/book_Success-After-Service.png'
    },
    {
      title: 'Your Next Mission',
      subtitle: "A Personal Branding Guide for Today's Military Veteran",
      desc: 'An interactive workbook designed to help service members build a personal brand, transition smoothly, and succeed in the civilian workplace.',
      image: '/book_Your-Next-Mission@2x.png'
    },
    {
      title: 'Engaging with Veteran Talent',
      subtitle: 'A Guide for Employers on Recruiting and Retaining Military Veterans',
      desc: 'A comprehensive corporate handbook for HR professionals, recruiters, and managers on how to successfully recruit, engage, and retain military veteran employees.',
      image: '/book_Engaging-with-Veteran-Talent-768x539.png'
    }
  ];

  return (
    <div className="bg-bg-primary min-h-screen pt-24">
      {/* 1. HERO SECTION */}
      <section className="bg-bg-pure py-20 border-b border-ui-muted/10">
        <div className="max-w-7xl mx-auto px-6 text-left">
          <span className="text-accent-pink font-sans text-[16px] font-bold tracking-[0.12em] uppercase mb-4 block">
            LIDA360 - BOOKS
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] mb-6 text-text-primary">
            Authored by Lida Citroën: <span className="text-accent-pink block sm:inline">Reputation & Career Strategy.</span>
          </h1>
          <p className="font-sans text-xl text-text-muted max-w-3xl leading-relaxed">
            Lida has authored 7 best-selling books focusing on building influence, managing reputation, C-suite positioning, and military-to-civilian workforce transition.
          </p>
        </div>
      </section>

      {/* 2. BOOKS LIST GRID */}
      <section className="bg-bg-alt py-24 min-h-[750px] flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {books.map((book, idx) => (
              <div 
                key={idx}
                className="bg-[#FCFCFC] p-8 border-4 border-white rounded-lg shadow-lg hover:border-accent-pink/30 hover:shadow-2xl transition-all duration-300"
              >
                {/* Book Cover Cover */}
                <div className="w-48 flex-shrink-0 flex items-center justify-center bg-bg-pure p-4 rounded-md shadow-sm border border-ui-muted/10">
                  <img 
                    src={book.image} 
                    alt={book.title} 
                    className="max-h-64 object-contain shadow-md"
                  />
                </div>

                {/* Book Copy Details */}
                <div className="flex flex-col justify-between text-left">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-text-primary mb-1">{book.title}</h3>
                    <span className="text-accent-pink font-sans text-sm font-bold tracking-wide block mb-4">
                      {book.subtitle}
                    </span>
                    <p className="font-sans text-base text-text-muted leading-relaxed mb-6">
                      {book.desc}
                    </p>
                  </div>
                  <div>
                    <a 
                      href="https://www.amazon.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-accent text-white hover:bg-accent-light rounded-full px-6 py-2.5 font-sans text-sm font-semibold tracking-wide transition-colors inline-block shadow-md text-center"
                    >
                      Buy on Amazon &rarr;
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}