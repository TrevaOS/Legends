"use client";

const menuSections = [
  {
    title: "Small Plates",
    items: [
      { name: "Truffle Mushroom Bites", price: 320 },
      { name: "House Smoked Wings", price: 410 },
      { name: "Loaded Hop Nachos", price: 360 },
    ],
  },
  {
    title: "Mains",
    items: [
      { name: "Charred Lamb Platter", price: 640 },
      { name: "Grilled Cottage Stack", price: 520 },
      { name: "Fire-Roast Chicken Bowl", price: 560 },
    ],
  },
  {
    title: "Signature Brews",
    items: [
      { name: "Kingdom Lager (ABV 4.8%)", price: 420 },
      { name: "Crowned IPA (ABV 6.5%)", price: 460 },
      { name: "Dark Knight Stout (ABV 7.2%)", price: 480 },
    ],
  },
  {
    title: "Cocktails & Dessert",
    items: [
      { name: "Royal Ember Sour", price: 520 },
      { name: "Panathur Spice Smash", price: 540 },
      { name: "Dark Cacao Crown", price: 310 },
    ],
  },
];

export const FlipbookMenu = () => {
  return (
    <section className="px-4 py-12 md:px-6 md:py-16 bg-[linear-gradient(130deg,#10040b,#2c0816,#13060f)]">
      <div className="mx-auto w-full max-w-[1200px] rounded-3xl border border-[#a98f63]/40 bg-[#14070f]/90 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.55)] md:p-10 lg:p-12">
        <div className="text-center">
          <p className="text-xs tracking-[0.35em] text-[#cbbca1] uppercase">Legends</p>
          <h1 className="royal-heading mt-2 text-4xl text-[#f5f0e8] md:text-6xl">Kingdom of Brews</h1>
          <p className="mt-2 text-[#cbbca1]">Panathur Main Road, Bengaluru</p>
        </div>

        <div className="mt-8 h-px bg-gradient-to-r from-transparent via-[#a98f63] to-transparent" />

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {menuSections.map((section) => (
            <article key={section.title} className="rounded-2xl border border-[#a98f63]/35 bg-[#1d0a14]/80 p-5">
              <h2 className="royal-heading text-2xl text-[#a98f63]">{section.title}</h2>
              <div className="mt-4 space-y-3">
                {section.items.map((item) => (
                  <div key={item.name} className="flex items-center justify-between gap-4 border-b border-[#a98f63]/20 pb-2">
                    <p className="text-[#f1e8d7]">{item.name}</p>
                    <p className="text-[#cbbca1]">INR {item.price}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-[#a98f63]/30 bg-[#0f050b] p-4 text-center text-sm text-[#cbbca1]">
          Single-page menu layout optimized for desktop displays and responsive on mobile.
        </div>
      </div>
    </section>
  );
};
