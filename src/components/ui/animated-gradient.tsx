
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedGradientProps {
  className?: string;
  children?: React.ReactNode;
}

export function AnimatedGradient({ className, children }: AnimatedGradientProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    let x = 0;
    let y = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      x = (e.clientX - rect.left) / container.offsetWidth;
      y = (e.clientY - rect.top) / container.offsetHeight;
      
      const gradientX = 25 + x * 50; // 25% to 75%
      const gradientY = 25 + y * 50; // 25% to 75%
      
      container.style.setProperty('--gradient-x', `${gradientX}%`);
      container.style.setProperty('--gradient-y', `${gradientY}%`);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div 
      ref={containerRef}
      className={cn(
        "relative overflow-hidden", 
        className
      )}
      style={{
        '--gradient-x': '50%',
        '--gradient-y': '50%',
      } as React.CSSProperties}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-va-darkPurple via-va-purple to-va-pink opacity-30 blur-3xl" 
          style={{
            backgroundPosition: 'var(--gradient-x) var(--gradient-y)', 
            transition: 'background-position 0.5s ease-out'
          }}
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
