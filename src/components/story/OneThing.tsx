import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Screen, CtaButton, Hint } from "./Screen";

export function OneThing({ onNext }: { onNext: () => void }) {
  const [open, setOpen] = useState(false);

  return (
    <Screen id="one-thing">
      <div className="pointer-events-none absolute inset-0 opacity-40 glow-edge" />
      <div className="relative z-10 flex h-full flex-col justify-center gap-8 p-7 pb-28">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.4 }}
          transition={{ duration: 1.4 }}
          className="serif text-[clamp(1.9rem,9vw,3rem)] leading-[1.1]"
        >
          One thing I wasn't expecting.
        </motion.h2>

        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key="reveal"
              initial={{ opacity: 0, filter: "blur(12px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.6, ease: "easeOut" }}
              className="flex flex-col gap-7"
            >
              <p className="serif text-[clamp(1.4rem,6.5vw,2.1rem)] leading-[1.2] text-foreground/85">
                I didn't expect talking to you to become something I actually
                looked forward to.
              </p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 1.2 }}
                className="serif text-2xl text-primary"
              >
                So… here we are.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.6, duration: 1 }}
              >
                <CtaButton onClick={onNext}>Continue →</CtaButton>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div key="cta" exit={{ opacity: 0 }} className="flex flex-col gap-3">
              <CtaButton className="w-fit" onClick={() => setOpen(true)}>
                Reveal →
              </CtaButton>
              <Hint>No fireworks. Promise.</Hint>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Screen>
  );
}
