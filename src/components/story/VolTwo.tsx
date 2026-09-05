import { useState } from "react";
import { motion } from "motion/react";
import { Screen, CtaButton, Hint } from "./Screen";
import { volTwoOptions } from "@/content/karen";
import { useKarenStore } from "@/hooks/use-karen-store";

export function VolTwo({ onNext }: { onNext: () => void }) {
  const [picked, setPicked] = useState<string | null>(null);
  const { set } = useKarenStore();

  return (
    <Screen id="vol-02">
      <div className="pointer-events-none absolute inset-0 opacity-60 glow-edge" />
      <div className="relative z-10 flex h-full flex-col justify-center gap-7 p-7 pb-28">
        <div className="flex flex-col gap-2">
          <h2 className="display text-[clamp(3rem,18vw,6rem)]">Vol. 02</h2>
          <p className="eyebrow">Locked</p>
          <p className="text-sm text-foreground/75">I need more data.</p>
        </div>

        <div className="flex flex-col gap-2.5">
          {volTwoOptions.map((o, i) => (
            <motion.button
              key={o.key}
              type="button"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
              onClick={() => {
                setPicked(o.key);
                set("vol-02:pick", o.key);
              }}
              className={`flex min-h-[56px] items-center gap-4 rounded-2xl border p-4 text-left backdrop-blur transition-colors ${
                picked === o.key
                  ? "border-primary bg-primary/15"
                  : "border-border bg-card/60"
              }`}
            >
              <span className="text-xs tracking-[0.3em] text-muted-foreground">
                {o.key}
              </span>
              <span className="text-base text-foreground/90">{o.label}</span>
            </motion.button>
          ))}
        </div>

        <div className="flex flex-col gap-1">
          <Hint>Unlock condition</Hint>
          <p className="serif text-2xl text-primary">
            Spend more time together.
          </p>
        </div>

        <CtaButton className="w-fit" onClick={onNext}>
          Continue →
        </CtaButton>
      </div>
    </Screen>
  );
}
