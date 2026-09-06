"use client";

import { useEffect, useRef } from "react";
import { useInView, animate } from "framer-motion";

export function AnimatedCounter({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  // Number aur Suffix ("+", "k") ko extract karna
  const numericPart = parseFloat(value.replace(/[^0-9.]/g, ""));
  const suffix = value.replace(/[0-9.]/g, "");

  useEffect(() => {
    // Agar element view mein aaye toh animation start karein
    if (isInView && ref.current) {
      const controls = animate(0, numericPart, {
        duration: 2, // Animation kitne seconds chalay gi
        ease: "easeOut", // Smooth decelerating end
        onUpdate(value) {
          if (ref.current) {
            // Value update karte waqt comma aur suffix lagana
            ref.current.textContent = Intl.NumberFormat("en-US").format(Math.floor(value)) + suffix;
          }
        },
      });

      return () => controls.stop();
    }
  }, [isInView, numericPart, suffix]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}