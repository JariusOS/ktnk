import { useCallback, useEffect, useRef, useState } from "react";
import { sections } from "@/content/karen";
import { Cover } from "./Cover";
import { FirstImpression } from "./FirstImpression";
import { Contrasts } from "./Contrasts";
import { Questions } from "./Questions";
import { Unpredictable } from "./Unpredictable";
import { ToBeContinued } from "./ToBeContinued";

export function StoryShell() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const goTo = useCallback((index: number) => {
    const scroller = scrollerRef.current;
    const section = sections[index];
    if (!scroller || !section) return;
    const el = scroller.querySelector(`#${section.id}`);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const index = sections.findIndex((s) => s.id === entry.target.id);
          if (index >= 0) {
            setActive(index);
            window.history.replaceState(null, "", `#${sections[index]!.id}`);
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
    const index = sections.findIndex((s) => s.id === hash);
    if (index > 0) {
      const el = scrollerRef.current?.querySelector(`#${hash}`);
      el?.scrollIntoView({ block: "start" });
    }
  }, []);

  return (
    <main
      ref={scrollerRef}
      className="snap-story h-dvh overflow-y-scroll bg-ink"
    >
      <Cover onNext={() => goTo(1)} />
      <FirstImpression onNext={() => goTo(2)} />
      <Contrasts />
      <Questions />
      <Unpredictable />
      <ToBeContinued />

      <nav className="fixed top-1/2 right-3 z-30 flex -translate-y-1/2 flex-col gap-2.5">
        {sections.map((s, i) => (
          <button
            key={s.id}
            type="button"
            aria-label={s.label}
            aria-current={i === active}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === active ? "h-5 w-1.5 bg-primary" : "w-1.5 bg-foreground/30"
            }`}
          />
        ))}
      </nav>

      <div className="fixed inset-x-0 bottom-0 z-30 flex items-center justify-between px-6 py-4 text-[0.625rem] tracking-[0.3em] uppercase text-muted-foreground mix-blend-difference">
        <button
          type="button"
          onClick={() => goTo(Math.max(0, active - 1))}
          disabled={active === 0}
          className="disabled:opacity-25"
        >
          ← Back
        </button>
        <span>{String(active + 1).padStart(2, "0")} / 06</span>
        <button
          type="button"
          onClick={() => goTo(Math.min(sections.length - 1, active + 1))}
          disabled={active === sections.length - 1}
          className="disabled:opacity-25"
        >
          Next →
        </button>
      </div>
    </main>
  );
}
