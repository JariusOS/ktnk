import { motion } from "motion/react";
import { Screen, CtaButton } from "./Screen";
import { indexRows } from "@/content/karen";

export function KarenIndex({ onNext }: { onNext: () => void }) {
  return (
    <Screen id="index">
      <div className="pointer-events-none absolute inset-0 opacity-60 glow-edge" />
      <div className="relative z-10 flex h-full flex-col justify-center gap-8 p-7 pb-28">
        <div className="flex flex-col gap-2">
          <div className="flex items-baseline gap-3">
            <p className="eyebrow">05</p>
            <p className="eyebrow text-primary">Still figuring you out</p>
          </div>
          <h2 className="serif text-[clamp(1.75rem,8vw,2.85rem)] leading-[1.08]">
            I have theories. I don't have conclusions.
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {indexRows.map((row, i) => (
            <div key={row.label} className="flex flex-col gap-1.5">
              <div className="flex items-baseline justify-between">
                <span className="text-sm text-foreground/85">{row.label}</span>
                <span className="text-xs tracking-[0.2em] text-muted-foreground">
                  {row.value === null ? "∞" : `${row.value}/10`}
                </span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-foreground/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{
                    width: row.value === null ? "100%" : `${row.value * 10}%`,
                  }}
                  viewport={{ amount: 0.4 }}
                  transition={{
                    duration: 1,
                    delay: 0.15 * i,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <p className="serif text-2xl">System confidence: 63%</p>
          <p className="text-xs text-muted-foreground">
            The remaining 37% is probably the interesting part.
          </p>
        </div>

        <CtaButton className="w-fit" onClick={onNext}>
          Continue →
        </CtaButton>
      </div>
    </Screen>
  );
}
