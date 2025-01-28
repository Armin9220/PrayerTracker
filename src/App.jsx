import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import PrayerPage from './pages/PrayerPage';
import QuranPage from './pages/QuranPage';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/signup" element={<SignUpPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/prayers" element={<PrayerPage />} />
        <Route path="/quran" element={<QuranPage />} />
      </Routes>
    </Router>
  );
}

export default App;

