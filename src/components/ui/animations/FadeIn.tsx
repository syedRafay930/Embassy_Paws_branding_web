"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/utils/cn";

export type FadeInDirection = "up" | "down" | "left" | "right" | "none";

interface FadeInProps {
  children: ReactNode;
  direction?: FadeInDirection;
  delay?: number;
  duration?: number;
  className?: string;
  distance?: number;
  id?: string;
}

export function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  className,
  distance = 30,
  id,
}: FadeInProps) {
  const getVariants = () => {
    switch (direction) {
      case "up":
        return { hidden: { opacity: 0, y: distance }, visible: { opacity: 1, y: 0 } };
      case "down":
        return { hidden: { opacity: 0, y: -distance }, visible: { opacity: 1, y: 0 } };
      case "left":
        return { hidden: { opacity: 0, x: distance }, visible: { opacity: 1, x: 0 } };
      case "right":
        return { hidden: { opacity: 0, x: -distance }, visible: { opacity: 1, x: 0 } };
      case "none":
      default:
        return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
    }
  };

  return (
    <motion.div
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 1, 0.5, 1], // Custom premium bezier curve
      }}
      variants={getVariants()}
      className={cn("w-full", className)}
    >
      {children}
    </motion.div>
  );
}
