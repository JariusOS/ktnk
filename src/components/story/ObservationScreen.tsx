import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Screen, CtaButton, Hint } from "./Screen";
import { photos, type Observation } from "@/content/karen";
import { useKarenStore } from "@/hooks/use-karen-store";

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
  const [verdict, setVerdict] = useState<"yes" | "no" | null>(null);
  const [note, setNote] = useState("");
  const [saved, setSaved] = useState(false);
  const { set } = useKarenStore();
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
        className={`absolute inset-0 h-full w-full object-cover ${observation.focus}`}
      />
      <div className="absolute inset-0 bg-ink/45" />
      <div className="pointer-events-none absolute inset-0 frame-scrim" />

      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Reveal the observation"
        className="absolute inset-0 z-10"
      />

      <div className="pointer-events-none relative z-20 flex h-full flex-col justify-end gap-5 p-7 pb-28">
        <p className="eyebrow">
          Observation {String(index + 1).padStart(2, "0")}
        </p>
        <h2 className="serif max-w-md text-[clamp(1.9rem,9vw,3rem)] leading-[1.06]">
          {observation.statement}
        </h2>

        <AnimatePresence mode="wait">
          {!open ? (
            <motion.div key="hint" exit={{ opacity: 0 }}>
              <Hint>Tap the photo</Hint>
            </motion.div>
          ) : (
            <motion.div
              key="card"
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-auto rounded-2xl border border-border bg-card/85 p-5 backdrop-blur-md"
            >
              <p className="text-base leading-relaxed text-foreground/90">
                {observation.detail}
              </p>

              {verdict === null ? (
                <div className="mt-5 flex flex-col gap-2">
                  <Hint>Accurate?</Hint>
                  <div className="flex flex-wrap gap-2">
                    <CtaButton
                      onClick={() => {
                        setVerdict("yes");
                        set(`${observation.id}:verdict`, "yes");
                      }}
                    >
                      Yes, obviously
                    </CtaButton>
                    <CtaButton
                      variant="ghost"
                      onClick={() => {
                        setVerdict("no");
                        set(`${observation.id}:verdict`, "no");
                      }}
                    >
                      You're wrong
                    </CtaButton>
                  </div>
                </div>
              ) : verdict === "yes" ? (
                <div className="mt-5 flex flex-col gap-4">
                  <p className="serif text-2xl text-primary">I knew it.</p>
                  <CtaButton onClick={onNext}>Continue →</CtaButton>
                </div>
              ) : (
                <div className="mt-5 flex flex-col gap-3">
                  <p className="serif text-2xl text-primary">Interesting.</p>
                  {saved ? (
                    <>
                      <p className="text-sm text-foreground/70">
                        Saved for Vol. 02.
                      </p>
                      <CtaButton onClick={onNext}>Continue →</CtaButton>
                    </>
                  ) : (
                    <>
                      <p className="text-sm text-foreground/80">
                        Tell me what I missed.
                      </p>
                      <textarea
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        placeholder="Go on..."
                        rows={3}
                        className="w-full resize-none rounded-xl border border-input bg-ink/60 p-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
                      />
                      <CtaButton
                        onClick={() => {
                          set(`${observation.id}:note`, note);
                          setSaved(true);
                        }}
                      >
                        Save for Vol. 02
                      </CtaButton>
                    </>
                  )}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Screen>
  );
}
