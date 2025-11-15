import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CS2Home from './pages/cs2/Home';
import CS2LineupDetail from './pages/cs2/LineupDetail';

const FaviconSwitcher: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const favicon = document.getElementById('favicon') as HTMLLinkElement;
    if (favicon) {
      if (location.pathname.startsWith('/cs2-tools')) {
        favicon.href = '/images/icon/cs2.svg';
      } else {
        favicon.href = '/images/icon/programming.svg';
      }
    }
  }, [location]);

  return null;
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <FaviconSwitcher />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cs2-tools" element={<CS2Home />} />
        <Route path="/cs2-tools/:side/:mapName" element={<CS2LineupDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
