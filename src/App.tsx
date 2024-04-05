import React from 'react';
import Home from './pages/Home';
import './scss/components/app.scss';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LocationPage from './pages/LocationPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/location/:id" element={<LocationPage />} />
    </Routes>
  );
}

export default App;
