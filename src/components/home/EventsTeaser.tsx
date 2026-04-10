import { EventCard } from "@/components/ui/EventCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const EventsTeaser = () => (
  <AnimatedSection>
    <section className="px-6 py-24 bg-[#140810]">
      <div className="max-w-6xl mx-auto">
        <h2 className="royal-heading text-4xl">The Legendary Nights</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <EventCard title="DJ Throne Night" date="12 Apr" time="8:00 PM onwards" icon="??" />
          <EventCard title="Royal Acoustic Set" date="19 Apr" time="7:30 PM onwards" icon="??" />
          <EventCard title="Brew Trivia Arena" date="26 Apr" time="8:30 PM onwards" icon="??" />
        </div>
      </div>
    </section>
  </AnimatedSection>
);
