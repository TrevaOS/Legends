"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { sendToSheet } from "@/lib/sheets";
import { RoyalButton } from "@/components/ui/RoyalButton";
import { venueDetails } from "@/lib/data";

export default function ContactPage() {
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const payload = {
      form: "contact",
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      subject: String(fd.get("subject") || ""),
      message: String(fd.get("message") || ""),
      submitted_at: new Date().toISOString(),
    };

    // Write to Supabase
    if (supabase) {
      await supabase.from("contact_submissions").insert(payload);
    }

    // Write to Google Sheets via Apps Script
    await sendToSheet(payload);

    setDone(true);
    setLoading(false);
  };

  return (
    <div className="px-6 py-16 max-w-6xl mx-auto">
      <h1 className="royal-heading text-6xl">Contact</h1>
      <div className="grid lg:grid-cols-2 gap-8 mt-10">
        <form onSubmit={onSubmit} className="ornamental-border rounded-2xl p-6 bg-[#1a0010]/70 space-y-4">
          <input required name="name" placeholder="Name" className="w-full px-3 py-2 rounded-md bg-[#2d1020] border border-[#a98f63]/35 text-[#f5f0e8]" />
          <input required type="email" name="email" placeholder="Email" className="w-full px-3 py-2 rounded-md bg-[#2d1020] border border-[#a98f63]/35 text-[#f5f0e8]" />
          <input name="phone" placeholder="Phone" className="w-full px-3 py-2 rounded-md bg-[#2d1020] border border-[#a98f63]/35 text-[#f5f0e8]" />
          <select name="subject" className="w-full px-3 py-2 rounded-md bg-[#2d1020] border border-[#a98f63]/35 text-[#f5f0e8]">
            <option>General</option>
            <option>Events</option>
            <option>Partnership</option>
          </select>
          <textarea required name="message" placeholder="Message" rows={5} className="w-full px-3 py-2 rounded-md bg-[#2d1020] border border-[#a98f63]/35 text-[#f5f0e8]" />
          <RoyalButton type="submit">{loading ? "Sending..." : "Send Message"}</RoyalButton>
          {done && <p className="text-[#a98f63]">Your message has been received. We will be in touch soon.</p>}
        </form>

        <div className="space-y-6">
          <article className="ornamental-border rounded-2xl p-6 bg-[#12050d] space-y-4">
            <p className="royal-heading text-3xl text-[#a98f63]">Visit Our Kingdom</p>

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

          <article className="ornamental-border rounded-2xl p-6 bg-[#12050d]">
            <p className="royal-heading text-xl text-[#a98f63] mb-4">Hours</p>
            <div className="space-y-3">
              {venueDetails.dailyHours.map((item) => (
                <div key={item.day} className="flex justify-between items-center text-sm border-b border-[#a98f63]/20 pb-2">
                  <span className="text-[#cbbca1] font-medium">{item.day}</span>
                  <span className="text-[#e8e0d0]">{item.hours}</span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
      <iframe
        title="map"
        className="w-full mt-8 h-80 rounded-2xl border border-[#a98f63]/35"
        referrerPolicy="no-referrer-when-downgrade"
        src={venueDetails.mapEmbedSrc}
        loading="lazy"
      />
    </div>
  );
}
