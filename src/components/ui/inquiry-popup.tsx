
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export function InquiryPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    // Show popup after 10 seconds if it hasn't been shown yet in this session
    const hasSeenPopup = sessionStorage.getItem("hasSeenInquiryPopup");
    
    if (!hasSeenPopup && !hasShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem("hasSeenInquiryPopup", "true");
      }, 10000);
      
      return () => clearTimeout(timer);
    }
  }, [hasShown]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp URL with form data
    const whatsappNumber = "917501411769";
    const message = `Quick Inquiry from ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    // Open WhatsApp with the message
    window.open(whatsappUrl, "_blank");
    
    // Reset form and close popup
    setFormData({ name: "", email: "", message: "" });
    setIsOpen(false);
    
    // Show success toast
    toast.success("Inquiry sent successfully!", {
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <>
      {/* Toggle button */}
      <Button
        onClick={handleToggle}
        className="fixed bottom-6 left-6 z-50 rounded-full h-14 w-14 bg-va-purple hover:bg-va-darkPurple shadow-lg"
      >
        <MessageSquare className="h-6 w-6 text-white" />
        <span className="sr-only">Quick Inquiry</span>
      </Button>

      {/* Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed left-4 bottom-24 z-50 w-80 sm:w-96 bg-card rounded-xl shadow-lg border overflow-hidden"
          >
            <div className="p-4 bg-va-purple text-white flex justify-between items-center">
              <h3 className="font-semibold">Quick Inquiry</h3>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={handleToggle}
                className="text-white hover:bg-white/20"
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </Button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-4 space-y-4">
              <div>
                <label htmlFor="inquiry-name" className="text-sm font-medium mb-1 block">
                  Name
                </label>
                <Input
                  id="inquiry-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="inquiry-email" className="text-sm font-medium mb-1 block">
                  Email
                </label>
                <Input
                  id="inquiry-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="inquiry-message" className="text-sm font-medium mb-1 block">
                  Message
                </label>
                <Textarea
                  id="inquiry-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  rows={3}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full bg-gradient">
                Send Inquiry
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
