import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Screen, CtaButton, Hint } from "./Screen";
import { theories } from "@/content/karen";
import { useKarenStore } from "@/hooks/use-karen-store";

export function Theories({ onNext }: { onNext: () => void }) {
  const [i, setI] = useState(0);
  const [verdict, setVerdict] = useState<"yes" | "no" | null>(null);
  const [correcting, setCorrecting] = useState(false);
  const [note, setNote] = useState("");
  const [saved, setSaved] = useState(false);
  const { set } = useKarenStore();
  const theory = theories[i]!;
  const last = i === theories.length - 1;

  const next = () => {
    if (last) {
      onNext();
      return;
    }
    setVerdict(null);
    setCorrecting(false);
    setSaved(false);
    setNote("");
    setI((n) => n + 1);
  };

  return (
    <Screen id="theories">
      <div className="pointer-events-none absolute inset-0 opacity-60 glow-edge" />
      <div className="relative z-10 flex h-full flex-col justify-center gap-8 p-7 pb-28">
        <div className="flex flex-col gap-2">
          <p className="eyebrow">I have a theory</p>
          <h3 className="display text-[clamp(2.5rem,15vw,5rem)] leading-none text-primary/80">
            #{String(i + 1).padStart(2, "0")}
          </h3>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={theory.id}
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4"
          >
            <p className="serif text-[clamp(1.6rem,7.5vw,2.5rem)] leading-[1.1]">
              {theory.think}
            </p>
            <p className="serif text-[clamp(1.3rem,6vw,2rem)] leading-[1.15] text-lavender">
              {theory.but}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="flex flex-col gap-4">
          {verdict === null ? (
            <>
              <Hint>Verdict?</Hint>
              <div className="flex flex-wrap gap-3">
                <CtaButton
                  onClick={() => {
                    setVerdict("yes");
                    set(`${theory.id}:verdict`, "yes");
                  }}
                >
                  Accurate
                </CtaButton>
                <CtaButton
                  variant="ghost"
                  onClick={() => {
                    setVerdict("no");
                    set(`${theory.id}:verdict`, "no");
                  }}
                >
                  You're wrong
                </CtaButton>
              </div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col gap-3"
            >
              <p className="serif text-2xl text-primary">
                {verdict === "yes" ? "Noted." : "Excellent. That's useful information."}
              </p>

              {verdict === "no" && !saved ? (
                correcting ? (
                  <>
                    <textarea
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      placeholder="Go on..."
                      rows={3}
                      className="w-full resize-none rounded-xl border border-input bg-ink/60 p-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
                    />
                    <CtaButton
                      onClick={() => {
                        set(`${theory.id}:note`, note);
                        setSaved(true);
                      }}
                    >
                      Save for Vol. 02
                    </CtaButton>
                  </>
                ) : (
                  <CtaButton variant="ghost" className="w-fit" onClick={() => setCorrecting(true)}>
                    Correct the record →
                  </CtaButton>
                )
              ) : null}

              {saved ? (
                <p className="text-sm text-foreground/70">Saved for Vol. 02.</p>
              ) : null}

              <CtaButton className="w-fit" onClick={next}>
                {last ? "Continue →" : "Next theory →"}
              </CtaButton>
            </motion.div>
          )}
        </div>
      </div>
    </Screen>
  );
}
