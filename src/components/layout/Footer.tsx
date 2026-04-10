export const Footer = () => {
  return (
    <footer className="bg-[#110f0f] border-t border-[#a98f63]/40 mt-16">
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#a98f63] to-transparent" />
      <div className="max-w-7xl mx-auto px-6 py-12 text-[#e8e0d0]">
        <p className="royal-heading text-center text-2xl text-[#a98f63]">LEGENDS</p>
        <p className="text-center mt-1 text-[#cbbca1]">Kingdom of Brews</p>
        <div className="grid md:grid-cols-3 gap-8 mt-10 text-sm">
          <div><p className="font-semibold text-[#a98f63]">Quick Links</p><p className="mt-2">Home | About | Menu | Contact</p></div>
          <div><p className="font-semibold text-[#a98f63]">Beers</p><p className="mt-2">Kingdom Lager | Crowned IPA | Dark Knight Stout</p></div>
          <div><p className="font-semibold text-[#a98f63]">Connect</p><p className="mt-2">support@legendsbrewery.in | +91 99999 99999</p></div>
        </div>
        <p className="text-center text-xs mt-10 text-[#cbbca1]">Copyright 2026 Legends. Kingdom of Brews.</p>
      </div>
    </footer>
  );
};
