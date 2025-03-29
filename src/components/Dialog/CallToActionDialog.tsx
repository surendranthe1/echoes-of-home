// src/components/ui/CallToActionDialog.tsx
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { HandHeart, ExternalLink, XCircle } from 'lucide-react';

interface CallToActionDialogProps {
  open: boolean;
  onClose: () => void;
  story: {
    title: string;
    resources?: Array<{
      name: string;
      url: string;
      phone?: string;
    }>;
  };
}

const CallToActionDialog: React.FC<CallToActionDialogProps> = ({
  open,
  onClose,
  story,
}) => {
  const handleDonateClick = () => {
    // Open the donation link in a new tab
    window.open('https://wearemobilise.org.au/donate', '_blank');
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <HandHeart className="h-5 w-5 text-primary" />
            Make a Difference
          </DialogTitle>
          <DialogDescription>
            You've just experienced "{story.title}". Many people continue to struggle with homelessness. Would you like to help?
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4">
          <p className="mb-4 text-sm">
            We Are Mobilise works to support those facing homelessness through community action and grassroots support.
          </p>
          
          <div className="bg-muted p-3 rounded-md mb-4">
            <h4 className="font-medium text-sm mb-2">How you can help:</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-primary/20 p-1 mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                </div>
                <span>Donate to support immediate needs and long-term solutions</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-primary/20 p-1 mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                </div>
                <span>Volunteer your time and skills to community programs</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-primary/20 p-1 mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                </div>
                <span>Share these stories to raise awareness</span>
              </li>
            </ul>
          </div>
        </div>
        
        <DialogFooter className="flex-col sm:flex-row gap-2">
          <Button 
            onClick={handleDonateClick} 
            className="w-full sm:w-auto"
            variant="default"
          >
            <HandHeart className="mr-2 h-4 w-4" />
            Donate Now
          </Button>

          {story.resources && story.resources.length > 0 && (
            <Button 
              onClick={onClose} 
              variant="outline"
              className="w-full sm:w-auto"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              View Resources
            </Button>
          )}
          
          <Button 
            onClick={onClose} 
            variant="ghost"
            className="w-full sm:w-auto"
          >
            <XCircle className="mr-2 h-4 w-4" />
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CallToActionDialog;