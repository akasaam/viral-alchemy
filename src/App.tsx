
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState, lazy, Suspense } from "react";

// Lazy-loaded pages for better performance
const Index = lazy(() => import("./pages/Index"));
const Services = lazy(() => import("./pages/Services"));
const WebsiteDevelopment = lazy(() => import("./pages/WebsiteDevelopment"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Careers = lazy(() => import("./pages/Careers"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Service Pages
const SocialMediaMarketing = lazy(() => import("./pages/services/SocialMediaMarketing"));
const SEO = lazy(() => import("./pages/services/SEO"));
const ContentMarketing = lazy(() => import("./pages/services/ContentMarketing"));

// Legal & Utility Pages
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const Sitemap = lazy(() => import("./pages/Sitemap"));

// Loading component for Suspense
import { LoadingScreen } from "./components/ui/loading-screen";

// Framer Motion
import { AnimatePresence } from "framer-motion";

// Create a new query client with caching configuration
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 60, // 60 minutes - replaces cacheTime which is deprecated
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Cache font files and other static assets
    if ('caches' in window) {
      const staticCache = 'viral-alchemy-static-v1';
      caches.open(staticCache).then(cache => {
        return cache.addAll([
          '/favicon.ico',
          '/placeholder.svg',
          'https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap',
        ]);
      });
    }

    // Hide the loading indicator after everything has loaded
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AnimatePresence>
          {isLoading ? (
            <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
          ) : (
            <Suspense fallback={<LoadingScreen onLoadingComplete={() => {}} />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/services" element={<Services />} />
                <Route path="/website-development" element={<WebsiteDevelopment />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/careers" element={<Careers />} />
                
                {/* Service Pages */}
                <Route path="/services/social-media-marketing" element={<SocialMediaMarketing />} />
                <Route path="/services/seo" element={<SEO />} />
                <Route path="/services/content-marketing" element={<ContentMarketing />} />
                
                {/* Legal & Utility Pages */}
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/cookie-policy" element={<CookiePolicy />} />
                <Route path="/sitemap" element={<Sitemap />} />
                
                {/* Catch-all route */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          )}
        </AnimatePresence>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
