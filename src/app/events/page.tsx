import { EventCard } from "@/components/ui/EventCard";
import { featuredAmbience, galleryItems } from "@/lib/data";

export default function EventsPage() {
  const eventImages = [
    featuredAmbience[0],
    featuredAmbience[1],
    featuredAmbience[2],
    featuredAmbience[3],
    galleryItems[1].image,
    galleryItems[3].image,
  ];

  return (
    <div className="px-6 py-16 max-w-6xl mx-auto">
      <h1 className="royal-heading text-6xl">The Legendary Nights</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <EventCard title="DJ Nights" date="14 Apr" time="8 PM | Entry Free" icon="??" />
        <EventCard title="Live Music" date="21 Apr" time="7:30 PM | Cover INR 499" icon="??" />
        <EventCard title="Stand-up Comedy" date="28 Apr" time="9 PM | Pass INR 699" icon="??" />
        <EventCard title="Trivia Nights" date="05 May" time="8 PM | Team Entry" icon="??" />
        <EventCard title="Beer Tasting" date="12 May" time="6 PM | Reserve Seat" icon="??" />
      </div>
      <section className="mt-16"><h2 className="royal-heading text-4xl">Past Events Gallery</h2><div className="masonry-grid mt-6">{eventImages.map((image,i)=><div key={i} className="masonry-item rounded-xl h-48 overflow-hidden border border-[#a98f63]/25"><img src={image} alt="Legends event moments" className="h-full w-full object-cover" loading="lazy" /></div>)}</div></section>
    </div>
  );
}
