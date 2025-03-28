// src/pages/NotFound.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileQuestion, Home, Map } from 'lucide-react';
import '../pages/pages-css/NotFound.css';

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="not-found-container">
      <Card className="not-found-card">
        <CardHeader>
          <CardTitle className="flex items-center">
            <FileQuestion className="mr-2 h-5 w-5" />
            Page Not Found
          </CardTitle>
          <CardDescription>We couldn't find the page you're looking for</CardDescription>
        </CardHeader>
        
        <CardContent>
          <div className="not-found-illustration">
            <div className="lost-qr-code">
              <div className="qr-frame"></div>
              <div className="qr-question">?</div>
            </div>
          </div>
          
          <p className="not-found-message">
            The page or story you're trying to access doesn't exist or may have been moved.
            If you scanned a QR code, it might not be part of the Urban Stories experience.
          </p>
        </CardContent>
        
        <CardFooter className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
          <Button 
            onClick={() => navigate('/')}
            className="w-full sm:w-auto"
            variant="default"
          >
            <Home className="mr-2 h-4 w-4" />
            Return Home
          </Button>
          
          <Button 
            onClick={() => navigate('/map')}
            className="w-full sm:w-auto"
            variant="outline"
          >
            <Map className="mr-2 h-4 w-4" />
            View Story Map
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default NotFound;