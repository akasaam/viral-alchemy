
import { useEffect, useState } from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { LoadingScreen } from "../ui/loading-screen";
import { WhatsAppButton } from "../ui/whatsapp-button";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // You might want to persist the loading state in localStorage to avoid 
    // showing the loading screen on every page navigation
    const hasVisited = sessionStorage.getItem("hasVisited");
    if (hasVisited) {
      setIsLoading(false);
    }
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
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
          <WhatsAppButton />
        </div>
      )}
    </>
  );
}
