import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MapCard.css';

interface MapCardProps {
  mapName: string;
  imagePath: string;
}

const MapCard: React.FC<MapCardProps> = ({ mapName, imagePath }) => {
  const navigate = useNavigate();

  const handleSideClick = (side: 'ct' | 't') => {
    console.log('Button clicked!', side, mapName);
    const mapSlug = mapName.toLowerCase().replace(/\s+/g, '-');
    const relativePath = `${side}/${mapSlug}`;
    console.log('Current location:', window.location.pathname);
    console.log('Navigating to (relative):', relativePath);
    navigate(relativePath);
  };

  return (
    <div className="map-card">
      <div
        className="map-card-image"
        style={{ backgroundImage: `url(${imagePath})` }}
      >
        <div className="map-card-overlay">
          <h2 className="map-card-title">{mapName}</h2>
          <div className="map-card-buttons">
            <button
              className="map-card-btn ct-btn"
              onClick={() => handleSideClick('ct')}
            >
              CT
            </button>
            <button
              className="map-card-btn t-btn"
              onClick={() => handleSideClick('t')}
            >
              T
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapCard;
