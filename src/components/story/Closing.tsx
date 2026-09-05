import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Screen, CtaButton } from "./Screen";
import { photos } from "@/content/karen";

export function Closing({ onSecret }: { onSecret: () => void }) {
  const [closed, setClosed] = useState(false);

  return (
    <Screen id="close">
      <img
        src={photos.close.src}
        alt={photos.close.alt}
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-ink/75" />
      <div className="pointer-events-none absolute inset-0 opacity-50 glow-edge" />

      <AnimatePresence mode="wait">
        {closed ? (
          <motion.div
            key="bye"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4 }}
            className="relative z-10 flex h-full items-center justify-center"
          >
            <p className="serif text-[clamp(1.8rem,9vw,3rem)]">See you soon.</p>
          </motion.div>
        ) : (
          <motion.div
            key="end"
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 1 }}
            className="relative z-10 flex h-full flex-col justify-end gap-5 p-7 pb-28"
          >
            <h2 className="display text-[clamp(2.75rem,17vw,5.5rem)]">
              Karen
              <span className="mt-3 block font-sans text-[0.625rem] font-normal tracking-[0.34em] text-muted-foreground">
                Vol. 01
              </span>
            </h2>
            <p className="serif text-[clamp(1.4rem,6.5vw,2rem)] leading-tight">
              Still figuring you out.
            </p>
            <p className="text-sm text-foreground/65">
              And that's probably the best part.
            </p>
            <div className="flex items-center gap-4">
              <CtaButton onClick={() => setClosed(true)}>Close</CtaButton>
              <button
                type="button"
                aria-label="✦"
                onClick={onSecret}
                className="p-3 text-xs text-foreground/25 transition-colors hover:text-primary"
              >
                ✦
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Screen>
  );
}
