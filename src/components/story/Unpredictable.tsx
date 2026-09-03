import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Screen } from "./Screen";
import { reveals } from "@/content/karen";

function RevealCard({ prompt, answer }: { prompt: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setOpen((o) => !o)}
      className="w-full rounded-sm border border-border bg-card/70 p-5 text-left backdrop-blur transition-colors hover:border-primary/60"
    >
      <p className="text-base leading-snug text-foreground/85">{prompt}</p>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.p
            key="answer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden text-base leading-snug text-primary"
          >
            <span className="mt-2 block">{answer}</span>
          </motion.p>
        ) : null}
      </AnimatePresence>
      <span className="mt-3 block text-[0.625rem] tracking-[0.3em] uppercase text-muted-foreground">
        {open ? "Hide" : "Reveal"}
      </span>
    </button>
  );
}

export function Unpredictable() {
  return (
    <Screen id="unpredictable" className="bg-ink">
      <div className="pointer-events-none absolute inset-0 opacity-50 glow-edge" />
      <div className="relative z-10 flex h-full flex-col gap-6 overflow-y-auto p-7 pt-24 pb-20">
        <h2 className="display text-[clamp(2rem,10vw,3.75rem)]">
          Things I haven't figured out yet
        </h2>
        <div className="flex flex-col gap-3">
          {reveals.map((r) => (
            <RevealCard key={r.prompt} {...r} />
          ))}
        </div>
      </div>
    </Screen>
  );
}
