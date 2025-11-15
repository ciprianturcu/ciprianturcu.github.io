import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './LineupDetail.css';

const LineupDetail: React.FC = () => {
  const { side, mapName } = useParams<{ side: string; mapName: string }>();
  const navigate = useNavigate();

  const getSideColor = () => {
    return side === 'ct' ? '#5c9ccc' : '#d97e3a';
  };

  return (
    <div className="lineup-detail">
      <header className="lineup-header">
        <button className="back-button" onClick={() => navigate('/')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Maps
        </button>

        <div className="lineup-title-section">
          <h1 className="lineup-title">{mapName?.toUpperCase()}</h1>
          <span
            className="lineup-side-badge"
            style={{ backgroundColor: getSideColor() }}
          >
            {side?.toUpperCase()}
          </span>
        </div>
      </header>

      <div className="lineup-content">
        <div className="placeholder-message">
          <div className="placeholder-icon">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 16v-4M12 8h.01"/>
            </svg>
          </div>
          <h2>Lineups Coming Soon</h2>
          <p>
            This is where smoke lineups for <strong>{mapName}</strong> ({side?.toUpperCase()}) will be displayed.
          </p>
          <p className="placeholder-instructions">
            Add your lineup images to the <code>/public/lineups/{side}/{mapName}/</code> directory.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LineupDetail;
