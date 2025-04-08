// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Booking from './pages/Booking';
import SignIn from './pages/SignIn';
import Footer from './components/Footer';
import Showtimes from './pages/Showtimes';

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Render once here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/showtimes/:id" element={<Showtimes />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
