import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Screen, CtaButton, Hint } from "./Screen";
import { photos, twoSides } from "@/content/karen";

export function TwoSides({ onNext }: { onNext: () => void }) {
  const [i, setI] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const card = twoSides[i]!;
  const last = i === twoSides.length - 1;

  const advance = () => {
    if (!flipped) {
      setFlipped(true);
      return;
    }
    if (last) {
      onNext();
      return;
    }
    setFlipped(false);
    setI((n) => n + 1);
  };

  return (
    <Screen id="two-sides">
      <AnimatePresence mode="wait">
        <motion.img
          key={card.photo}
          src={photos[card.photo].src}
          alt={photos[card.photo].alt}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 0.55, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-ink/55" />
      <div className="pointer-events-none absolute inset-0 frame-scrim" />

      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.25}
        onDragEnd={(_, info) => {
          if (Math.abs(info.offset.x) > 70) advance();
        }}
        onClick={advance}
        className="relative z-10 flex h-full cursor-pointer flex-col justify-end gap-5 p-7 pb-28"
      >
        <p className="eyebrow">
          Two sides · {String(i + 1).padStart(2, "0")} /{" "}
          {String(twoSides.length).padStart(2, "0")}
        </p>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${i}-${flipped}`}
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-3"
          >
            <span className="text-[0.625rem] tracking-[0.34em] uppercase text-primary">
              {flipped ? "But…" : "I think…"}
            </span>
            <p className="serif max-w-md text-[clamp(1.8rem,8.5vw,2.9rem)] leading-[1.08]">
              {flipped ? card.but : card.think}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-between">
          <Hint>{flipped ? "Swipe or tap" : "Tap to reveal"}</Hint>
          <CtaButton variant="ghost" onClick={advance}>
            {flipped ? (last ? "Continue →" : "Next →") : "Reveal →"}
          </CtaButton>
        </div>
      </motion.div>
    </Screen>
  );
}
