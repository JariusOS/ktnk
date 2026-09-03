import { useCallback, useRef, useState } from "react";
import { motion } from "motion/react";
import { Screen } from "./Screen";
import { contrasts, photos } from "@/content/karen";

export function Contrasts() {
  const [split, setSplit] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setSplit(Math.min(94, Math.max(6, pct)));
  }, []);

  return (
    <Screen id="contrasts">
      <div
        ref={ref}
        className="absolute inset-0 touch-pan-y select-none"
        onPointerDown={(e) => {
          dragging.current = true;
          e.currentTarget.setPointerCapture(e.pointerId);
          setFromClientX(e.clientX);
        }}
        onPointerMove={(e) => {
          if (dragging.current) setFromClientX(e.clientX);
        }}
        onPointerUp={() => {
          dragging.current = false;
        }}
        onPointerCancel={() => {
          dragging.current = false;
        }}
      >
        <img
          src={photos.sideB.src}
          alt={photos.sideB.alt}
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - split}% 0 0)` }}
        >
          <img
            src={photos.sideA.src}
            alt={photos.sideA.alt}
            draggable={false}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-ink/45" />
        <div className="pointer-events-none absolute inset-0 frame-scrim" />

        <div
          className="absolute inset-y-0 w-px bg-foreground/70"
          style={{ left: `${split}%` }}
        >
          <div className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-foreground/60 bg-ink/70 text-xs tracking-widest backdrop-blur">
            ↔
          </div>
        </div>
      </div>

      <div className="pointer-events-none relative z-10 flex h-full flex-col justify-between p-7 pb-24">
        <div className="flex justify-between pt-14">
          <div style={{ opacity: split / 100 }} className="transition-opacity">
            <p className="eyebrow">{contrasts.a.label}</p>
            <div className="mt-2 display text-[clamp(1.5rem,7vw,2.5rem)]">
              {contrasts.a.lines.map((l) => (
                <p key={l}>{l}</p>
              ))}
            </div>
          </div>
          <div
            style={{ opacity: 1 - split / 100 }}
            className="text-right transition-opacity"
          >
            <p className="eyebrow">{contrasts.b.label}</p>
            <div className="mt-2 display text-[clamp(1.5rem,7vw,2.5rem)]">
              {contrasts.b.lines.map((l) => (
                <p key={l}>{l}</p>
              ))}
            </div>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="max-w-xs text-base leading-relaxed text-foreground/80"
        >
          There is probably more than one version of you.
          <span className="mt-3 block text-xs tracking-[0.24em] uppercase text-muted-foreground">
            Drag to see both
          </span>
        </motion.p>
      </div>
    </Screen>
  );
}
