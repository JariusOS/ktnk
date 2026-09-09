import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { chapters, observations } from "@/content/karen";
import { Opening } from "./Opening";
import { ObservationScreen } from "./ObservationScreen";
import { KarenIndex } from "./KarenIndex";
import { ChatArchive } from "./ChatArchive";
import { Theories } from "./Theories";
import { VersusSlider } from "./VersusSlider";
import { Nod } from "./Nod";
import { OneThing } from "./OneThing";
import { VolTwo } from "./VolTwo";
import { Closing } from "./Closing";
import { Secret } from "./Secret";

const last = chapters.length - 1;

export function StoryShell() {
  const [{ index, dir }, setState] = useState({ index: 0, dir: 1 });
  const [secret, setSecret] = useState(false);

  const goTo = useCallback((next: number) => {
    setState((prev) => {
      const clamped = Math.min(Math.max(next, 0), last);
      if (clamped === prev.index) return prev;
      return { index: clamped, dir: clamped > prev.index ? 1 : -1 };
    });
  }, []);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    const found = chapters.findIndex((c) => c.id === hash);
    if (found > 0) setState({ index: found, dir: 1 });
  }, []);

  useEffect(() => {
    window.history.replaceState(null, "", `#${chapters[index]!.id}`);
  }, [index]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = document.activeElement;
      if (el instanceof HTMLTextAreaElement || el instanceof HTMLInputElement) return;
      if (e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === "PageDown") {
        e.preventDefault();
        goTo(index + 1);
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        goTo(index - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goTo, index]);

  const screens = [
    <Opening key="open" onNext={() => goTo(1)} />,
    ...observations.map((o, i) => (
      <ObservationScreen
        key={o.id}
        observation={o}
        index={i}
        onNext={() => goTo(2 + i)}
      />
    )),
    <KarenIndex key="index" onNext={() => goTo(8)} />,
    <ChatArchive key="chat" onNext={() => goTo(9)} />,
    <Theories key="theories" onNext={() => goTo(10)} />,
    <VersusSlider key="versus" onNext={() => goTo(11)} />,
    <Nod key="nod" onNext={() => goTo(12)} />,
    <OneThing key="one-thing" onNext={() => goTo(13)} />,
    <VolTwo key="vol-02" onNext={() => goTo(14)} />,
    <Closing key="close" onSecret={() => setSecret(true)} />,
  ];

  const progress = ((index + 1) / chapters.length) * 100;

  return (
    <>
      <main className="relative h-dvh w-full overflow-hidden bg-ink">
        <AnimatePresence initial={false} mode="wait" custom={dir}>
          <motion.div
            key={chapters[index]!.id}
            custom={dir}
            initial={{ opacity: 0, y: dir > 0 ? 60 : -60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: dir > 0 ? -60 : 60 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            drag="y"
            dragDirectionLock
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.12}
            onDragEnd={(_, info) => {
              if (info.offset.y < -90) goTo(index + 1);
              else if (info.offset.y > 90) goTo(index - 1);
            }}
            className="absolute inset-0"
          >
            {screens[index]}
          </motion.div>
        </AnimatePresence>
      </main>

      <div className="pointer-events-none fixed inset-x-0 top-0 z-40 h-[2px] bg-foreground/10">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent transition-[width] duration-700 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {index > 0 ? (
        <button
          type="button"
          onClick={() => goTo(index - 1)}
          aria-label="Go back"
          className="fixed top-3 left-3 z-40 flex h-11 w-11 items-center justify-center rounded-full text-foreground/50 transition-colors hover:text-foreground"
        >
          ←
        </button>
      ) : null}

      <span className="pointer-events-none fixed top-5 right-5 z-40 text-[0.5625rem] tracking-[0.3em] uppercase text-muted-foreground">
        {String(index + 1).padStart(2, "0")} /{" "}
        {String(chapters.length).padStart(2, "0")}
      </span>

      <AnimatePresence>
        {secret ? <Secret onClose={() => setSecret(false)} /> : null}
      </AnimatePresence>
    </>
  );
}
