import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealVariant =
  | "fade-up"
  | "fade-in"
  | "slide-left"
  | "slide-right"
  | "scale-up"
  | "clip-reveal";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  variant?: RevealVariant;
  duration?: number;
}

const VARIANT_STYLES: Record<
  RevealVariant,
  { hidden: React.CSSProperties; visible: React.CSSProperties }
> = {
  "fade-up": {
    hidden: { opacity: 0, transform: "translateY(16px)" },
    visible: { opacity: 1, transform: "translateY(0)" },
  },
  "fade-in": {
    hidden: { opacity: 0, transform: "none" },
    visible: { opacity: 1, transform: "none" },
  },
  "slide-left": {
    hidden: { opacity: 0, transform: "translateX(-20px)" },
    visible: { opacity: 1, transform: "translateX(0)" },
  },
  "slide-right": {
    hidden: { opacity: 0, transform: "translateX(20px)" },
    visible: { opacity: 1, transform: "translateX(0)" },
  },
  "scale-up": {
    hidden: { opacity: 0, transform: "scale(0.97)" },
    visible: { opacity: 1, transform: "scale(1)" },
  },
  // Kept for existing call sites; compositor-only like the rest (no clip-path).
  "clip-reveal": {
    hidden: { opacity: 0, transform: "translateY(16px)" },
    visible: { opacity: 1, transform: "translateY(0)" },
  },
};

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
  variant = "fade-up",
  duration = 600,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  // "static" on the server and the first client render: content is visible without JavaScript,
  // hydration matches, and above-the-fold content never waits for scripts to paint.
  const [state, setState] = useState<"static" | "hidden" | "shown">("static");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Never hide content the browser can't reveal again; `?noreveal` is for dev review captures.
    if (typeof IntersectionObserver === "undefined") return;
    if (import.meta.env.DEV && window.location.search.includes("noreveal")) return;
    // Only animate what the visitor has not seen yet.
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;

    setState("hidden");
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setState("shown");
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const v = VARIANT_STYLES[variant];

  const Comp = Tag as any;
  return (
    <Comp
      ref={ref as any}
      className={className}
      style={
        state === "static"
          ? undefined
          : {
              ...(state === "shown" ? v.visible : v.hidden),
              transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
            }
      }
    >
      {children}
    </Comp>
  );
}
