"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import Image from "next/image";

export default function HeroLogo() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 50, damping: 18 });
  const springY = useSpring(y, { stiffness: 50, damping: 18 });

  const rotateY = useTransform(springX, [-600, 600], [-12, 12]);
  const rotateX = useTransform(springY, [-400, 400], [8, -8]);

  const glowX = useTransform(springX, [-600, 600], [20, 80]);
  const glowY = useTransform(springY, [-400, 400], [20, 80]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      x.set(e.clientX - cx);
      y.set(e.clientY - cy);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  return (
    <div
      className="absolute inset-0 flex items-center justify-end pointer-events-none select-none overflow-hidden"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative translate-x-1/4 shrink-0"
      >
        <motion.div
          style={{
            background: useTransform(
              [glowX, glowY],
              ([lx, ly]) =>
                `radial-gradient(circle at ${lx}% ${ly}%, rgba(56,189,248,0.18), transparent 60%)`,
            ),
          }}
          className="absolute inset-0 blur-2xl pointer-events-none z-10"
        />
        <Image
          src="/images/logo.png"
          alt=""
          width={650}
          height={650}
          className="object-contain opacity-[0.06] drop-shadow-[0_0_60px_rgba(56,189,248,0.15)]"
          aria-hidden
        />
      </motion.div>
    </div>
  );
}
