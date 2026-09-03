import { motion } from "motion/react";
import { Screen } from "./Screen";
import { photos } from "@/content/karen";

export function ToBeContinued() {
  return (
    <Screen id="to-be-continued" className="bg-ink">
      <img
        src={photos.close.src}
        alt={photos.close.alt}
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-ink/70" />
      <div className="pointer-events-none absolute inset-0 opacity-60 glow-edge" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.4 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 flex h-full flex-col justify-end gap-5 p-7 pb-24"
      >
        <h2 className="display text-[clamp(2.25rem,12vw,4.5rem)]">
          Karen, in a few frames
          <span className="mt-3 block font-sans text-xs font-normal tracking-[0.34em] text-muted-foreground">
            Vol. 01
          </span>
        </h2>

        <p className="max-w-sm text-base leading-relaxed text-foreground/80">
          Apparently, six frames weren't enough.
        </p>

        <button
          type="button"
          disabled
          className="inline-flex w-fit items-center gap-3 border-b border-primary/60 pb-1 text-sm tracking-[0.22em] uppercase text-primary/80"
        >
          Vol. 02 →
        </button>

        <p className="text-[0.625rem] tracking-[0.3em] uppercase text-muted-foreground">
          Still figuring you out.
        </p>
      </motion.div>
    </Screen>
  );
}
