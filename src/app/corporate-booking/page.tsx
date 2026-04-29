"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function CorporateBookingPage() {
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
        "https://script.google.com/macros/d/YOUR_DEPLOYMENT_ID/usercontent",
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

      setTimeout(() => setSubmitStatus("idle"), 3000);
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="px-6 py-16 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h1 className="royal-heading text-5xl md:text-6xl mb-4">Corporate Booking</h1>
        <p className="text-lg text-[#cbbca1] leading-relaxed">
          Plan your next corporate event at LEGENDS Microbrewery. From team gatherings to client entertainment, we offer the perfect blend of craft beer, gourmet food, and an unforgettable ambiance.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="ornamental-border rounded-2xl p-8 md:p-12 bg-[#1a0010]/80"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Company Name */}
            <div>
              <label className="block text-sm text-[#a98f63] uppercase tracking-[0.2em] mb-2">
                Company Name *
              </label>
              <input
                type="text"
                name="company_name"
                value={formData.company_name}
                onChange={handleChange}
                required
                className="w-full bg-[#13080a] border border-[#a98f63]/40 rounded-lg px-4 py-3 text-[#f5f0e8] placeholder-[#8b7355] focus:outline-none focus:border-[#a98f63] transition-colors"
                placeholder="Infosys, TCS, Accenture..."
              />
            </div>

            {/* Contact Person */}
            <div>
              <label className="block text-sm text-[#a98f63] uppercase tracking-[0.2em] mb-2">
                Contact Person *
              </label>
              <input
                type="text"
                name="contact_person"
                value={formData.contact_person}
                onChange={handleChange}
                required
                className="w-full bg-[#13080a] border border-[#a98f63]/40 rounded-lg px-4 py-3 text-[#f5f0e8] placeholder-[#8b7355] focus:outline-none focus:border-[#a98f63] transition-colors"
                placeholder="Raj Kumar, Priya Singh..."
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-[#a98f63] uppercase tracking-[0.2em] mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-[#13080a] border border-[#a98f63]/40 rounded-lg px-4 py-3 text-[#f5f0e8] placeholder-[#8b7355] focus:outline-none focus:border-[#a98f63] transition-colors"
                placeholder="contact@company.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm text-[#a98f63] uppercase tracking-[0.2em] mb-2">
                Phone *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full bg-[#13080a] border border-[#a98f63]/40 rounded-lg px-4 py-3 text-[#f5f0e8] placeholder-[#8b7355] focus:outline-none focus:border-[#a98f63] transition-colors"
                placeholder="9876543210"
              />
            </div>

            {/* Event Type */}
            <div>
              <label className="block text-sm text-[#a98f63] uppercase tracking-[0.2em] mb-2">
                Event Type *
              </label>
              <select
                name="event_type"
                value={formData.event_type}
                onChange={handleChange}
                required
                className="w-full bg-[#13080a] border border-[#a98f63]/40 rounded-lg px-4 py-3 text-[#f5f0e8] focus:outline-none focus:border-[#a98f63] transition-colors"
              >
                <option value="">Select event type</option>
                <option value="team_lunch">Team Lunch</option>
                <option value="team_dinner">Team Dinner</option>
                <option value="client_entertainment">Client Entertainment</option>
                <option value="conference">Conference</option>
                <option value="product_launch">Product Launch</option>
                <option value="award_ceremony">Award Ceremony</option>
                <option value="private_event">Private Event</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Event Date */}
            <div>
              <label className="block text-sm text-[#a98f63] uppercase tracking-[0.2em] mb-2">
                Preferred Date & Time *
              </label>
              <input
                type="datetime-local"
                name="event_date"
                value={formData.event_date}
                onChange={handleChange}
                required
                min={new Date().toISOString().slice(0, 16)}
                className="w-full bg-[#13080a] border border-[#a98f63]/40 rounded-lg px-4 py-3 text-[#f5f0e8] focus:outline-none focus:border-[#a98f63] transition-colors"
              />
            </div>

            {/* Expected Guests */}
            <div>
              <label className="block text-sm text-[#a98f63] uppercase tracking-[0.2em] mb-2">
                Expected Number of Guests *
              </label>
              <input
                type="number"
                name="expected_guests"
                value={formData.expected_guests}
                onChange={handleChange}
                required
                min="1"
                className="w-full bg-[#13080a] border border-[#a98f63]/40 rounded-lg px-4 py-3 text-[#f5f0e8] placeholder-[#8b7355] focus:outline-none focus:border-[#a98f63] transition-colors"
                placeholder="50"
              />
            </div>
          </div>

          {/* Dietary Requirements */}
          <div>
            <label className="block text-sm text-[#a98f63] uppercase tracking-[0.2em] mb-2">
              Dietary Requirements / Preferences
            </label>
            <textarea
              name="dietary_requirements"
              value={formData.dietary_requirements}
              onChange={handleChange}
              className="w-full bg-[#13080a] border border-[#a98f63]/40 rounded-lg px-4 py-3 text-[#f5f0e8] placeholder-[#8b7355] focus:outline-none focus:border-[#a98f63] transition-colors resize-none"
              rows={3}
              placeholder="e.g., Vegetarian options, gluten-free, alcohol-free..."
            />
          </div>

          {/* Special Requests */}
          <div>
            <label className="block text-sm text-[#a98f63] uppercase tracking-[0.2em] mb-2">
              Special Requests / Additional Notes
            </label>
            <textarea
              name="special_requests"
              value={formData.special_requests}
              onChange={handleChange}
              className="w-full bg-[#13080a] border border-[#a98f63]/40 rounded-lg px-4 py-3 text-[#f5f0e8] placeholder-[#8b7355] focus:outline-none focus:border-[#a98f63] transition-colors resize-none"
              rows={4}
              placeholder="Tell us about your event, any special arrangements needed, theme preferences, etc."
            />
          </div>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <div className="bg-green-900/30 border border-green-500/50 rounded-lg p-4 text-green-200">
              ✓ Your request has been submitted successfully. Our team will contact you soon!
            </div>
          )}

          {submitStatus === "error" && (
            <div className="bg-red-900/30 border border-red-500/50 rounded-lg p-4 text-red-200">
              ✗ There was an error submitting your request. Please try again.
            </div>
          )}

          {/* Submit Button */}
          <div className="flex gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 rounded-full bg-[#a98f63] text-[#200b0f] font-semibold py-3 px-6 hover:bg-[#cbbca1] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Request a Quote"}
            </button>
            <button
              type="reset"
              className="flex-1 rounded-full border border-[#a98f63] text-[#a98f63] font-semibold py-3 px-6 hover:bg-[#a98f63]/10 transition-colors"
            >
              Clear Form
            </button>
          </div>

          <p className="text-xs text-[#8b7355] text-center mt-6">
            For immediate assistance, contact our team at reservations@legendsbrewery.in or call +91 81239 79966.
          </p>
        </form>
      </motion.div>

      {/* Info Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-16 grid md:grid-cols-3 gap-8"
      >
        <div className="ornamental-border rounded-xl p-6 bg-[#1a0010]/50">
          <h3 className="royal-heading text-2xl text-[#a98f63] mb-3">Customizable Menus</h3>
          <p className="text-[#cbbca1] text-sm leading-relaxed">
            Tailor the food and beverage menu to suit your event's theme and budget.
          </p>
        </div>
        <div className="ornamental-border rounded-xl p-6 bg-[#1a0010]/50">
          <h3 className="royal-heading text-2xl text-[#a98f63] mb-3">Premium Venue</h3>
          <p className="text-[#cbbca1] text-sm leading-relaxed">
            Elegant ambiance perfect for corporate gatherings and special events.
          </p>
        </div>
        <div className="ornamental-border rounded-xl p-6 bg-[#1a0010]/50">
          <h3 className="royal-heading text-2xl text-[#a98f63] mb-3">Expert Team</h3>
          <p className="text-[#cbbca1] text-sm leading-relaxed">
            Our experienced team ensures seamless execution of your event.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
