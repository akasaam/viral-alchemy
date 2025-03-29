
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function WhatsAppButton() {
  const openWhatsApp = () => {
    window.open(`https://wa.me/917501411769`, "_blank");
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            onClick={openWhatsApp}
            className="fixed bottom-6 right-6 rounded-full h-14 w-14 bg-green-500 hover:bg-green-600 z-50 shadow-lg"
          >
            <Phone className="h-6 w-6 text-white" />
            <span className="sr-only">Contact via WhatsApp</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Contact us via WhatsApp</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
