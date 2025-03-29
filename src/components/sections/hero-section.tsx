
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      containerRef.current.style.setProperty("--mouse-x", `${x}`);
      containerRef.current.style.setProperty("--mouse-y", `${y}`);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  
  return (
    <div 
      ref={containerRef}
      className="relative overflow-hidden min-h-[calc(100vh-4rem)] flex items-center"
      style={{
        "--mouse-x": "0.5",
        "--mouse-y": "0.5",
      } as React.CSSProperties}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="blur-circle" style={{
          left: "calc(var(--mouse-x) * 50%)",
          top: "calc(var(--mouse-y) * 50%)",
          transition: "left 0.5s ease-out, top 0.5s ease-out",
        }} />
        <div className="blur-circle-small" style={{
          right: "calc(var(--mouse-x) * 60%)",
          bottom: "calc(var(--mouse-y) * 40%)",
          transition: "right 0.5s ease-out, bottom 0.5s ease-out",
        }} />
      </div>
      
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Transforming <span className="text-gradient">Digital Presence</span> Into Business Growth
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We craft data-driven digital marketing strategies that convert visitors into customers and elevate your brand to new heights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-gradient hover:opacity-90">
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/case-studies">View Our Work</Link>
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-square max-w-md mx-auto"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-va-purple to-va-pink opacity-20 blur-xl animate-spinSlow" />
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-va-purple to-va-pink opacity-30 blur-lg animate-spinSlow" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
              alt="Digital Marketing Expertise"
              className="rounded-2xl object-cover w-full h-full relative z-10 mask-radial-faded"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
