// src/components/CategoryMenu.jsx
import React from 'react';

const categories = ['Movies', 'Events', 'Plays', 'Sports', 'Activities'];

const CategoryMenu = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      margin: '20px 0',
      flexWrap: 'wrap'
    }}>
      {categories.map((item, index) => (
        <button
          key={index}
          style={{
            padding: '10px 20px',
            backgroundColor: '#eee',
            border: '1px solid #ccc',
            borderRadius: '20px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default CategoryMenu;
