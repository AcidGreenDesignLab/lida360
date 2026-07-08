import { Button } from "@/components/ui/Button";

export default function WorkWithLidaPage() {
  return (
    <div className="py-24 px-6 max-w-4xl mx-auto">
      <span className="text-accent-citron font-sans text-[16px] font-bold tracking-[0.12em] uppercase mb-4 block">
        LIDA360 - WORK WITH LIDA
      </span>
      <h1 className="text-5xl mb-8">Work With Lida</h1>
      <p className="font-sans text-xl mb-12 text-ui-muted">
        Ready to take control of your career, brand, and reputation? Fill out the form below to start your journey.
      </p>
      
      <form className="bg-bg-pure p-8 rounded-lg shadow-sm border border-ui-muted/20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="firstName" className="block font-sans font-bold text-text-primary mb-2">First Name</label>
            <input 
              type="text" 
              id="firstName" 
              name="firstName" 
              className="w-full border border-ui-muted/30 rounded px-4 py-3 font-sans focus:outline-none focus:border-accent-pink focus:ring-1 focus:ring-accent-pink"
              required 
              aria-required="true"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block font-sans font-bold text-text-primary mb-2">Last Name</label>
            <input 
              type="text" 
              id="lastName" 
              name="lastName" 
              className="w-full border border-ui-muted/30 rounded px-4 py-3 font-sans focus:outline-none focus:border-accent-pink focus:ring-1 focus:ring-accent-pink"
              required 
              aria-required="true"
            />
          </div>
        </div>
        
        <div className="mb-6">
          <label htmlFor="email" className="block font-sans font-bold text-text-primary mb-2">Email Address</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            className="w-full border border-ui-muted/30 rounded px-4 py-3 font-sans focus:outline-none focus:border-accent-pink focus:ring-1 focus:ring-accent-pink"
            required 
            aria-required="true"
          />
        </div>

        <div className="mb-8">
          <label htmlFor="message" className="block font-sans font-bold text-text-primary mb-2">How can we help you?</label>
          <textarea 
            id="message" 
            name="message" 
            rows={6}
            className="w-full border border-ui-muted/30 rounded px-4 py-3 font-sans focus:outline-none focus:border-accent-pink focus:ring-1 focus:ring-accent-pink"
            required 
            aria-required="true"
          />
        </div>
        
        <div className="flex justify-end">
          <Button type="submit">Send Message</Button>
        </div>
      </form>
    </div>
  );
}