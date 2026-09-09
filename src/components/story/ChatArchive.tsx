import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Screen, CtaButton, Hint } from "./Screen";
import { chatThreads, photos } from "@/content/karen";

function Ticks() {
  return (
    <svg viewBox="0 0 18 12" className="h-3 w-4 text-primary" fill="none">
      <path
        d="M1 6.5 4.2 10 10.5 2.5M7.5 8.6 8.8 10 15.5 2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Typing() {
  return (
    <div className="flex w-fit items-center gap-1 rounded-2xl rounded-bl-md border border-border bg-card/70 px-4 py-3">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          animate={{ opacity: [0.25, 1, 0.25] }}
          transition={{ duration: 1.1, repeat: Infinity, delay: i * 0.18 }}
          className="h-1.5 w-1.5 rounded-full bg-lavender"
        />
      ))}
    </div>
  );
}

export function ChatArchive({ onNext }: { onNext: () => void }) {
  const [i, setI] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const thread = chatThreads[i]!;
  const last = i === chatThreads.length - 1;

  const advance = () => {
    if (!revealed) {
      setRevealed(true);
      return;
    }
    if (last) {
      onNext();
      return;
    }
    setRevealed(false);
    setI((n) => n + 1);
  };

  return (
    <Screen id="chat">
      <div className="pointer-events-none absolute inset-0 opacity-50 glow-edge" />
      <div className="relative z-10 flex h-full flex-col gap-5 p-6 pb-24">
        <div className="flex flex-col gap-1">
          <p className="eyebrow">Archive</p>
          <h2 className="display text-[clamp(1.6rem,7.5vw,2.5rem)] leading-[1.05]">
            Things you actually said
          </h2>
        </div>

        <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-3xl border border-border bg-card/45 backdrop-blur-xl">
          <div className="flex items-center gap-3 border-b border-border/70 px-4 py-3">
            <img
              src={photos.polo.src}
              alt={photos.polo.alt}
              className="h-9 w-9 rounded-full object-cover object-[50%_22%] ring-1 ring-primary/40"
            />
            <div className="flex flex-col">
              <span className="text-sm text-foreground/90">Karen</span>
              <span className="text-[0.625rem] tracking-[0.2em] uppercase text-muted-foreground">
                {thread.label}
              </span>
            </div>
          </div>

          <div className="flex min-h-0 flex-1 flex-col justify-end gap-2.5 overflow-y-auto p-4">
            <AnimatePresence mode="popLayout">
              {!revealed ? (
                <motion.div
                  key={`typing-${thread.id}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <Typing />
                </motion.div>
              ) : (
                <>
                  {thread.messages.map((m, mi) => (
                    <motion.div
                      key={`${thread.id}-${mi}`}
                      initial={{ opacity: 0, y: 18, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{
                        delay: mi * 0.45,
                        duration: 0.45,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="max-w-[86%] rounded-2xl rounded-bl-md border border-primary/25 bg-primary/15 px-4 py-2.5"
                    >
                      <p className="text-[0.95rem] leading-snug text-foreground">
                        {m}
                      </p>
                      <div className="mt-1 flex items-center justify-end gap-1.5">
                        <span className="text-[0.5625rem] tracking-widest text-muted-foreground">
                          SEEN
                        </span>
                        <Ticks />
                      </div>
                    </motion.div>
                  ))}
                  <motion.p
                    key={`${thread.id}-note`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: thread.messages.length * 0.45 + 0.35,
                      duration: 0.6,
                    }}
                    className="serif mt-3 max-w-[92%] self-end text-right text-base leading-snug text-lavender"
                  >
                    {thread.note}
                  </motion.p>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Hint>
            {String(i + 1).padStart(2, "0")} /{" "}
            {String(chatThreads.length).padStart(2, "0")}
          </Hint>
          <CtaButton onClick={advance} variant={revealed ? "solid" : "ghost"}>
            {revealed ? (last ? "Continue →" : "Next →") : "Uncover →"}
          </CtaButton>
        </div>
      </div>
    </Screen>
  );
}
