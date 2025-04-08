// src/pages/MovieDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/movies/${id}`) // Replace with a real API
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.error('Error fetching movie details:', error);
      });
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{movie.title}</h1>
      <img src={movie.poster} alt={movie.title} style={{ width: '300px', borderRadius: '8px' }} />
      <p>{movie.description}</p>
      <p><strong>Rating:</strong> {movie.rating}</p>
      <p><strong>Duration:</strong> {movie.duration} minutes</p>
      <a href={`/booking/${movie.id}`} style={{ color: '#007bff', fontSize: '18px' }}>Book Tickets</a>
    </div>
  );
};

export default MovieDetails;