"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { supabase } from "@/lib/supabase";
import { RoyalButton } from "@/components/ui/RoyalButton";

const slots = ["12:00", "13:00", "14:00", "19:00", "20:00", "21:00"];

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

  const canContinue = useMemo(() => {
    if (step === 1) return Boolean(date);
    if (step === 4) return Boolean(name && phone && email);
    return true;
  }, [step, date, name, phone, email]);

  const confirm = async () => {
    const payload = { date, time, guests, name, phone, email, notes, status: "pending" };
    if (supabase) await supabase.from("reservations").insert(payload);
    setReference(`LGM-${Date.now().toString().slice(-6)}`);
    setStep(5);
  };

  return (
    <div className="px-6 py-16 max-w-4xl mx-auto">
      <h1 className="royal-heading text-6xl">Book Your Table</h1>
      <div className="flex gap-2 mt-6">{[1,2,3,4,5].map((dot)=><div key={dot} className={`h-2 flex-1 rounded-full ${dot<=step?"bg-[#a98f63]":"bg-[#a98f63]/25"}`} />)}</div>
      <AnimatePresence mode="wait">
        <motion.section key={step} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} className="ornamental-border rounded-2xl p-6 mt-8 bg-[#1a0010]/70">
          {step===1 ? <div><p className="royal-heading text-2xl">Step 1: Select Date</p><input type="date" value={date} onChange={(e)=>setDate(e.target.value)} className="mt-4 px-3 py-2 bg-[#2d1020] border border-[#a98f63]/35 rounded-md" /></div> : null}
          {step===2 ? <div><p className="royal-heading text-2xl">Step 2: Select Time</p><div className="mt-4 flex flex-wrap gap-3">{slots.map((slot)=><button key={slot} onClick={()=>setTime(slot)} className={`px-4 py-2 rounded-full border ${time===slot?"bg-[#a98f63] text-[#2a1200]":"border-[#a98f63]/45"}`}>{slot}</button>)}</div></div> : null}
          {step===3 ? <div><p className="royal-heading text-2xl">Step 3: Party Size</p><div className="mt-4 flex items-center gap-3"><button onClick={()=>setGuests((g)=>Math.max(1,g-1))} className="px-3 py-2 border border-[#a98f63]/45 rounded-md">-</button><span>{guests}</span><button onClick={()=>setGuests((g)=>Math.min(20,g+1))} className="px-3 py-2 border border-[#a98f63]/45 rounded-md">+</button></div></div> : null}
          {step===4 ? <div className="space-y-3"><p className="royal-heading text-2xl">Step 4: Contact Info</p><input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name" className="w-full px-3 py-2 bg-[#2d1020] border border-[#a98f63]/35 rounded-md" /><input value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Phone" className="w-full px-3 py-2 bg-[#2d1020] border border-[#a98f63]/35 rounded-md" /><input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" className="w-full px-3 py-2 bg-[#2d1020] border border-[#a98f63]/35 rounded-md" /><textarea value={notes} onChange={(e)=>setNotes(e.target.value)} placeholder="Special Requests" className="w-full px-3 py-2 bg-[#2d1020] border border-[#a98f63]/35 rounded-md" /></div> : null}
          {step===5 ? <div className="text-center"><p className="royal-heading text-4xl text-[#a98f63]">Royal Seal Confirmed</p><p className="mt-3">Reference Number: {reference}</p></div> : null}
          <div className="mt-6 flex gap-3">
            {step > 1 && step < 5 ? <RoyalButton onClick={() => setStep((s) => s - 1)} variant="outline">Back</RoyalButton> : null}
            {step < 4 ? <RoyalButton onClick={() => canContinue && setStep((s) => s + 1)}>Continue</RoyalButton> : null}
            {step === 4 ? <RoyalButton onClick={confirm}>Confirm</RoyalButton> : null}
          </div>
        </motion.section>
      </AnimatePresence>
    </div>
  );
}
