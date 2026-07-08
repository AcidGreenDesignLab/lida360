import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <div>
      <section className="bg-surface-deep text-surface-white py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl mb-6">
              Executive Coaching, Personal Branding & Reputation Repair for <span className="text-secondary">High-Achieving, Impact-Driven Leaders</span>
            </h1>
            <p className="font-sans text-xl mb-10 text-surface-light">
              Redefine what people think of when they think of you. INFLUENCE POSITIVE PERCEPTION. CREATE NEW OPPORTUNITIES. BUILD A MEANINGFUL LEGACY.
            </p>
            <div className="flex gap-4">
              <Button>Start Your Journey</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">You should be in the driver’s seat of your career, brand, and reputation.</h2>
            <p className="font-sans text-lg text-text-muted max-w-2xl mx-auto">Be confidently visible in all the right ways.</p>
          </div>
        </div>
      </section>
    </div>
  );
}