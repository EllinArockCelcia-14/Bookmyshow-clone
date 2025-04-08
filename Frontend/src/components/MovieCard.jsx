// src/components/MovieCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div style={{ margin: '20px', width: '200px', textAlign: 'center', border: '1px solid #ddd', borderRadius: '8px' }}>
      <img src={movie.poster} alt={movie.title} style={{ width: '100%', borderRadius: '8px 8px 0 0'}} />
      <h3>{movie.title}</h3>
      <p><strong>Rating:</strong> {movie.rating}</p>
      <Link to={`/movie/${movie.id}`} style={{ color: '#007bff', textDecoration: 'underline' }}>
        View Details
      </Link>
    </div>
  );
};

export default MovieCard;