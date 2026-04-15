"use client";

import Image from "next/image";
import { Download, ExternalLink } from "lucide-react";
import { brandAssets } from "@/lib/branding";

const menuFiles = [
  {
    title: "Food Menu 9",
    note: "Primary visual reference for the live menu page.",
    href: brandAssets.menuReference,
  },
  {
    title: "Legends Final Food Menu",
    note: "Detailed menu document kept as a second downloadable reference.",
    href: brandAssets.finalFoodMenu,
  },
  {
    title: "Beer Lineup",
    note: "Beer details document for brew-specific offerings.",
    href: "/assets/documents/beer/Beer lineup .pdf",
  },
] as const;

export const FlipbookMenu = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#3e001c_0%,#18040d_42%,#0e090b_100%)]">
      <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-10 md:py-14">
        <section className="grid gap-8 rounded-[2rem] border border-[#a98f63]/20 bg-[#14060d]/85 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur md:p-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.45em] text-[#a98f63]">Food Menu</p>
            <h1 className="royal-heading mt-4 text-4xl text-[#f5f0e8] md:text-6xl">
              Legends menu updated from your uploaded files
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#d9ccb8] md:text-base">
              Main branding now uses logo 0001, the browser icon uses logo 0009, the footer uses
              logo 0020, and logo 0015 is placed here as the supporting mark beside the live menu
              references.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={brandAssets.menuReference}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#a98f63] to-[#d2c1a0] px-5 py-3 text-sm font-semibold text-[#241108]"
              >
                <ExternalLink className="h-4 w-4" />
                Open Food Menu 9
              </a>
              <a
                href={brandAssets.finalFoodMenu}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#a98f63]/45 px-5 py-3 text-sm font-semibold text-[#f5f0e8]"
              >
                <Download className="h-4 w-4" />
                Download Final Food Menu
              </a>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-[1fr_0.8fr]">
            <div className="rounded-[1.75rem] border border-[#a98f63]/25 bg-[linear-gradient(180deg,#1a0710,#2c0816)] p-5">
              <div className="relative mx-auto aspect-square w-full max-w-[220px] overflow-hidden rounded-full border border-[#a98f63]/35 bg-[#251019] shadow-[0_0_40px_rgba(169,143,99,0.16)]">
                <Image
                  src={brandAssets.mainLogo}
                  alt="Legends main logo"
                  fill
                  sizes="220px"
                  className="object-cover"
                  priority
                />
              </div>
              <p className="mt-5 text-center text-xs uppercase tracking-[0.4em] text-[#a98f63]">
                Main Brand Mark
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-[#a98f63]/20 bg-[#f5f0e8] p-5 text-[#301317]">
              <div className="relative mx-auto aspect-square w-full max-w-[180px] overflow-hidden rounded-[1.5rem] border border-[#a98f63]/30 bg-white">
                <Image
                  src={brandAssets.secondaryMark}
                  alt="Legends secondary logo mark"
                  fill
                  sizes="180px"
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-center text-xs uppercase tracking-[0.35em] text-[#83043b]">
                Supporting Mark 0015
              </p>
              <p className="mt-3 text-center text-sm leading-6 text-[#5e4337]">
                Kept as the secondary signature mark on the menu page so it has a clear, suitable
                placement without competing with the main logo.
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="overflow-hidden rounded-[2rem] border border-[#a98f63]/20 bg-[#12070d] shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
            <div className="flex items-center justify-between border-b border-[#a98f63]/15 px-5 py-4 text-sm text-[#e8e0d0]">
              <div>
                <p className="royal-heading text-2xl text-[#f5f0e8]">Menu 9 Preview</p>
                <p className="mt-1 text-xs uppercase tracking-[0.3em] text-[#a98f63]">
                  Embedded live reference
                </p>
              </div>
              <a
                href={brandAssets.menuReference}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#a98f63]/35 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#f5f0e8]"
              >
                Open PDF
              </a>
            </div>
            <object
              data={brandAssets.menuReference}
              type="application/pdf"
              className="h-[75vh] min-h-[720px] w-full bg-white"
            >
              <div className="flex h-full min-h-[500px] flex-col items-center justify-center gap-4 p-8 text-center text-[#f5f0e8]">
                <p className="royal-heading text-3xl text-[#a98f63]">PDF preview is unavailable here</p>
                <a
                  href={brandAssets.menuReference}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-gradient-to-r from-[#a98f63] to-[#d2c1a0] px-5 py-3 text-sm font-semibold text-[#241108]"
                >
                  Open Food Menu 9
                </a>
              </div>
            </object>
          </div>

          <aside className="space-y-5">
            {menuFiles.map((file) => (
              <article
                key={file.href}
                className="rounded-[1.75rem] border border-[#a98f63]/20 bg-[#1a0a12]/85 p-5 text-[#f5f0e8]"
              >
                <p className="text-xs uppercase tracking-[0.35em] text-[#a98f63]">Document</p>
                <h2 className="royal-heading mt-3 text-2xl">{file.title}</h2>
                <p className="mt-3 text-sm leading-6 text-[#d9ccb8]">{file.note}</p>
                <a
                  href={file.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#d8bf91]"
                >
                  Open file
                  <ExternalLink className="h-4 w-4" />
                </a>
              </article>
            ))}
          </aside>
        </section>
      </main>
    </div>
  );
};
