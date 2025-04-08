// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px 20px', background: '#333', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontSize: '24px', fontWeight: 'bold' }}>
        BookMyShow Clone
      </Link>
      <div>
        <Link to="/" style={{color: "#fff" , textDecoration:'none' , margin: '0 10px'}}>Home</Link>
        <Link to="/about" style={{ color: '#fff', textDecoration: 'none', margin: '0 10px' }}>About</Link>
        <Link to="/contact" style={{ color: '#fff', textDecoration: 'none', margin: '0 10px' }}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;