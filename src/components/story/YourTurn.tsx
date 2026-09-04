import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Screen, CtaButton } from "./Screen";
import { yourTurnQuestions } from "@/content/karen";
import { useKarenStore } from "@/hooks/use-karen-store";

export function YourTurn({ onNext }: { onNext: () => void }) {
  const [stage, setStage] = useState(-1);
  const [value, setValue] = useState("");
  const [justSaved, setJustSaved] = useState(false);
  const { set } = useKarenStore();
  const last = stage === yourTurnQuestions.length - 1;

  return (
    <Screen id="your-turn">
      <div className="pointer-events-none absolute inset-0 opacity-50 glow-edge" />
      <div className="relative z-10 flex h-full flex-col justify-center gap-7 p-7 pb-28">
        <AnimatePresence mode="wait">
          {stage < 0 ? (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.4 }}
              exit={{ opacity: 0, filter: "blur(8px)" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-5"
            >
              <p className="serif text-[clamp(1.6rem,7.5vw,2.4rem)] leading-tight text-foreground/80">
                Okay. Enough about what I think.
              </p>
              <h2 className="display text-[clamp(2.5rem,15vw,5rem)] text-primary">
                Your turn.
              </h2>
              <CtaButton className="w-fit" onClick={() => setStage(0)}>
                Continue →
              </CtaButton>
            </motion.div>
          ) : (
            <motion.div
              key={stage}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-5"
            >
              <p className="eyebrow">
                {String(stage + 1).padStart(2, "0")} /{" "}
                {String(yourTurnQuestions.length).padStart(2, "0")}
              </p>
              <h2 className="serif text-[clamp(1.7rem,8vw,2.75rem)] leading-[1.1]">
                {yourTurnQuestions[stage]}
              </h2>
              <textarea
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Go on..."
                rows={3}
                className="w-full resize-none rounded-xl border border-input bg-card/60 p-4 text-base text-foreground outline-none backdrop-blur placeholder:text-muted-foreground focus:border-primary"
              />
              <div className="flex items-center gap-4">
                <CtaButton
                  onClick={() => {
                    set(`your-turn:${stage}`, value);
                    setJustSaved(true);
                    setValue("");
                    window.setTimeout(() => {
                      setJustSaved(false);
                      if (last) onNext();
                      else setStage((s) => s + 1);
                    }, 900);
                  }}
                >
                  {last ? "Send →" : "Next →"}
                </CtaButton>
                <AnimatePresence>
                  {justSaved ? (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-xs text-primary"
                    >
                      Saved for Vol. 02.
                    </motion.span>
                  ) : null}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Screen>
  );
}
