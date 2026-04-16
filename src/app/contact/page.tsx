"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { RoyalButton } from "@/components/ui/RoyalButton";

export default function ContactPage() {
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (formData: FormData) => {
    setLoading(true);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      subject: String(formData.get("subject") || ""),
      message: String(formData.get("message") || ""),
    };

    if (supabase) {
      await supabase.from("contact_submissions").insert(payload);
    }
    setDone(true);
    setLoading(false);
  };

  return (
    <div className="px-6 py-16 max-w-6xl mx-auto">
      <h1 className="royal-heading text-6xl">Contact</h1>
      <div className="grid lg:grid-cols-2 gap-8 mt-10">
        <form action={onSubmit} className="ornamental-border rounded-2xl p-6 bg-[#1a0010]/70 space-y-4">
          <input required name="name" placeholder="Name" className="w-full px-3 py-2 rounded-md bg-[#2d1020] border border-[#a98f63]/35" />
          <input required type="email" name="email" placeholder="Email" className="w-full px-3 py-2 rounded-md bg-[#2d1020] border border-[#a98f63]/35" />
          <input name="phone" placeholder="Phone" className="w-full px-3 py-2 rounded-md bg-[#2d1020] border border-[#a98f63]/35" />
          <select name="subject" className="w-full px-3 py-2 rounded-md bg-[#2d1020] border border-[#a98f63]/35"><option>General</option><option>Events</option><option>Partnership</option></select>
          <textarea required name="message" placeholder="Message" rows={5} className="w-full px-3 py-2 rounded-md bg-[#2d1020] border border-[#a98f63]/35" />
          <RoyalButton type="submit">{loading ? "Sending" : "Send Message"}</RoyalButton>
          {done ? <p className="text-[#a98f63]">Your message has been received, Legend.</p> : null}
        </form>
        <article className="ornamental-border rounded-2xl p-6 bg-[#12050d]">
          <p className="royal-heading text-3xl text-[#a98f63]">Visit Our Kingdom</p>
          <p className="mt-4">Sy. No. 16/2, Sy. No. 17/4 and 5, Panathur Main Road, Balagere, Varthur Hobli, Bengaluru - 560087</p>
          <p className="mt-2">+91 99999 99999</p>
          <p>support@legendsbrewery.in</p>
        </article>
      </div>
      <iframe title="map" className="w-full mt-8 h-80 rounded-2xl border border-[#a98f63]/35" src="https://www.google.com/maps?q=Panathur+Main+Road+Bengaluru&output=embed" loading="lazy" />
    </div>
  );
}
