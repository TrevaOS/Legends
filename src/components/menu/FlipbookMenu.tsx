"use client";

import { useState } from "react";
import { assetFolders, menuBookPages, sourceDocuments, type MenuBookPage } from "@/lib/menu-content";

function CoverPage({ page }: { page: Extract<MenuBookPage, { type: "cover" }> }) {
  return (
    <div className="w-full h-full bg-[#1a0a12] flex flex-col justify-center px-12 py-10">
      <p className="text-xs tracking-[0.4em] uppercase text-[#a98f63] mb-4">{page.eyebrow}</p>
      <h2 className="royal-heading text-6xl xl:text-7xl leading-tight text-[#a98f63]">
        {page.title.split(" ").slice(0, -2).join(" ")}<br />
        {page.title.split(" ").slice(-2).join(" ")}
      </h2>
      <div className="mt-6 h-px w-16 bg-[#a98f63]/50" />
      <p className="mt-6 text-xl text-[#f5f0e8]">{page.subtitle}</p>
      <p className="mt-4 max-w-xs text-sm leading-6 text-[#cbbca1]">{page.note}</p>
    </div>
  );
}

function BackCoverPage({ page }: { page: Extract<MenuBookPage, { type: "backcover" }> }) {
  return (
    <div className="w-full h-full bg-[#1a0a12] flex flex-col justify-center px-12 py-10 text-[#f5f0e8]">
      <h3 className="royal-heading text-4xl text-[#a98f63]">{page.title}</h3>
      <div className="mt-6 h-px w-16 bg-[#a98f63]/50" />
      <div className="mt-8 space-y-5 text-lg">
        {page.lines.map((line) => (
          <div key={line.label} className="flex justify-between gap-4">
            <span className="text-[#cbbca1]">{line.label}</span>
            <span className="text-right">{line.value}</span>
          </div>
        ))}
      </div>
      <p className="mt-14 text-xs tracking-[0.3em] uppercase text-[#a98f63]/70">Legends | Kingdom of Brews</p>
    </div>
  );
}

function ContentPage({ page, pageNum }: { page: Extract<MenuBookPage, { type: "content" }>; pageNum: number }) {
  return (
    <div className="w-full h-full bg-[#f5f0e8] flex flex-col justify-center px-12 py-10">
      <p className="text-[10px] tracking-[0.3em] uppercase text-[#a98f63]/70 mb-1">Legends</p>
      <h3 className="royal-heading text-4xl xl:text-5xl text-[#3e001c]">{page.title}</h3>
      {page.caption ? <p className="mt-3 text-xs leading-5 text-[#7b5d43]">{page.caption}</p> : null}
      <div className="mt-3 h-px bg-[#a98f63]/30" />
      <div className="mt-6 space-y-5">
        {page.items.map((item) => (
          <div key={`${page.title}-${item.name}`} className="flex justify-between items-start gap-4">
            <div className="text-[#2b1511] text-lg xl:text-xl">
              <span>{item.name}</span>
              {item.details?.length ? (
                <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-xs tracking-[0.15em] uppercase text-[#a98f63]">
                  {item.details.map((detail) => (
                    <span key={detail}>{detail}</span>
                  ))}
                </div>
              ) : null}
            </div>
            <span className="text-[#a98f63] font-semibold text-lg xl:text-xl shrink-0">{item.price}</span>
          </div>
        ))}
      </div>
      <p className="mt-auto pt-6 text-[10px] tracking-widest text-[#a98f63]/40 uppercase">
        {pageNum} / {menuBookPages.length}
      </p>
    </div>
  );
}

function Page({ data, pageNum }: { data: MenuBookPage; pageNum: number }) {
  if (data.type === "cover") return <CoverPage page={data} />;
  if (data.type === "backcover") return <BackCoverPage page={data} />;
  return <ContentPage page={data} pageNum={pageNum} />;
}

export const FlipbookMenu = () => {
  const [current, setCurrent] = useState(0);
  const [flipping, setFlipping] = useState<"next" | "prev" | null>(null);

  const goNext = () => {
    if (current >= menuBookPages.length - 1 || flipping) return;
    setFlipping("next");
    setTimeout(() => {
      setCurrent((c) => c + 1);
      setFlipping(null);
    }, 400);
  };

  const goPrev = () => {
    if (current <= 0 || flipping) return;
    setFlipping("prev");
    setTimeout(() => {
      setCurrent((c) => c - 1);
      setFlipping(null);
    }, 400);
  };

  const prev = current > 0 ? menuBookPages[current - 1] : null;
  const curr = menuBookPages[current];

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "linear-gradient(130deg,#10040b,#2c0816,#13060f)" }}
    >
      <header className="flex flex-col items-center justify-center py-6 border-b border-[#a98f63]/25 shrink-0">
        <p className="text-[10px] tracking-[0.5em] uppercase text-[#a98f63]">Legends</p>
        <h1 className="royal-heading mt-1 text-3xl md:text-4xl text-[#f5f0e8] leading-tight text-center">
          Kingdom of Brews
        </h1>
        <p className="mt-1 text-xs text-[#cbbca1] tracking-[0.3em] uppercase">Signature Menu</p>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-6 py-6">
        <section className="w-full max-w-6xl grid gap-5 lg:grid-cols-[1.3fr_0.7fr] mb-8">
          <div className="rounded-3xl border border-[#a98f63]/25 bg-[#1a0010]/65 p-6 backdrop-blur">
            <p className="text-xs tracking-[0.35em] uppercase text-[#a98f63]">Reference Documents</p>
            <h2 className="royal-heading mt-3 text-3xl text-[#f5f0e8]">Source files are organized now</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#d7cab6]">
              Your menu page is now driven from one content file. Replace the placeholder text in
              <span className="mx-1 text-[#f5f0e8]">`src/lib/menu-content.ts`</span>
              and drop final design assets into the folders shown here.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {sourceDocuments.map((document) => (
                <a
                  key={document.href}
                  href={document.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[#a98f63]/35 px-4 py-2 text-sm text-[#f5f0e8] transition-colors hover:bg-[#a98f63] hover:text-[#1a0010]"
                >
                  {document.label}
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-[#a98f63]/25 bg-[#f5f0e8] p-6 text-[#2b1511]">
            <p className="text-xs tracking-[0.35em] uppercase text-[#83043b]">Asset Folders</p>
            <div className="mt-4 space-y-4">
              {assetFolders.map((folder) => (
                <div key={folder.path}>
                  <p className="royal-heading text-xl text-[#3e001c]">{folder.label}</p>
                  <p className="mt-1 text-xs text-[#83043b]">{folder.path}</p>
                  <p className="mt-1 text-sm text-[#5b4638]">{folder.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div
          className="relative w-full shadow-2xl"
          style={{
            maxWidth: "min(960px, calc(100vw - 48px))",
            aspectRatio: "2 / 1.1",
          }}
        >
          <div
            className="absolute inset-0 rounded-lg"
            style={{
              boxShadow: "0 30px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(169,143,99,0.2)",
            }}
          />

          <div
            className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 z-10 pointer-events-none"
            style={{
              width: "3px",
              background: "linear-gradient(to bottom, #a98f63, #78552a, #a98f63)",
              boxShadow: "0 0 12px rgba(169,143,99,0.5)",
            }}
          />

          <div
            className="absolute inset-y-0 left-0 rounded-l-lg overflow-hidden"
            style={{ width: "calc(50% - 1.5px)" }}
          >
            {prev ? (
              <div
                className="w-full h-full"
                style={{
                  transform: flipping === "prev" ? "rotateY(-10deg)" : "rotateY(0deg)",
                  transformOrigin: "right center",
                  transition: "transform 0.4s ease",
                  perspective: "1200px",
                }}
              >
                <Page data={prev} pageNum={current} />
              </div>
            ) : (
              <div className="w-full h-full bg-[#1a0a12]" />
            )}
          </div>

          <div
            className="absolute inset-y-0 right-0 rounded-r-lg overflow-hidden"
            style={{ width: "calc(50% - 1.5px)" }}
          >
            <div
              className="w-full h-full"
              style={{
                transform: flipping === "next" ? "rotateY(10deg)" : "rotateY(0deg)",
                transformOrigin: "left center",
                transition: "transform 0.4s ease",
                perspective: "1200px",
              }}
            >
              <Page data={curr} pageNum={current + 1} />
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-6">
          <button
            onClick={goPrev}
            disabled={current <= 0 || !!flipping}
            className="rounded-full border border-[#a98f63]/60 px-7 py-2.5 text-sm text-[#cbbca1] hover:bg-[#a98f63] hover:text-[#1e0c0f] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            ← Prev
          </button>
          <span className="text-xs tracking-[0.3em] text-[#cbbca1] uppercase">
            {current + 1} / {menuBookPages.length}
          </span>
          <button
            onClick={goNext}
            disabled={current >= menuBookPages.length - 1 || !!flipping}
            className="rounded-full border border-[#a98f63]/60 px-7 py-2.5 text-sm text-[#cbbca1] hover:bg-[#a98f63] hover:text-[#1e0c0f] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Next →
          </button>
        </div>

        <div className="mt-4 flex gap-2">
          {menuBookPages.map((_, i) => (
            <button
              key={i}
              onClick={() => { if (!flipping) setCurrent(i); }}
              aria-label={`Go to page ${i + 1}`}
              className="rounded-full transition-all"
              style={{
                width: i === current ? "20px" : "6px",
                height: "6px",
                background: i === current ? "#a98f63" : "rgba(169,143,99,0.3)",
              }}
            />
          ))}
        </div>
      </main>
    </div>
  );
};
