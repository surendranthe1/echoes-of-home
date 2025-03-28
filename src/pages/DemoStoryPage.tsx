// src/pages/DemoStoryPage.tsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDemoStory } from '@/data/stories';
import { toast } from 'sonner';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Info } from 'lucide-react';
import '../pages/pages-css/DemoStoryPage.css';

const DemoStoryPage: React.FC = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Display a welcome toast when the component mounts
    toast.info('Welcome to the demo experience!');
  }, []);
  
  const handleStartDemo = (): void => {
    // Get the demo story
    const demoStory = getDemoStory();
    
    if (demoStory) {
      // Navigate to the story with the location ID
      navigate(`/story/${demoStory.locationId}`);
    } else {
      toast.error('Demo story not found. Please try again later.');
    }
  };
  
  return (
    <div className="demo-container">
      <Card className="demo-card">
        <CardHeader>
          <CardTitle>Demo Experience</CardTitle>
          <CardDescription>Try Urban Stories without scanning a QR code</CardDescription>
        </CardHeader>
        
        <CardContent>
          <div className="demo-info">
            <Info className="demo-info-icon" />
            <p>
              This demo lets you experience Urban Stories without being at a physical location.
              You'll see how our AR storytelling works, with a camera feed and story overlay.
            </p>
          </div>
          
          <div className="demo-instructions">
            <h3>To get the full experience:</h3>
            <ol>
              <li>Allow camera access when prompted</li>
              <li>Hold your phone up as if you're at the story location</li>
              <li>Explore the narrative elements and audio features</li>
            </ol>
          </div>
        </CardContent>
        
        <CardFooter className="demo-footer">
          <Button 
            onClick={handleStartDemo}
            className="demo-start-button"
          >
            Start Demo Experience
          </Button>
          
          <Button 
            variant="outline"
            onClick={() => navigate('/')}
            className="demo-back-button"
          >
            Back to Home
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default DemoStoryPage;