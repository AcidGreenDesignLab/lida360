import Link from 'next/link';

export default function WorkWithLidaPage() {
  return (
    <div className="bg-bg-primary min-h-screen pt-24">
      {/* 1. HERO SECTION */}
      <section className="bg-bg-pure py-20 border-b border-ui-muted/10">
        <div className="max-w-7xl mx-auto px-6 text-left">
          <span className="text-accent-pink font-sans text-[16px] font-bold tracking-[0.12em] uppercase mb-4 block">
            LIDA360 - CONTACT
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] mb-6 text-text-primary">
            Get in Touch: <span className="text-accent-pink block sm:inline">Start Defining Your Vision.</span>
          </h1>
          <p className="font-sans text-xl text-text-muted max-w-3xl leading-relaxed">
            It’s easy to get started. Just reach out below to begin a conversation about your goals and challenges. From there, we’ll come up with a plan for your next steps &mdash; together.
          </p>
        </div>
      </section>

      {/* 2. FORM & SIDEBAR SECTION */}
      <section className="bg-bg-alt py-24 min-h-[750px] flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* Left: Interactive Form */}
            <div className="lg:col-span-7 bg-[#FCFCFC] p-8 md:p-10 border-4 border-white rounded-lg shadow-lg text-left">
              <h2 className="text-2xl font-display font-bold mb-8 text-text-primary">Send Lida a Message</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-sans font-bold text-text-primary mb-2 uppercase tracking-wide">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-bg-pure border border-ui-muted/20 focus:border-accent-pink focus:outline-none rounded-md text-text-primary font-sans" 
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-sans font-bold text-text-primary mb-2 uppercase tracking-wide">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-bg-pure border border-ui-muted/20 focus:border-accent-pink focus:outline-none rounded-md text-text-primary font-sans" 
                      required 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-sans font-bold text-text-primary mb-2 uppercase tracking-wide">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 bg-bg-pure border border-ui-muted/20 focus:border-accent-pink focus:outline-none rounded-md text-text-primary font-sans" 
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-sans font-bold text-text-primary mb-2 uppercase tracking-wide">Inquiry Type</label>
                    <select 
                      className="w-full px-4 py-3 bg-bg-pure border border-ui-muted/20 focus:border-accent-pink focus:outline-none rounded-md text-text-primary font-sans"
                    >
                      <option>Consulting Services</option>
                      <option>Speaking Availability</option>
                      <option>Media Interview Request</option>
                      <option>Veteran Mentorship</option>
                      <option>Other Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-sans font-bold text-text-primary mb-2 uppercase tracking-wide">Organization / Company</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-bg-pure border border-ui-muted/20 focus:border-accent-pink focus:outline-none rounded-md text-text-primary font-sans" 
                  />
                </div>

                <div>
                  <label className="block text-sm font-sans font-bold text-text-primary mb-2 uppercase tracking-wide">Message / Challenges</label>
                  <textarea 
                    rows={6}
                    className="w-full px-4 py-3 bg-bg-pure border border-ui-muted/20 focus:border-accent-pink focus:outline-none rounded-md text-text-primary font-sans resize-none" 
                    required 
                  />
                </div>

                <div>
                  <button 
                    type="submit" 
                    className="bg-accent text-white hover:bg-accent-light rounded-full px-8 py-3.5 font-sans text-[15px] font-semibold transition-colors shadow-lg cursor-pointer"
                  >
                    Send Inquiry &rarr;
                  </button>
                </div>
              </form>
            </div>

            {/* Right: Sidebar profile image */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div className="relative w-full h-full min-h-[350px] overflow-hidden rounded-lg border-4 border-white shadow-2xl">
                <img 
                  src="/lida-sidebar.jpg" 
                  alt="Lida Citroën side profile" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}