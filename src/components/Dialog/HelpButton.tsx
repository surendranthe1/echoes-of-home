// src/components/ui/HelpButton.tsx
import React from 'react';
import { Button } from "@/components/ui/button";
import { HandHeart } from 'lucide-react';

interface HelpButtonProps {
  onClick: () => void;
  className?: string;
}

const HelpButton: React.FC<HelpButtonProps> = ({ onClick, className = "" }) => {
  return (
    <Button 
      onClick={onClick}
      variant="default"
      className={`help-button ${className}`}
    >
      <HandHeart className="mr-2 h-4 w-4" />
      How You Can Help
    </Button>
  );
};

export default HelpButton;

/* Add this to your StoryDisplay.css */
/*
.help-button {
  background-color: hsl(var(--primary));
  margin-top: 1rem;
}
*/