"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { supabase } from "@/lib/supabase";
import { sendToSheet } from "@/lib/sheets";
import { RoyalButton } from "@/components/ui/RoyalButton";

const slots = ["12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM", "08:00 PM", "09:00 PM", "10:00 PM", "11:00 PM"];

export default function ReservationsPage() {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState("");
  const [time, setTime] = useState(slots[0]);
  const [guests, setGuests] = useState(2);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [reference, setReference] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const minDate = useMemo(() => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  }, []);

  const isTimeValid = useMemo(() => {
    if (!date || !time) return true;
    if (date !== minDate) return true;
    const [timeStr, period] = time.split(" ");
    const [hours, mins] = timeStr.split(":").map(Number);
    const slotHours = period === "PM" && hours !== 12 ? hours + 12 : hours === 12 && period === "AM" ? 0 : hours;
    const slotMinutes = mins;
    const now = new Date();
    const currentHours = now.getHours();
    const currentMinutes = now.getMinutes();
    return slotHours > currentHours || (slotHours === currentHours && slotMinutes > currentMinutes);
  }, [date, time, minDate]);

  const canContinue = useMemo(() => {
    if (step === 1) return Boolean(date) && date >= minDate;
    if (step === 2) return isTimeValid;
    if (step === 4) return Boolean(name && phone && email);
    return true;
  }, [step, date, minDate, isTimeValid, name, phone, email]);

  const confirm = async () => {
    if (submitting) return;
    setSubmitting(true);

    const now = new Date();
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    const formattedTimestamp = `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;

    const payload = {
      form: "reservation",
      date,
      time,
      guests,
      name,
      phone,
      email,
      notes,
      status: "pending",
      submitted_at: formattedTimestamp,
    };

    if (supabase) await supabase.from("reservations").insert(payload);
    const ref = await sendToSheet(payload);

    setReference(ref || "LGM-ERROR");
    setStep(5);
  };

  return (
    <div className="px-6 py-16 max-w-4xl mx-auto">
      <h1 className="royal-heading text-6xl">Book Your Table</h1>

      {/* Progress bar */}
      <div className="flex gap-2 mt-6">
        {[1, 2, 3, 4, 5].map((dot) => (
          <div
            key={dot}
            className={`h-2 flex-1 rounded-full transition-colors ${dot <= step ? "bg-[#a98f63]" : "bg-[#a98f63]/25"}`}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.section
          key={step}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          className="ornamental-border rounded-2xl p-6 mt-8 bg-[#1a0010]/70"
        >
          {step === 1 && (
            <div>
              <p className="royal-heading text-2xl">Select a Date</p>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                min={minDate}
                className="mt-4 px-3 py-2 bg-[#2d1020] border border-[#a98f63]/35 rounded-md text-[#f5f0e8]"
              />
            </div>
          )}

          {step === 2 && (
            <div>
              <p className="royal-heading text-2xl">Select a Time</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {slots.map((slot) => {
                  const [timeStr, period] = slot.split(" ");
                  const [hours, mins] = timeStr.split(":").map(Number);
                  const slotHours = period === "PM" && hours !== 12 ? hours + 12 : hours === 12 && period === "AM" ? 0 : hours;
                  const slotMinutes = mins;
                  const now = new Date();
                  const isDisabled = date === minDate && (slotHours < now.getHours() || (slotHours === now.getHours() && slotMinutes <= now.getMinutes()));

                  return (
                    <button
                      key={slot}
                      onClick={() => setTime(slot)}
                      disabled={isDisabled}
                      className={`px-4 py-2 rounded-full border transition-colors ${isDisabled ? "opacity-50 cursor-not-allowed border-[#a98f63]/20 text-[#a98f63]/50" : time === slot ? "bg-[#a98f63] text-[#2a1200] border-[#a98f63]" : "border-[#a98f63]/45 text-[#f5f0e8] hover:border-[#a98f63]"}`}
                    >
                      {slot}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <p className="royal-heading text-2xl">Party Size</p>
              <div className="mt-4 flex items-center gap-4">
                <button
                  onClick={() => setGuests((g) => Math.max(1, g - 1))}
                  className="h-10 w-10 rounded-full border border-[#a98f63]/45 text-[#f5f0e8] hover:border-[#a98f63] transition-colors"
                >
                  -
                </button>
                <span className="royal-heading text-3xl text-[#a98f63] w-10 text-center">{guests}</span>
                <button
                  onClick={() => setGuests((g) => Math.min(20, g + 1))}
                  className="h-10 w-10 rounded-full border border-[#a98f63]/45 text-[#f5f0e8] hover:border-[#a98f63] transition-colors"
                >
                  +
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-3">
              <p className="royal-heading text-2xl">Your Details</p>
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" className="w-full px-3 py-2 bg-[#2d1020] border border-[#a98f63]/35 rounded-md text-[#f5f0e8]" />
              <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number" className="w-full px-3 py-2 bg-[#2d1020] border border-[#a98f63]/35 rounded-md text-[#f5f0e8]" />
              <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full px-3 py-2 bg-[#2d1020] border border-[#a98f63]/35 rounded-md text-[#f5f0e8]" />
              <textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Special Requests (optional)" rows={3} className="w-full px-3 py-2 bg-[#2d1020] border border-[#a98f63]/35 rounded-md text-[#f5f0e8]" />
            </div>
          )}

          {step === 5 && (
            <div className="text-center py-6">
              <p className="royal-heading text-4xl text-[#a98f63]">Reservation Confirmed</p>
              <p className="mt-4 text-[#cbbca1]">Reference Number</p>
              <p className="royal-heading text-2xl mt-1 text-[#f5f0e8]">{reference}</p>
              <p className="mt-4 text-sm text-[#cbbca1]">We look forward to welcoming you to the Kingdom.</p>
            </div>
          )}

          <div className="mt-6 flex gap-3">
            {step > 1 && step < 5 && (
              <RoyalButton onClick={() => setStep((s) => s - 1)} variant="outline">Back</RoyalButton>
            )}
            {step < 4 && (
              <RoyalButton onClick={() => canContinue && setStep((s) => s + 1)}>Continue</RoyalButton>
            )}
            {step === 4 && (
              <RoyalButton onClick={confirm} disabled={submitting}>
              {submitting ? "Confirming..." : "Confirm Reservation"}
            </RoyalButton>
            )}
          </div>
        </motion.section>
      </AnimatePresence>
    </div>
  );
}
