import React from 'react';
import MapCard from '../components/MapCard';
import './Home.css';

// Default CS2 competitive maps
const maps = [
  { name: 'Dust 2', image: 'https://placehold.co/800x450/1a1a1a/ffa500?text=Dust+2' },
  { name: 'Mirage', image: 'https://placehold.co/800x450/1a1a1a/ffa500?text=Mirage' },
  { name: 'Inferno', image: 'https://placehold.co/800x450/1a1a1a/ffa500?text=Inferno' },
  { name: 'Nuke', image: 'https://placehold.co/800x450/1a1a1a/ffa500?text=Nuke' },
  { name: 'Overpass', image: 'https://placehold.co/800x450/1a1a1a/ffa500?text=Overpass' },
  { name: 'Vertigo', image: 'https://placehold.co/800x450/1a1a1a/ffa500?text=Vertigo' },
  { name: 'Ancient', image: 'https://placehold.co/800x450/1a1a1a/ffa500?text=Ancient' },
  { name: 'Anubis', image: 'https://placehold.co/800x450/1a1a1a/ffa500?text=Anubis' },
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
