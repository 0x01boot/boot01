// src/components/layout/RetroScreen.jsx
import React from 'react';

const RetroScreen = ({ children }) => {
  return (
    <div className="retro-screen">
      <div className="retro-container crt-overlay">
        {/* Scan line effect */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-black to-transparent opacity-5 animate-scan" />
        
        {/* Content */}
        <div className="relative z-10 p-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default RetroScreen;