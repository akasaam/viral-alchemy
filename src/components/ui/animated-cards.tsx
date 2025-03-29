
import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedCardsProps {
  items: {
    id: string | number;
    title: string;
    content: string;
    icon?: React.ReactNode;
    image?: string;
  }[];
  className?: string;
}

export function AnimatedCards({ items, className }: AnimatedCardsProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const { left } = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - left);
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", className)}
    >
      {items.map((item, idx) => (
        <div
          key={item.id}
          className="group relative"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-va-purple to-va-pink opacity-0 group-hover:opacity-70 rounded-xl transition-opacity duration-300" />
          
          <motion.div
            className={cn(
              "relative h-full bg-card border rounded-xl p-6 card-hover overflow-hidden",
              "group-hover:shadow-lg group-hover:border-transparent transition-all duration-300"
            )}
            initial="initial"
            whileHover="hover"
            variants={{
              initial: { y: 0 },
              hover: { y: -5 }
            }}
          >
            {item.image && (
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>
            )}

            <div className="relative z-10">
              {item.icon && (
                <div className="text-va-purple mb-4 text-xl">{item.icon}</div>
              )}
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.content}</p>
            </div>
            
            <div
              className={cn(
                "absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-va-purple to-va-pink transform scale-x-0 origin-left transition-transform duration-300",
                hoveredIndex === idx && "scale-x-100"
              )}
            />
          </motion.div>
        </div>
      ))}
    </div>
  );
}
