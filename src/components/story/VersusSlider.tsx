import { useCallback, useRef, useState } from "react";
import { motion } from "motion/react";
import { Screen, CtaButton, Hint } from "./Screen";
import { photos, versus } from "@/content/karen";

export function VersusSlider({ onNext }: { onNext: () => void }) {
  const [pos, setPos] = useState(50);
  const areaRef = useRef<HTMLDivElement>(null);

  const move = useCallback((clientX: number) => {
    const rect = areaRef.current?.getBoundingClientRect();
    if (!rect) return;
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(92, Math.max(8, next)));
  }, []);

  return (
    <Screen id="versus">
      <div className="relative z-10 flex h-full flex-col gap-4 p-6 pb-24">
        <div className="flex flex-col gap-2">
          <h2 className="display text-[clamp(1.7rem,8vw,2.75rem)] leading-none">
            Karen vs Jarius
          </h2>
          <p className="max-w-sm text-xs leading-relaxed text-muted-foreground">
            I've been investigating you. Unfortunately, the evidence suggests I
            should investigate myself too.
          </p>
        </div>

        <div
          ref={areaRef}
          onPointerDown={(e) => {
            e.currentTarget.setPointerCapture(e.pointerId);
            move(e.clientX);
          }}
          onPointerMove={(e) => {
            if (e.buttons > 0) move(e.clientX);
          }}
          className="relative min-h-0 flex-1 touch-none overflow-hidden rounded-3xl border border-border select-none"
        >
          {/* Jarius side (base) */}
          <div className="absolute inset-0 bg-gradient-to-br from-ink via-card/70 to-ink" />
          <div className="absolute inset-0 flex flex-col justify-end gap-2 p-5 text-right">
            <p className="eyebrow text-lavender">Jarius</p>
            {versus.jarius.map((line) => (
              <p
                key={line}
                className="serif ml-auto max-w-[80%] text-[0.95rem] leading-snug text-foreground/85"
              >
                {line}
              </p>
            ))}
          </div>

          {/* Karen side (clipped) */}
          <div
            className="absolute inset-0"
            style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          >
            <img
              src={photos.pink.src}
              alt={photos.pink.alt}
              className="absolute inset-0 h-full w-full object-cover object-[45%_20%]"
            />
            <div className="absolute inset-0 bg-ink/60" />
            <div className="absolute inset-0 flex flex-col justify-end gap-2 p-5">
              <p className="eyebrow text-primary">Karen</p>
              {versus.karen.map((line) => (
                <p
                  key={line}
                  className="serif max-w-[80%] text-[0.95rem] leading-snug text-foreground"
                >
                  {line}
                </p>
              ))}
            </div>
          </div>

          {/* Handle */}
          <div
            className="pointer-events-none absolute inset-y-0 z-20 w-px bg-gradient-to-b from-transparent via-lavender to-transparent"
            style={{ left: `${pos}%` }}
          >
            <motion.div
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 2.4, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-lavender/60 bg-ink/80 text-[0.7rem] text-lavender backdrop-blur"
            >
              ⇄
            </motion.div>
          </div>

          <span className="absolute top-3 left-1/2 z-20 -translate-x-1/2">
            <Hint>Drag</Hint>
          </span>
        </div>

        <div className="flex items-end justify-between gap-4">
          <div className="flex flex-col gap-1">
            <p className="eyebrow">Compatibility assessment</p>
            <p className="serif text-2xl text-primary">Inconclusive</p>
            <p className="text-xs text-muted-foreground">
              Further investigation required. Fortunately, I have a few ideas
              for the next experiment.
            </p>
          </div>
          <CtaButton onClick={onNext}>Continue →</CtaButton>
        </div>
      </div>
    </Screen>
  );
}
