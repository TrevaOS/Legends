"use client";

import { FlipbookMenu } from "@/components/menu/FlipbookMenu";
import { StrategicMenuView } from "@/components/menu/StrategicMenuView";

export default function MenuPage() {
  return (
    <>
      {/* Desktop - Flipbook View */}
      <div className="hidden md:block">
        <FlipbookMenu />
      </div>

      {/* Mobile - Strategic View with Beer Images */}
      <div className="md:hidden">
        <StrategicMenuView />
      </div>
    </>
  );
}
