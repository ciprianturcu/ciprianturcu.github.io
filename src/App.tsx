import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LineupDetail from './pages/LineupDetail';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:side/:mapName" element={<LineupDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
