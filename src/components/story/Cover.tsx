import { motion } from "motion/react";
import { Screen, CtaButton } from "./Screen";
import { photos } from "@/content/karen";

export function Cover({ onNext }: { onNext: () => void }) {
  return (
    <Screen id="cover">
      <motion.img
        src={photos.cover.src}
        alt={photos.cover.alt}
        initial={{ scale: 1.12, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 h-full w-full object-cover object-[60%_30%]"
      />
      <div className="absolute inset-0 frame-scrim" />
      <div className="pointer-events-none absolute inset-0 opacity-70 glow-edge mix-blend-screen" />

      <div className="relative z-10 mt-auto flex flex-col gap-6 p-7 pb-16">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="eyebrow"
        >
          Vol. 01 — still figuring you out
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="display text-[clamp(3.75rem,22vw,9rem)]"
        >
          Karen
          <span className="mt-3 block font-sans text-[clamp(1rem,4.5vw,1.5rem)] font-light normal-case tracking-tight text-foreground/75">
            in a few frames
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <CtaButton onClick={onNext}>Enter →</CtaButton>
        </motion.div>
      </div>
    </Screen>
  );
}
