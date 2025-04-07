
import { useEffect, useState } from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { LoadingScreen } from "../ui/loading-screen";
import { cacheManager } from "@/lib/cache";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if we have a cached loading state
    const cachedLoadingState = cacheManager.get<boolean>("hasVisited");
    
    if (cachedLoadingState === true) {
      // If we have a cached state, skip loading
      setIsLoading(false);
    } else {
      // Check sessionStorage as fallback
      const hasVisited = sessionStorage.getItem("hasVisited");
      if (hasVisited) {
        setIsLoading(false);
      }
    }
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Store in both cache and sessionStorage for redundancy
    cacheManager.set("hasVisited", true, 24 * 60 * 60 * 1000); // Cache for 24 hours
    sessionStorage.setItem("hasVisited", "true");
  };

  return (
    <>
      {isLoading ? (
        <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      ) : (
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
        </div>
      )}
    </>
  );
}
