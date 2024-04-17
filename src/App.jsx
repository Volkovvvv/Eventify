import React from 'react';
import Home from './pages/Home';
import './scss/components/app.scss';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LocationPage from './pages/LocationPage';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Profile from './pages/Profile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/location/:id" element={<LocationPage />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
