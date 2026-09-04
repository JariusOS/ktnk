import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Screen, CtaButton } from "./Screen";

export function Opening({ onNext }: { onNext: () => void }) {
  const [stage, setStage] = useState(0);

  return (
    <Screen id="open">
      <div className="pointer-events-none absolute inset-0 opacity-70 glow-edge" />
      <button
        type="button"
        onClick={() => stage === 0 && setStage(1)}
        className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-8 px-8 text-center"
      >
        <AnimatePresence mode="wait">
          {stage === 0 ? (
            <motion.div
              key="a"
              exit={{ opacity: 0, filter: "blur(8px)" }}
              transition={{ duration: 0.7 }}
              className="flex flex-col items-center gap-7"
            >
              <motion.h1
                initial={{ opacity: 0, letterSpacing: "0.6em" }}
                animate={{ opacity: 1, letterSpacing: "0.34em" }}
                transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
                className="text-[clamp(1.75rem,9vw,3rem)] font-light tracking-[0.34em] uppercase"
              >
                Karen
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 1.2 }}
                className="serif text-[clamp(1.5rem,7vw,2.25rem)] leading-tight text-foreground/90"
              >
                I made you something.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.2, duration: 1 }}
                className="text-[0.625rem] tracking-[0.3em] uppercase text-muted-foreground"
              >
                Don't overthink it. Just tap.
              </motion.p>
            </motion.div>
          ) : (
            <motion.div
              key="b"
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1 }}
              className="flex flex-col items-center gap-6"
            >
              <p className="eyebrow">Vol. 01</p>
              <h2 className="serif text-[clamp(2rem,10vw,3.25rem)] leading-[1.05]">
                Things I've noticed.
              </h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 1 }}
                className="max-w-xs text-sm leading-relaxed text-foreground/70"
              >
                And a few things I'm still trying to figure out.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.8 }}
              >
                <CtaButton onClick={onNext}>Enter →</CtaButton>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </Screen>
  );
}
