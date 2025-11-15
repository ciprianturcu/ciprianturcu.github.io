import React from 'react';
import MapCard from '../components/MapCard';
import './Home.css';

// Default CS2 competitive maps
const maps = [
  { name: 'Dust 2', image: '/images/dust2.jpg' },
  { name: 'Mirage', image: '/images/mirage.jpg' },
  { name: 'Inferno', image: '/images/inferno.jpg' },
  { name: 'Nuke', image: '/images/nuke.jpg' },
  { name: 'Overpass', image: '/images/overpass.jpg' },
  { name: 'Vertigo', image: '/images/vertigo.jpg' },
  { name: 'Ancient', image: '/images/ancient.jpg' },
  { name: 'Anubis', image: '/images/anubis.jpg' },
];

const Home: React.FC = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1 className="home-title">CS2 Nade Lineups</h1>
        <p className="home-subtitle">Master your smoke lineups for every map</p>
      </header>

      <div className="maps-grid">
        {maps.map((map) => (
          <MapCard
            key={map.name}
            mapName={map.name}
            imagePath={map.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
