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
        "relative flex h-dvh w-full shrink-0 flex-col overflow-hidden bg-ink",
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
  variant = "solid",
  disabled,
  className,
}: {
  onClick?: () => void;
  children: ReactNode;
  variant?: "solid" | "ghost";
  disabled?: boolean;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "inline-flex min-h-[46px] items-center justify-center gap-3 rounded-full px-6 text-[0.7rem] tracking-[0.24em] uppercase transition-all active:scale-[0.98] disabled:opacity-40",
        variant === "solid"
          ? "bg-primary/90 text-primary-foreground shadow-[0_0_40px_-12px_var(--electric)] hover:bg-primary"
          : "border border-foreground/25 text-foreground/80 hover:border-primary hover:text-primary",
        className,
      )}
    >
      {children}
    </button>
  );
}

export function Hint({ children }: { children: ReactNode }) {
  return (
    <span className="text-[0.625rem] tracking-[0.3em] uppercase text-muted-foreground">
      {children}
    </span>
  );
}
