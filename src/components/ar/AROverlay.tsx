// src/components/ar/AROverlay.tsx
import React, { useState, useEffect } from 'react';
import './AROverlay.css';

interface AROverlayProps {
  storyId: string;
  children?: React.ReactNode;
}

const AROverlay: React.FC<AROverlayProps> = ({ storyId, children }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading AR content
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="ar-overlay">
      {!loaded && (
        <div className="ar-loading">
          <div className="ar-loading-spinner"></div>
          <p>Initializing AR view...</p>
        </div>
      )}
      
      {loaded && (
        <>
          {/* AR indicators */}
          <div className="ar-indicators">
            <div className="ar-indicator"></div>
            <div className="ar-indicator"></div>
            <div className="ar-indicator"></div>
            <div className="ar-indicator"></div>
          </div>
          
          {/* AR content container */}
          <div className="ar-content">
            {children}
          </div>
        </>
      )}
    </div>
  );
};

export default AROverlay;