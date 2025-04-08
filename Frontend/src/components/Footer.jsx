// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#2b2b2b', color: '#ccc', padding: '30px 20px', fontSize: '14px' }}>
      <div style={{ maxWidth: '1200px', margin: 'auto' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
          <div style={{ flex: '1' }}>
            <h3 style={{ color: '#fff' }}>MOVIES NOW SHOWING</h3>
            <p>Good Bad Ugly | Jaat | Jack | Sikandar | Mad Square | The House of Dead Horror | Prehistoric Adventure | Wild Roller Coaster | A Minecraft Movie | Chhaava</p>
          </div>
          <div style={{ flex: '1' }}>
            <h3 style={{ color: '#fff' }}>TOP CINEMAS IN CHENNAI</h3>
            <p>Kumaran Theatre | INOX | PVR | MAYAJAAL | Miraj Cinemas | Mani Talkies | National Theatre | Medavakkam RGB | PVR: Aerohub | PVR: Grand Mall</p>
          </div>
          <div style={{ flex: '1' }}>
            <h3 style={{ color: '#fff' }}>MOVIES BY GENRE</h3>
            <p>Drama | Action | Thriller | Comedy | Romantic | Crime | Family | Horror | Sci-Fi | Musical | Animation | Classic | Mystery | Political | War | Devotional | Mythological</p>
          </div>
        </div>
        <hr style={{ margin: '30px 0', borderColor: '#444' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#aaa' }}>
          <span>© 2025 BookMyShow Clone</span>
          <span>Customer Support | Terms & Conditions | Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
