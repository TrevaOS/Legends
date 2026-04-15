export const BeerCard = ({
  name,
  style,
  abv,
  description,
  ibu = 20,
  price,
  pair,
  image,
  onViewDetails,
}: {
  name: string;
  style?: string;
  abv?: string;
  description: string;
  ibu?: number;
  price?: number;
  pair?: string;
  image?: string;
  onViewDetails?: () => void;
}) => (
    <article className="ornamental-border rounded-2xl overflow-hidden bg-[#1a0010]/80 backdrop-blur-md hover:shadow-[0_0_32px_rgba(169,143,99,0.2)] transition-all">
      <div className="relative h-52 overflow-hidden">
        {image ? <img src={image} alt={name} className="h-full w-full object-cover" loading="lazy" /> : null}
        <div className="absolute inset-0 bg-gradient-to-t from-[#13080a] via-transparent to-transparent" />
      </div>
    <div className="p-5">
      <h3 className="royal-heading text-xl text-[#f5f0e8]">{name}</h3>
      <div className="h-px bg-[#a98f63]/50 my-3" />
      {style || abv || ibu ? (
        <p className="text-xs text-[#cbbca1]">
          {[style, abv ? `ABV: ${abv}` : null, ibu ? `IBU: ${ibu}` : null]
            .filter(Boolean)
            .join(" | ")}
        </p>
      ) : null}
      {price ? <p className="text-sm mt-1">Price: INR {price}</p> : null}
      <p className="text-sm mt-3 text-[#e8e0d0]">{description}</p>
      {pair ? <p className="text-xs mt-2 text-[#cbbca1]">Pairs well with: {pair}</p> : null}
      <div className="mt-4">
        <button type="button" onClick={onViewDetails} className="inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold border border-[#a98f63] text-[#a98f63] hover:bg-[#a98f63] hover:text-[#24090d] transition-colors">
          View Details
        </button>
      </div>
    </div>
  </article>
);
