import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Screen, CtaButton, Hint } from "./Screen";
import { photos } from "@/content/karen";

export function Nod({ onNext }: { onNext: () => void }) {
  const [open, setOpen] = useState(false);

  return (
    <Screen id="nod">
      <img
        src={photos.knots.src}
        alt={photos.knots.alt}
        className="absolute inset-0 h-full w-full object-cover object-[50%_25%] opacity-40"
      />
      <div className="absolute inset-0 bg-ink/75" />
      <div className="pointer-events-none absolute inset-0 frame-scrim" />

      <div className="relative z-10 flex h-full flex-col justify-center gap-7 p-7 pb-28">
        <p className="eyebrow">The quiet part</p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="serif text-[clamp(1.8rem,8.5vw,2.9rem)] leading-[1.1]"
        >
          You told me things you didn't have to.
        </motion.h2>

        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key="reveal"
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.3, ease: "easeOut" }}
              className="flex flex-col gap-6"
            >
              <p className="serif text-[clamp(1.3rem,6vw,2rem)] leading-[1.2] text-foreground/85">
                They're not in here. They're not going anywhere else either.
              </p>
              <p className="text-sm leading-relaxed text-foreground/70">
                I just wanted you to know I'm still holding them carefully.
              </p>
              <CtaButton className="w-fit" onClick={onNext}>
                Continue →
              </CtaButton>
            </motion.div>
          ) : (
            <motion.div key="cta" exit={{ opacity: 0 }} className="flex flex-col gap-3">
              <CtaButton className="w-fit" onClick={() => setOpen(true)}>
                Reveal →
              </CtaButton>
              <Hint>Nothing private on screen</Hint>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Screen>
  );
}
