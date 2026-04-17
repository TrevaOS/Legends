import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { venueDetails } from "@/lib/data";

export const ContactLocation = () => (
  <AnimatedSection>
    <section className="px-6 py-24 bg-[#12050d]">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
        <iframe
          title="Legends map"
          className="w-full h-80 rounded-2xl border border-[#a98f63]/30"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src={venueDetails.mapEmbedSrc}
        />
        <article className="ornamental-border rounded-2xl p-6 bg-[#1a0010]/70 space-y-5">
          <h3 className="royal-heading text-3xl text-[#a98f63]">Visit LEGENDS</h3>

          <div className="flex items-start gap-3 text-sm text-[#e8e0d0]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a98f63" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0">
              <path d="M12 21c-4.418-4.418-7-7.582-7-10a7 7 0 1 1 14 0c0 2.418-2.582 5.582-7 10z" />
              <circle cx="12" cy="11" r="2.5" />
            </svg>
            <p>{venueDetails.address}</p>
          </div>

          <div className="flex items-center gap-3 text-sm text-[#e8e0d0]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a98f63" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
              <circle cx="12" cy="12" r="9" />
              <polyline points="12 7 12 12 15 15" />
            </svg>
            <p>{venueDetails.hours}</p>
          </div>

          <div className="flex items-center gap-3 text-sm text-[#e8e0d0]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a98f63" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.9 12.5 19.79 19.79 0 0 1 1.87 4 2 2 0 0 1 3.86 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <p>{venueDetails.phone}</p>
          </div>

          <div className="flex items-center gap-3 text-sm text-[#e8e0d0]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a98f63" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <polyline points="2,4 12,13 22,4" />
            </svg>
            <p>{venueDetails.email}</p>
          </div>
        </article>
      </div>
    </section>
  </AnimatedSection>
);
