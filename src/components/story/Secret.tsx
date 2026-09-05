import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CtaButton } from "./Screen";

export function Secret({ onClose }: { onClose: () => void }) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const a = window.setTimeout(() => setStage(1), 1200);
    const b = window.setTimeout(() => setStage(2), 3200);
    return () => {
      window.clearTimeout(a);
      window.clearTimeout(b);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-black px-8 text-center"
    >
      <AnimatePresence mode="wait">
        {stage >= 1 ? (
          <motion.p
            key="found"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="serif text-[clamp(1.5rem,7vw,2.25rem)] leading-tight"
          >
            You found the unnecessary section.
          </motion.p>
        ) : null}
      </AnimatePresence>

      {stage >= 2 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center gap-5"
        >
          <p className="text-sm tracking-[0.24em] uppercase text-muted-foreground">
            I have one confession.
          </p>
          {stage >= 3 ? (
            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.2 }}
              className="flex flex-col items-center gap-5"
            >
              <p className="serif text-[clamp(1.3rem,6vw,1.9rem)] leading-snug">
                I was definitely more nervous about making this than I planned
                to be.
              </p>
              <p className="text-sm text-foreground/65">
                So naturally I built an app instead of just saying that.
              </p>
              <CtaButton variant="ghost" onClick={onClose}>
                Back →
              </CtaButton>
            </motion.div>
          ) : (
            <CtaButton onClick={() => setStage(3)}>Reveal →</CtaButton>
          )}
        </motion.div>
      ) : null}
    </motion.div>
  );
}
