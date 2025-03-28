// src/pages/ScanError.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertCircle, QrCode, Home } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import '../pages/pages-css/ScanError.css';

const ScanError: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="error-page-container">
      <Card className="error-card">
        <CardHeader>
          <CardTitle className="flex items-center">
            <AlertCircle className="mr-2 h-5 w-5 text-destructive" />
            QR Code Error
          </CardTitle>
          <CardDescription>We couldn't process the QR code you scanned</CardDescription>
        </CardHeader>
        
        <CardContent>
          <Alert variant="destructive" className="mb-4">
            <AlertTitle>Invalid QR Code</AlertTitle>
            <AlertDescription>
              The QR code you scanned is either invalid or not part of the Urban Stories experience.
            </AlertDescription>
          </Alert>
          
          <div className="troubleshooting">
            <h3 className="text-lg font-medium mb-2">Troubleshooting:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Make sure you're scanning an official Urban Stories QR code</li>
              <li>Try scanning the QR code again, ensuring good lighting and a steady hand</li>
              <li>Check that your camera lens is clean and free from obstructions</li>
              <li>If problems persist, try using the map to find story locations</li>
            </ul>
          </div>
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
            <QrCode className="mr-2 h-4 w-4" />
            Find Story Locations
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ScanError;