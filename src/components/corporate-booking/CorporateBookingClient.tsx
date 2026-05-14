"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function CorporateBookingClient() {
  const [formData, setFormData] = useState({
    company_name: "",
    contact_person: "",
    email: "",
    phone: "",
    event_type: "",
    event_date: "",
    expected_guests: "",
    budget: "",
    dietary_requirements: "",
    special_requests: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const payload = {
        form: "corporate_booking",
        submitted_at: new Date().toISOString(),
        ...formData,
      };

      const response = await fetch(
        "https://script.google.com/macros/d/AKfycby64nKTazKbXp75sRf9r3WG05wSMX1HFmECBvlk4gKLTQS8IjXNicdcZnCfScL5hm9NUQ/usercontent",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      setSubmitStatus("success");
      setFormData({
        company_name: "",
        contact_person: "",
        email: "",
        phone: "",
        event_type: "",
        event_date: "",
        expected_guests: "",
        budget: "",
        dietary_requirements: "",
        special_requests: "",
      });
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="px-6 py-16 max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="royal-heading text-6xl mb-4">Corporate Booking</h1>
        <p className="text-[#cbbca1] text-lg mb-8">Host your corporate event at LEGENDS Microbrewery. Premium venue for team building, conferences, and corporate celebrations.</p>

        <form onSubmit={handleSubmit} className="ornamental-border rounded-2xl p-8 bg-[#1a0010]/80 space-y-6">
          {submitStatus === "success" ? (
            <div className="text-center py-12">
              <p className="royal-heading text-3xl text-[#a98f63] mb-3">Booking Request Received</p>
              <p className="text-[#cbbca1] mb-6">Thank you! Our team will contact you shortly to discuss your event details.</p>
              <button
                type="button"
                onClick={() => setSubmitStatus("idle")}
                className="px-6 py-2 rounded-full border border-[#a98f63] text-[#a98f63] hover:bg-[#a98f63] hover:text-[#24090d] transition-colors"
              >
                Submit Another Booking
              </button>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 gap-4">
                <input required name="company_name" placeholder="Company Name" value={formData.company_name} onChange={handleChange} disabled={isSubmitting} className="w-full px-4 py-3 rounded-lg bg-[#2d1020] border border-[#a98f63]/35 text-[#f5f0e8] placeholder-[#a98f63]/50 disabled:opacity-50 focus:outline-none focus:border-[#a98f63]" />
                <input required name="contact_person" placeholder="Contact Person" value={formData.contact_person} onChange={handleChange} disabled={isSubmitting} className="w-full px-4 py-3 rounded-lg bg-[#2d1020] border border-[#a98f63]/35 text-[#f5f0e8] placeholder-[#a98f63]/50 disabled:opacity-50 focus:outline-none focus:border-[#a98f63]" />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input required type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} disabled={isSubmitting} className="w-full px-4 py-3 rounded-lg bg-[#2d1020] border border-[#a98f63]/35 text-[#f5f0e8] placeholder-[#a98f63]/50 disabled:opacity-50 focus:outline-none focus:border-[#a98f63]" />
                <input required type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} disabled={isSubmitting} className="w-full px-4 py-3 rounded-lg bg-[#2d1020] border border-[#a98f63]/35 text-[#f5f0e8] placeholder-[#a98f63]/50 disabled:opacity-50 focus:outline-none focus:border-[#a98f63]" />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <select required name="event_type" value={formData.event_type} onChange={handleChange} disabled={isSubmitting} className="w-full px-4 py-3 rounded-lg bg-[#2d1020] border border-[#a98f63]/35 text-[#f5f0e8] disabled:opacity-50 focus:outline-none focus:border-[#a98f63]">
                  <option value="">Select Event Type</option>
                  <option>Team Building</option>
                  <option>Conference</option>
                  <option>Product Launch</option>
                  <option>Corporate Dinner</option>
                  <option>Other</option>
                </select>
                <input required type="date" name="event_date" value={formData.event_date} onChange={handleChange} disabled={isSubmitting} className="w-full px-4 py-3 rounded-lg bg-[#2d1020] border border-[#a98f63]/35 text-[#f5f0e8] disabled:opacity-50 focus:outline-none focus:border-[#a98f63]" />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input required type="number" name="expected_guests" placeholder="Expected Guests" value={formData.expected_guests} onChange={handleChange} disabled={isSubmitting} className="w-full px-4 py-3 rounded-lg bg-[#2d1020] border border-[#a98f63]/35 text-[#f5f0e8] placeholder-[#a98f63]/50 disabled:opacity-50 focus:outline-none focus:border-[#a98f63]" />
                <select required name="budget" value={formData.budget} onChange={handleChange} disabled={isSubmitting} className="w-full px-4 py-3 rounded-lg bg-[#2d1020] border border-[#a98f63]/35 text-[#f5f0e8] disabled:opacity-50 focus:outline-none focus:border-[#a98f63]">
                  <option value="">Select Budget Range</option>
                  <option>₹50k - ₹1L</option>
                  <option>₹1L - ₹5L</option>
                  <option>₹5L - ₹10L</option>
                  <option>₹10L+</option>
                </select>
              </div>

              <textarea name="dietary_requirements" placeholder="Dietary Requirements" value={formData.dietary_requirements} onChange={handleChange} disabled={isSubmitting} rows={3} className="w-full px-4 py-3 rounded-lg bg-[#2d1020] border border-[#a98f63]/35 text-[#f5f0e8] placeholder-[#a98f63]/50 disabled:opacity-50 focus:outline-none focus:border-[#a98f63]" />

              <textarea required name="special_requests" placeholder="Special Requests" value={formData.special_requests} onChange={handleChange} disabled={isSubmitting} rows={3} className="w-full px-4 py-3 rounded-lg bg-[#2d1020] border border-[#a98f63]/35 text-[#f5f0e8] placeholder-[#a98f63]/50 disabled:opacity-50 focus:outline-none focus:border-[#a98f63]" />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-[#a98f63] to-[#cbbca1] text-[#2a1200] font-bold uppercase tracking-[0.12em] disabled:opacity-50 hover:shadow-lg transition-all"
              >
                {isSubmitting ? "Submitting..." : "Submit Booking Request"}
              </button>

              {submitStatus === "error" && (
                <p className="text-red-400 text-center">Error submitting form. Please try again.</p>
              )}
            </>
          )}
        </form>
      </motion.div>
    </div>
  );
}
