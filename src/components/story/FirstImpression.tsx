import { motion } from "motion/react";
import { Screen, CtaButton } from "./Screen";
import { observations, photos } from "@/content/karen";

const positions = [
  "left-6 top-[18%]",
  "right-6 top-[34%] text-right",
  "left-10 top-[50%]",
];

export function FirstImpression({ onNext }: { onNext: () => void }) {
  return (
    <Screen id="first-impression">
      <motion.img
        src={photos.firstImpression.src}
        alt={photos.firstImpression.alt}
        initial={{ scale: 1.08 }}
        whileInView={{ scale: 1 }}
        viewport={{ amount: 0.4 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 h-full w-full object-cover object-center opacity-80"
      />
      <div className="absolute inset-0 bg-ink/55" />
      <div className="absolute inset-0 frame-scrim" />

      <div className="relative z-10 h-full">
        {observations.map((word, i) => (
          <motion.p
            key={word}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.5 }}
            transition={{ delay: 0.25 + i * 0.25, duration: 0.7 }}
            className={`absolute display text-[clamp(2rem,11vw,4.5rem)] ${positions[i]}`}
          >
            {word}
          </motion.p>
        ))}

        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-6 p-7 pb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.5 }}
            transition={{ delay: 1.1, duration: 0.9 }}
            className="max-w-sm text-base leading-relaxed text-foreground/80"
          >
            But first impressions are notoriously unreliable.
          </motion.p>
          <CtaButton onClick={onNext}>Keep going →</CtaButton>
        </div>
      </div>
    </Screen>
  );
}
