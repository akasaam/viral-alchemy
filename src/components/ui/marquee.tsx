
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  direction?: "left" | "right";
  speed?: "slow" | "normal" | "fast";
  pauseOnHover?: boolean;
}

export function Marquee({
  children,
  className,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
}: MarqueeProps) {
  const speedClass = {
    slow: "animate-[marquee_60s_linear_infinite]",
    normal: "animate-[marquee_25s_linear_infinite]",
    fast: "animate-[marquee_15s_linear_infinite]",
  };

  const directionClass = direction === "right" ? "flex-row-reverse" : "flex-row";

  return (
    <div
      className={cn(
        "overflow-hidden",
        pauseOnHover && "hover:[--pause:paused]",
        className
      )}
    >
      <div
        className={cn(
          "flex min-w-full shrink-0 gap-4",
          directionClass,
          speedClass[speed],
          "[animation-play-state:var(--pause,running)]"
        )}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
