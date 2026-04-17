"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export const RoyalButton = ({ href, children, variant = "primary", type = "button", onClick, disabled }: { href?: string; children: React.ReactNode; variant?: "primary" | "outline"; type?: "button" | "submit"; onClick?: () => void; disabled?: boolean; }) => {
  const base = "inline-flex items-center justify-center rounded-full px-5 py-3 text-xs uppercase tracking-[0.12em] font-semibold transition-all";
  const cls = variant === "primary"
    ? `${base} bg-[#83043b] text-[#f5f0e8] border border-[#a98f63] royal-shimmer disabled:opacity-50 disabled:cursor-not-allowed`
    : `${base} border border-[#a98f63] text-[#a98f63] hover:bg-[#a98f63] hover:text-[#24090d] disabled:opacity-50 disabled:cursor-not-allowed`;

  const content = <motion.span whileHover={{ scale: disabled ? 1 : 1.03 }} whileTap={{ scale: disabled ? 1 : 0.97 }} className={cls}>{children}</motion.span>;

  if (href) return <Link href={href}>{content}</Link>;
  return <button type={type} onClick={onClick} disabled={disabled}>{content}</button>;
};
