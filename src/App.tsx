import { Suspense, lazy, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/ui/theme-provider";
import { LoadingScreen } from "./components/ui/loading-screen";
import { CookieConsent } from "./components/ui/cookie-consent";
import "./App.css";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 5, // Cache data for 5 minutes
      staleTime: 1000 * 60 * 2, // Consider data fresh for 2 minutes
      refetchOnWindowFocus: false, // Don't refetch when window regains focus
    },
  },
});

// Use lazy loading for routes to improve initial load time
const Index = lazy(() => import("./pages/Index"));
const Services = lazy(() => import("./pages/Services"));
const SocialMediaMarketing = lazy(() => import("./pages/services/SocialMediaMarketing"));
const SEO = lazy(() => import("./pages/services/SEO"));
const ContentMarketing = lazy(() => import("./pages/services/ContentMarketing"));
const WebsiteDevelopment = lazy(() => import("./pages/WebsiteDevelopment"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Careers = lazy(() => import("./pages/Careers"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const Sitemap = lazy(() => import("./pages/Sitemap"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate checking cached resources
    const cachedData = localStorage.getItem('app-initialized');
    
    // If app has been initialized before, use a shorter loading time
    if (cachedData) {
      setTimeout(() => setIsLoading(false), 800);
    } else {
      // First time load, set cache marker for future loads
      localStorage.setItem('app-initialized', 'true');
      setTimeout(() => setIsLoading(false), 1500);
    }
  }, []);

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/social-media-marketing" element={<SocialMediaMarketing />} />
            <Route path="/services/seo" element={<SEO />} />
            <Route path="/services/content-marketing" element={<ContentMarketing />} />
            <Route path="/website-development" element={<WebsiteDevelopment />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <CookieConsent />
        <Toaster position="top-right" />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
