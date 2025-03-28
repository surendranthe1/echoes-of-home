// src/components/ar/ARCharacter.tsx
import React from 'react';
import './ARCharacter.css';

interface ARCharacterProps {
  imageUrl: string;
  name: string;
  position?: { x: number; y: number };
}

const ARCharacter: React.FC<ARCharacterProps> = ({ 
  imageUrl, 
  name, 
  position = { x: 50, y: 50 } 
}) => {
  return (
    <div 
      className="ar-character"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
      }}
    >
      <div 
        className="ar-character-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="ar-character-name">{name}</div>
    </div>
  );
};

export default ARCharacter;