import React from 'react';
import Home from './pages/Home';
import './scss/components/app.scss';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/main" element={<MainPage />} />
    </Routes>
  );
}

export default App;
