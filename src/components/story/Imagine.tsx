import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Screen, CtaButton, Hint } from "./Screen";
import { imagineCards } from "@/content/karen";
import { useKarenStore } from "@/hooks/use-karen-store";

export function Imagine({ onNext }: { onNext: () => void }) {
  const [i, setI] = useState(0);
  const [idea, setIdea] = useState("");
  const { set } = useKarenStore();
  const last = i === imagineCards.length - 1;

  const advance = () => {
    if (last) onNext();
    else setI((n) => n + 1);
  };

  return (
    <Screen id="imagine">
      <div className="pointer-events-none absolute inset-0 opacity-50 glow-edge" />
      <div className="relative z-10 flex h-full flex-col justify-center gap-7 p-7 pb-28">
        <div className="flex items-baseline justify-between">
          <p className="eyebrow">Things we haven't done yet</p>
          <Hint>
            {String(i + 1).padStart(2, "0")} /{" "}
            {String(imagineCards.length).padStart(2, "0")}
          </Hint>
        </div>

        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.25}
          onDragEnd={(_, info) => {
            if (Math.abs(info.offset.x) > 70) advance();
          }}
          className="cursor-pointer"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => !last && advance()}
              className="rounded-3xl border border-border bg-card/70 p-7 backdrop-blur-md"
            >
              <p className="serif text-[clamp(1.6rem,7.5vw,2.4rem)] leading-[1.12]">
                {imagineCards[i]}
              </p>

              {last ? (
                <div className="mt-5 flex flex-col gap-3">
                  <textarea
                    value={idea}
                    onChange={(e) => setIdea(e.target.value)}
                    placeholder="Go on..."
                    rows={2}
                    className="w-full resize-none rounded-xl border border-input bg-ink/50 p-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
                  />
                  <CtaButton
                    className="w-fit"
                    onClick={() => {
                      set("imagine:idea", idea);
                      onNext();
                    }}
                  >
                    Save for Vol. 02
                  </CtaButton>
                </div>
              ) : null}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {!last ? <Hint>Swipe or tap for the next one</Hint> : null}
      </div>
    </Screen>
  );
}
