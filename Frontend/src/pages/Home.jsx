// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';
import CategoryMenu from '../components/CategoryMenu';

const Home = () => {
  const [allItems, setAllItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Movies');

  useEffect(() => {
    axios.get('http://localhost:3001/movies') // assuming this includes all items
      .then(res => setAllItems(res.data))
      .catch(err => console.error(err));
  }, []);

  // Filter based on category
  const filteredItems = allItems.filter(item => item.category === selectedCategory);

  return (
    <div>
      <CategoryMenu selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {filteredItems.length > 0 ? (
          filteredItems.map(item => (
            <MovieCard key={item.id} movie={item} />
          ))
        ) : (
          <p>No items found for {selectedCategory}.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
