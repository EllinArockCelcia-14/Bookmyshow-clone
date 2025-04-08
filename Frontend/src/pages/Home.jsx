// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';
import CategoryMenu from '../components/CategoryMenu';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/movies')
      .then((res) => setMovies(res.data))
      .catch((err) => console.error('Error fetching movies:', err));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <CategoryMenu />
      <h1 style={{ textAlign: 'center' }}>Popular Movies</h1>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px'
      }}>
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <p>No movies found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
