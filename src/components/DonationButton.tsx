import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface DonationButtonProps {
  variant?: "default" | "outline" | "secondary" | "ghost";
  size?: "sm" | "default" | "lg";
  className?: string;
  showIcon?: boolean;
}

export function DonationButton({ 
  variant = "default", 
  size = "default", 
  className = "",
  showIcon = true 
}: DonationButtonProps) {
  return (
    <Button 
      asChild 
      variant={variant} 
      size={size} 
      className={`hover-scale pulse-glow ${className}`}
    >
      <Link to="/dons">
        {showIcon && <Heart className="mr-2 h-4 w-4" />}
        Faire un Don
      </Link>
    </Button>
  );
}