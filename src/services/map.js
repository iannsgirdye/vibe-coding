import React, { useState, useEffect } from 'react';
import mapImage from '../components/map.png';

const Map = () => {
  const [mapPosition, setMapPosition] = useState({ x: 0, y: 0 });
  const [mapScale, setMapScale] = useState(1);

  const handleMouseMove = (event) => {
    // Обработка движения мыши для перемещения карты
  };

  const handleMouseWheel = (event) => {
    // Обработка колеса мыши для масштабирования карты
  };

  return (
    <div
      style={{
        backgroundImage: `url(${mapImage})`,
        backgroundSize: `${mapScale * 100}%`,
        backgroundPosition: `${mapPosition.x}px ${mapPosition.y}px`,
      }}
      onMouseMove={handleMouseMove}
      onWheel={handleMouseWheel}
    />
  );
};

export default Map;