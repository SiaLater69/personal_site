import React, { useState, useEffect } from 'react';

const DarkBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: 'rgb(17, 4, 134)',
        background: 'linear-gradient(to right, rgb(20, 30, 48), rgb(36, 59, 85))',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: mousePosition.y,
          left: mousePosition.x,
          width: '800px',
          height: '800px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(0,0,0,0) 70%)',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
};

export default DarkBackground;