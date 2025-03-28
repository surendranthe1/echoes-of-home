// TestCamera.tsx
import React, { useRef, useEffect, useState } from 'react';

const TestCamera: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [status, setStatus] = useState<string>("Initializing...");
  
  const startCamera = async () => {
    try {
      setStatus("Requesting camera...");
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment' } 
      });
      
      setStatus("Got camera stream, attaching...");
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        try {
          await videoRef.current.play();
          setStatus("Camera active and playing");
        } catch (err) {
          // Properly handle unknown error type
          const errorMessage = err instanceof Error ? err.message : String(err);
          setStatus(`Play error: ${errorMessage}`);
        }
      } else {
        setStatus("Video element not found");
      }
    } catch (err) {
      // Properly handle unknown error type
      const errorMessage = err instanceof Error ? err.message : String(err);
      setStatus(`Camera error: ${errorMessage}`);
    }
  };
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div style={{ padding: '1rem', backgroundColor: '#333', color: 'white' }}>
        <h2>Camera Test</h2>
        <p>Status: {status}</p>
        <button onClick={startCamera}>Start Camera</button>
      </div>
      
      <video 
        ref={videoRef}
        style={{ flex: 1, objectFit: 'cover' }}
        playsInline
        autoPlay
        muted
      />
    </div>
  );
};

export default TestCamera;