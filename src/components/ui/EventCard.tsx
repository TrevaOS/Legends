import { RoyalButton } from "./RoyalButton";

export const EventCard = ({ title, date, time, icon }: { title: string; date: string; time: string; icon: string; }) => (
  <article className="ornamental-border bg-[#1b0a10]/90 rounded-2xl p-5 backdrop-blur-md">
    <div className="flex items-start justify-between">
      <p className="h-14 w-14 rounded-full bg-[#a98f63] text-[#1a1a1a] grid place-content-center font-semibold text-sm">{date}</p>
      <span className="text-2xl">{icon}</span>
    </div>
    <h3 className="royal-heading text-2xl mt-4">{title}</h3>
    <p className="text-sm text-[#cbbca1] mt-2">{time}</p>
    <div className="mt-5"><RoyalButton href="/reservations">Book Spot</RoyalButton></div>
  </article>
);
