// src/components/camera/CameraView.tsx
import React, { useRef, useEffect, useState, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import './CameraView.css';

interface CameraViewProps {
  children: ReactNode;
  locationId: string;
  onCameraReady?: (isReady: boolean) => void;
}

const CameraView: React.FC<CameraViewProps> = ({ 
  children, 
  locationId, 
  onCameraReady 
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [cameraActive, setCameraActive] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [cameraStatus, setCameraStatus] = useState<string>("Initializing...");
  const [deviceOrientation, setDeviceOrientation] = useState<number>(0);
  const navigate = useNavigate();

  // Handle device orientation for AR positioning
  useEffect(() => {
    const handleOrientation = (event: DeviceOrientationEvent) => {
      // Convert orientation data to a usable format
      if (event.alpha !== null) {
        setDeviceOrientation(event.alpha);
      }
    };

    // Check if device orientation is available
    if (typeof DeviceOrientationEvent !== 'undefined') {
      window.addEventListener('deviceorientation', handleOrientation, true);
    }

    return () => {
      window.removeEventListener('deviceorientation', handleOrientation, true);
    };
  }, []);

  useEffect(() => {
    let stream: MediaStream | null = null;

    const startCamera = async (): Promise<void> => {
      try {
        // Request camera permission
        setCameraStatus("Requesting camera access...");
        stream = await navigator.mediaDevices.getUserMedia({
          video: { 
            facingMode: 'environment',
          },
          audio: false
        });

        setCameraStatus("Camera access granted, setting up video...");
        // Add a delay before attaching - this can help on some iOS devices
        setTimeout(() => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
            
            // Play and handle any errors
            videoRef.current.play()
              .then(() => {
                setCameraStatus("Camera active and playing");
                setCameraActive(true);
                if (onCameraReady) onCameraReady(true);
                
              })
              .catch((err) => {
                const errorMessage = err instanceof Error ? err.message : String(err);
                setCameraStatus(`Play error: ${errorMessage}`);
                setError(`Unable to play camera feed: ${errorMessage}`);
                if (onCameraReady) onCameraReady(false);
                toast.error(`Camera play error: ${errorMessage}`);
              });
          } else {
            setCameraStatus("Video element not found");
            setError("Video element not found");
            if (onCameraReady) onCameraReady(false);
          }
        }, 300);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : String(err);
        console.error('Error accessing camera:', err);
        setCameraStatus(`Camera access error: ${errorMessage}`);
        setError(`Unable to access camera: ${errorMessage}`);
        if (onCameraReady) onCameraReady(false);
        toast.error(`Camera access error: ${errorMessage}`);
      }
    };

    if (locationId) {
      startCamera();
    } else {
      setError('No location found. Please scan a valid QR code.');
      toast.error('No location found. Please scan a valid QR code.');
      navigate('/scan-error');
    }

    // Cleanup function to stop the camera when component unmounts
    return () => {
      if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, [locationId, navigate, onCameraReady]);

  return (
    <div 
      className="camera-container" 
      data-orientation={deviceOrientation.toFixed(0)}
    >
      {error ? (
        <div className="camera-error">
          <p>{error}</p>
          <p className="debug-info">Status: {cameraStatus}</p>
          <p> Please refresh page or navigate back to home.</p>
          <Button 
            onClick={() => navigate('/')}
            variant="default"
          >
            Return Home
          </Button>
        </div>
      ) : (
        <>
          <video 
            ref={videoRef} 
            className="camera-feed" 
            playsInline 
            muted 
            autoPlay
          />
          <div className="camera-overlay">
            {cameraActive && children}
          </div>
          {!cameraActive && (
            <div className="camera-loading">
              <p>Camera status: {cameraStatus}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CameraView;