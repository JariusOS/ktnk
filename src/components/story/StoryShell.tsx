import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence } from "motion/react";
import { chapters, observations } from "@/content/karen";
import { Opening } from "./Opening";
import { ObservationScreen } from "./ObservationScreen";
import { KarenIndex } from "./KarenIndex";
import { ChatArchive } from "./ChatArchive";
import { Theories } from "./Theories";
import { VersusSlider } from "./VersusSlider";
import { OneThing } from "./OneThing";
import { VolTwo } from "./VolTwo";
import { Closing } from "./Closing";
import { Secret } from "./Secret";

export function StoryShell() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [secret, setSecret] = useState(false);

  const goTo = useCallback((index: number) => {
    const scroller = scrollerRef.current;
    const chapter = chapters[Math.min(Math.max(index, 0), chapters.length - 1)];
    if (!scroller || !chapter) return;
    scroller.querySelector(`#${chapter.id}`)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const index = chapters.findIndex((c) => c.id === entry.target.id);
          if (index >= 0) {
            setActive(index);
            window.history.replaceState(null, "", `#${chapters[index]!.id}`);
          }
        }
      },
      { root: scroller, threshold: 0.6 },
    );

    scroller.querySelectorAll("section[id]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    const index = chapters.findIndex((c) => c.id === hash);
    if (index > 0) {
      scrollerRef.current
        ?.querySelector(`#${hash}`)
        ?.scrollIntoView({ block: "start" });
    }
  }, []);

  const progress = ((active + 1) / chapters.length) * 100;

  return (
    <>
      <main ref={scrollerRef} className="snap-story h-dvh overflow-y-scroll bg-ink">
        <Opening onNext={() => goTo(1)} />
        {observations.map((o, i) => (
          <ObservationScreen
            key={o.id}
            observation={o}
            index={i}
            onNext={() => goTo(2 + i)}
          />
        ))}
        <KarenIndex onNext={() => goTo(5)} />
        <TwoSides onNext={() => goTo(6)} />
        <YourTurn onNext={() => goTo(7)} />
        <Imagine onNext={() => goTo(8)} />
        <OneThing onNext={() => goTo(9)} />
        <VolTwo onNext={() => goTo(10)} />
        <Closing onSecret={() => setSecret(true)} />
      </main>

      <div className="pointer-events-none fixed inset-x-0 top-0 z-40 h-[2px] bg-foreground/10">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent transition-[width] duration-700 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {active > 0 ? (
        <button
          type="button"
          onClick={() => goTo(active - 1)}
          aria-label="Go back"
          className="fixed top-3 left-3 z-40 flex h-11 w-11 items-center justify-center rounded-full text-foreground/50 transition-colors hover:text-foreground"
        >
          ←
        </button>
      ) : null}

      <span className="pointer-events-none fixed top-5 right-5 z-40 text-[0.5625rem] tracking-[0.3em] uppercase text-muted-foreground">
        {String(active + 1).padStart(2, "0")} /{" "}
        {String(chapters.length).padStart(2, "0")}
      </span>

      <AnimatePresence>
        {secret ? <Secret onClose={() => setSecret(false)} /> : null}
      </AnimatePresence>
    </>
  );
}
