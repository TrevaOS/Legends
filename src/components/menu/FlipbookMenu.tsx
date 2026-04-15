"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { beersData, featuredAmbience, menuSections } from "@/lib/data";

type PageData =
  | { kind: "cover" }
  | { kind: "section"; title: string; items: readonly string[]; pageNumber: number }
  | { kind: "beer" };

type TurnCommand = "display" | "size" | "destroy" | "next" | "previous";

type TurnOptions = {
  autoCenter: boolean;
  display: "single" | "double";
  elevation: number;
  gradients: boolean;
  duration: number;
  page: number;
  width: number;
  height: number;
  when: {
    turned: (_event: unknown, page: number) => void;
  };
};

type TurnApi = {
  turn: (options: TurnOptions) => void;
  turn: (command: TurnCommand, ...args: unknown[]) => void;
};

export const FlipbookMenu = () => {
  const bookRef = useRef<HTMLDivElement | null>(null);
  const bookApiRef = useRef<TurnApi | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const pages = useMemo<PageData[]>(
    () => [
      { kind: "cover" },
      ...menuSections.map((section, index) => ({
        kind: "section" as const,
        title: section.title,
        items: section.items,
        pageNumber: index + 2,
      })),
      { kind: "beer" },
    ],
    []
  );

  useEffect(() => {
    let mounted = true;
    let cleanup = () => {};

    const initFlipbook = async () => {
      const jqueryModule = await import("jquery");
      await import("turn.js");
      if (!mounted || !bookRef.current) return;

      const $ = jqueryModule.default as (element: HTMLDivElement) => TurnApi;
      const book = $(bookRef.current);
      bookApiRef.current = book;

      const applySizing = () => {
        const single = window.innerWidth < 1024;
        const width = single ? Math.min(window.innerWidth - 32, 420) : 1120;
        const height = single ? 680 : 760;
        book.turn("display", single ? "single" : "double");
        book.turn("size", width, height);
      };

      book.turn({
        autoCenter: true,
        display: window.innerWidth < 1024 ? "single" : "double",
        elevation: 48,
        gradients: true,
        duration: 900,
        page: 1,
        width: window.innerWidth < 1024 ? Math.min(window.innerWidth - 32, 420) : 1120,
        height: window.innerWidth < 1024 ? 680 : 760,
        when: {
          turned: (_event: unknown, page: number) => setCurrentPage(page),
        },
      });

      const onResize = () => applySizing();
      window.addEventListener("resize", onResize);
      cleanup = () => {
        window.removeEventListener("resize", onResize);
        try {
          book.turn("destroy");
        } catch {
          // Ignore teardown noise from turn.js when the component unmounts mid-transition.
        }
      };
    };

    initFlipbook();

    return () => {
      mounted = false;
      cleanup();
    };
  }, []);

  const turnPage = (direction: "next" | "previous") => {
    bookApiRef.current?.turn(direction);
  };

  return (
    <div className="menu-book-shell px-4 py-10 md:px-6 md:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.45em] text-[#c28a57]">Legends Menu Book</p>
          <h1 className="royal-heading mt-3 text-4xl text-[#fff4e8] md:text-6xl">Flip through the menu</h1>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-[#ead8c6] md:text-base">
            The menu now opens straight into the booklet without the extra source cards, welcome spread, or PDF download buttons.
          </p>
        </div>

        <div className="mb-6 flex items-center justify-between">
          <button
            type="button"
            onClick={() => turnPage("previous")}
            className="inline-flex items-center gap-2 rounded-full border border-[#d2a871]/45 px-4 py-2 text-sm text-[#fff4e8]"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </button>
          <p className="text-xs uppercase tracking-[0.35em] text-[#caa17b]">
            Page {currentPage} of {pages.length}
          </p>
          <button
            type="button"
            onClick={() => turnPage("next")}
            className="inline-flex items-center gap-2 rounded-full border border-[#d2a871]/45 px-4 py-2 text-sm text-[#fff4e8]"
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="menu-book-wrapper">
          <div ref={bookRef} className="menu-book">
            {pages.map((page, index) => (
              <div key={`${page.kind}-${index}`} className="menu-book-page">
                {page.kind === "cover" ? (
                  <div className="menu-book-paper menu-book-cover">
                    <img
                      src={featuredAmbience[0]}
                      alt="Legends ambience cover"
                      className="absolute inset-0 h-full w-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(82,15,25,0.18),rgba(82,15,25,0.72))]" />
                    <div className="relative flex h-full flex-col justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-[0.5em] text-[#f1c78d]">Kingdom of Brews</p>
                        <h2 className="royal-heading mt-6 text-5xl leading-[0.95] text-[#fff3e5] md:text-7xl">
                          Legends
                        </h2>
                        <p className="mt-4 max-w-sm text-sm leading-7 text-[#f6e8d7]">
                          A printed-style menu experience for the food and beer lineup at Legends.
                        </p>
                      </div>
                      <div className="rounded-[1.75rem] border border-[#deb17c]/50 bg-[#f5e7d6]/90 p-5 text-[#5f1f2b]">
                        <p className="text-xs uppercase tracking-[0.35em] text-[#8d3a46]">Featured this round</p>
                        <p className="royal-heading mt-3 text-2xl">Bar bites, grills, biryani, burgers, and dessert</p>
                      </div>
                    </div>
                  </div>
                ) : null}

                {page.kind === "section" ? (
                  <div className="menu-book-paper">
                    <div className="menu-book-scroll">
                      <p className="menu-book-kicker">Section {page.pageNumber - 1}</p>
                      <h2 className="royal-heading text-4xl text-[#7f2438]">{page.title}</h2>
                      <div className="mt-5 h-px bg-[linear-gradient(90deg,#b78b54,transparent)]" />
                      <ul className="mt-6 space-y-3 text-[#55352f]">
                        {page.items.map((item) => (
                          <li
                            key={item}
                            className="rounded-[1.1rem] border border-[#e3caa8] bg-[#fffaf4] px-4 py-3 text-sm leading-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="menu-book-footer">Legends menu book</p>
                  </div>
                ) : null}

                {page.kind === "beer" ? (
                  <div className="menu-book-paper">
                    <div className="menu-book-scroll">
                      <p className="menu-book-kicker">Beer Lineup</p>
                      <h2 className="royal-heading text-4xl text-[#7f2438]">Signature brews</h2>
                      <div className="mt-6 grid gap-4">
                        {beersData.map((beer) => (
                          <div key={beer.name} className="rounded-[1.25rem] border border-[#e3caa8] bg-[#fffaf4] p-4">
                            <div className="flex items-start gap-4">
                              <img src={beer.image} alt={beer.name} className="hidden h-20 w-20 rounded-2xl object-cover sm:block" />
                              <div>
                                <p className="royal-heading text-2xl text-[#5d1e2a]">{beer.name}</p>
                                <p className="mt-1 text-xs uppercase tracking-[0.28em] text-[#a2643a]">{beer.style}</p>
                                <p className="mt-3 text-sm leading-6 text-[#5f4037]">{beer.description}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
