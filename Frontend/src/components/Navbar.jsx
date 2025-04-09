import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

const Navbar = () => {
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState('Chennai');
  const [showCities, setShowCities] = useState(false);
  const [user, setUser] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false); // ⬅️ Sidebar toggle


  const cities = ['Chennai', 'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad'];

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setShowCities(false);
  };

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '16px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'red' }}>
        book<span style={{ color: 'black' }}>my</span>show
      </div>

      <input
        placeholder="Search for Movies, Events, Plays, Sports and Activities"
        style={{ width: '35%', padding: '8px', border: '1px solid #ccc', borderRadius: '5px' }}
      />

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', position: 'relative' }}>
        <div onClick={() => setShowCities(!showCities)} style={{ cursor: 'pointer' }}>
          {selectedCity} ▼
        </div>
        {showCities && (
          <div style={{
            position: 'absolute',
            top: '100%',
            background: '#fff',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            padding: '10px',
            borderRadius: '5px',
            zIndex: 10
          }}>
            {cities.map(city => (
              <div
                key={city}
                onClick={() => handleCitySelect(city)}
                style={{ padding: '5px 10px', cursor: 'pointer' }}
              >
                {city}
              </div>
            ))}
          </div>
        )}
        {user ? (
          <>
            <span style={{ fontWeight: 'bold' }}>{user.email}</span>
            <button
              onClick={handleLogout}
              style={{ backgroundColor: 'gray', color: 'white', padding: '6px 12px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={() => navigate('/signin')}
            style={{ backgroundColor: 'red', color: 'white', padding: '6px 16px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          >
            Sign In
          </button>
        )}
        <div
            style={{ fontSize: '20px', cursor: 'pointer' }}
            onClick={() => setSidebarOpen(true)} // ⬅️ Toggle sidebar on click
          >
            ☰
          </div>
  </div>
  <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
    </nav>
    
  );
};

export default Navbar;
