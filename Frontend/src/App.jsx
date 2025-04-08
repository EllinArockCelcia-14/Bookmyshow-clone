// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom'; // or the appropriate library
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Booking from './pages/Booking';
import SignIn from './components/SignIn';
import Profile from './components/Profile';

const App = () => {
  return (
    <Router>
      <Navbar />
      <nav>
                
                <Link to="/signin">Sign-In</Link>
                <Link to="/profile">Profile</Link>
            </nav>
      <div style={{ padding: '40px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/booking/:id" element={<Booking />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;