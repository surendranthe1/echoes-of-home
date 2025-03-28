// src/components/ar/ARScene.tsx
import React from 'react';
import { Story } from '@/types';
import './ARScene.css';

interface ARSceneProps {
  story: Story;
  currentSegment: number;
}

const ARScene: React.FC<ARSceneProps> = ({ story, currentSegment }) => {
  // Calculate character position based on current segment
  const getPosition = () => {
    // Move character to different positions based on story segment
    const positions = [
      { x: 30, y: 40 },
      { x: 60, y: 50 },
      { x: 40, y: 70 },
      { x: 70, y: 30 }
    ];
    
    return positions[currentSegment % positions.length];
  };
  
  // Get silhouette color based on current segment
  const getSilhouetteColor = () => {
    const colors = [
      "rgba(40, 40, 40, 0.9)",     // Dark gray
      "rgba(60, 60, 100, 0.9)",    // Dark blue-gray
      "rgba(60, 90, 60, 0.9)",     // Dark green-gray
      "rgba(90, 60, 60, 0.9)"      // Dark red-gray
    ];
    
    return colors[currentSegment % colors.length];
  };
  
  // Get body language/posture based on current segment
  const getBodyLanguage = () => {
    // Different body postures for different emotional states in the story
    const postures = [
      // Normal standing pose (default)
      "M50,10 C60,10 70,20 70,35 C70,50 60,60 50,60 C40,60 30,50 30,35 C30,20 40,10 50,10 Z M40,65 C20,70 20,120 20,130 L80,130 C80,120 80,70 60,65 C55,63 53,63 50,63 C47,63 45,63 40,65 Z M30,135 L35,195 L45,195 L50,150 L55,195 L65,195 L70,135 Z",
      
      // Arms raised (excitement)
      "M50,10 C60,10 70,20 70,35 C70,50 60,60 50,60 C40,60 30,50 30,35 C30,20 40,10 50,10 Z M40,65 C20,70 20,120 20,130 L80,130 C80,120 80,70 60,65 C55,63 53,63 50,63 C47,63 45,63 40,65 Z M30,135 L35,195 L45,195 L50,150 L55,195 L65,195 L70,135 Z M15,100 C15,90 20,75 35,65 L35,85 C25,90 20,95 20,100 Z M85,100 C85,90 80,75 65,65 L65,85 C75,90 80,95 80,100 Z",
      
      // Hunched (sadness)
      "M50,20 C60,20 70,30 70,45 C70,60 60,70 50,70 C40,70 30,60 30,45 C30,30 40,20 50,20 Z M40,75 C25,80 20,120 20,140 L80,140 C80,120 75,80 60,75 C55,73 53,73 50,73 C47,73 45,73 40,75 Z M30,145 L35,195 L45,195 L50,160 L55,195 L65,195 L70,145 Z"
    ];
    
    // You could map different story segments to different emotions
    const emotionIndex = Math.min(currentSegment, postures.length - 1);
    return postures[emotionIndex];
  };
  
  const position = getPosition();
  
  return (
    <div className="ar-overlay">
      {/* Person Silhouette using SVG */}
      <svg 
        className="person-silhouette"
        width="100" 
        height="200"
        viewBox="0 0 100 200" 
        style={{
          left: `${position.x}%`,
          top: `${position.y}%`,
        }}
      >
        {/* Main body silhouette */}
        <path 
          d={getBodyLanguage()}
          fill={getSilhouetteColor()}
          className="silhouette-body"
        />
        
        {/* Author's name */}
        <foreignObject x="0" y="210" width="100" height="30">
          <div className="silhouette-name">{story.author}</div>
        </foreignObject>
      </svg>
      
      {/* Location marker */}
      <div className="ar-location-marker">
        <div className="ar-location-pulse"></div>
        <div className="ar-location-pin"></div>
        <div className="ar-location-label">{story.locationDescription}</div>
      </div>
    </div>
  );
};

export default ARScene;