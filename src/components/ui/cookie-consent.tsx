
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem("cookie-consent");
    
    // Only show if no choice has been made
    if (!cookieConsent) {
      // Small delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background border-t shadow-lg">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex-1 pr-4">
            <h3 className="text-lg font-semibold mb-2">We value your privacy</h3>
            <p className="text-muted-foreground text-sm">
              We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. Read our{" "}
              <Link to="/cookie-policy" className="text-va-purple hover:underline">
                Cookie Policy
              </Link>{" "}
              and{" "}
              <Link to="/privacy-policy" className="text-va-purple hover:underline">
                Privacy Policy
              </Link>{" "}
              for more information.
            </p>
          </div>
          <div className="flex gap-2 flex-shrink-0">
            <Button variant="outline" onClick={rejectCookies}>
              Reject All
            </Button>
            <Button className="bg-gradient" onClick={acceptCookies}>
              Accept All
            </Button>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={rejectCookies} 
            className="absolute top-2 right-2 h-8 w-8 rounded-full"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
