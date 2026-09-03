import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Screen({
  id,
  children,
  className,
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative flex h-dvh w-full shrink-0 flex-col overflow-hidden",
        className,
      )}
    >
      {children}
    </section>
  );
}

export function CtaButton({
  onClick,
  children,
}: {
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group inline-flex items-center gap-3 border-b border-foreground/40 pb-1 text-sm tracking-[0.22em] uppercase text-foreground transition-colors hover:border-primary hover:text-primary"
    >
      {children}
    </button>
  );
}
