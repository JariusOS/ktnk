import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Screen } from "./Screen";
import { questions } from "@/content/karen";

export function Questions() {
  const [index, setIndex] = useState(0);
  const last = index === questions.length - 1;

  return (
    <Screen id="questions" className="bg-ink">
      <div className="pointer-events-none absolute inset-0 opacity-60 glow-edge" />
      <button
        type="button"
        onClick={() => setIndex((i) => (i + 1) % questions.length)}
        className="relative z-10 flex h-full w-full flex-col justify-between p-7 pt-24 pb-16 text-left"
      >
        <p className="eyebrow">Things I'm still figuring out</p>

        <div className="flex-1 py-10">
          <AnimatePresence mode="wait">
            <motion.h2
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(1.75rem,8vw,3rem)] leading-[1.12] font-light tracking-tight"
            >
              {questions[index]}
            </motion.h2>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-between text-xs tracking-[0.24em] uppercase text-muted-foreground">
          <span>
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(questions.length).padStart(2, "0")}
          </span>
          <span className="text-foreground/70">
            {last ? "Start over ↺" : "Tap for the next one →"}
          </span>
        </div>
      </button>
    </Screen>
  );
}
