import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="landing-page">
      <div className="landing-container">
        <h1 className="landing-title">Welcome</h1>
        <p className="landing-subtitle">This is a collection of small projects aimed to solve some of my problems</p>

        <div className="projects-grid">
          <Link to="/cs2-tools" className="project-card">
            <div className="project-icon">🎯</div>
            <h2 className="project-title">CS2 Nade Lineups</h2>
            <p className="project-description">
              Interactive tool for Counter-Strike 2 grenade lineups and strategies
            </p>
          </Link>
        </div>

        <footer className="landing-footer">
          <p>&copy; 2025 Ciprian Turcu | <a href="https://github.com/ciprianturcu" target="_blank" rel="noopener noreferrer">GitHub</a></p>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
