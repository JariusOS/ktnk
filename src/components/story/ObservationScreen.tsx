import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Screen, CtaButton, Hint } from "./Screen";
import { photos, type Observation } from "@/content/karen";

export function ObservationScreen({
  observation,
  index,
  onNext,
}: {
  observation: Observation;
  index: number;
  onNext: () => void;
}) {
  const [open, setOpen] = useState(false);
  const photo = photos[observation.photo];

  return (
    <Screen id={observation.id}>
      <motion.img
        src={photo.src}
        alt={photo.alt}
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ amount: 0.4 }}
        transition={{ duration: 2.4, ease: "easeOut" }}
        className={`absolute inset-0 h-full w-full ${
          observation.fit === "contain" ? "object-contain p-6" : "object-cover"
        } ${observation.focus}`}
      />
      <div className="absolute inset-0 bg-ink/55" />
      <div className="pointer-events-none absolute inset-0 frame-scrim" />

      {!open ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Reveal the evidence"
          className="absolute inset-0 z-10"
        />
      ) : null}

      <div className="pointer-events-none relative z-20 flex h-full flex-col justify-end gap-5 p-7 pb-28">
        <div className="flex items-baseline gap-3">
          <p className="eyebrow">
            {String(index + 1).padStart(2, "0")}
          </p>
          <p className="eyebrow text-primary">{observation.label}</p>
        </div>
        <h2 className="serif max-w-md text-[clamp(1.75rem,8vw,2.85rem)] leading-[1.08]">
          {observation.statement}
        </h2>

        <AnimatePresence mode="wait">
          {!open ? (
            <motion.div key="hint" exit={{ opacity: 0 }}>
              <Hint>Tap for the evidence</Hint>
            </motion.div>
          ) : (
            <motion.div
              key="card"
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-auto flex flex-col gap-4 rounded-2xl border border-border bg-card/85 p-5 backdrop-blur-md"
            >
              <Hint>Evidence</Hint>
              {observation.quote ? (
                <p className="serif border-l-2 border-primary/70 pl-4 text-xl leading-snug text-foreground">
                  “{observation.quote}”
                </p>
              ) : null}
              <p className="text-sm leading-relaxed text-foreground/85">
                {observation.detail}
              </p>
              <CtaButton className="w-fit" onClick={onNext}>
                Continue →
              </CtaButton>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Screen>
  );
}
