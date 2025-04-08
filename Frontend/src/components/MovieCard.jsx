// src/components/MovieCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const cardStyle = {
    margin: '20px',
    width: '200px',
    height: '360px', // Adjusted for genre
    textAlign: 'center',
    border: '1px solid #ddd',
    borderRadius: '10px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
  };
  const cardHoverStyle = {
    ...cardStyle,
    transform: 'scale(1.1)',
    boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
  };

  const posterStyle = {
    width: '100%',
    height: '150px',
    objectFit: 'cover' 
  };

  const titleStyle = {
    margin: '10px 0',
    fontWeight: 'bold'
  };

  const genreStyle = {
    fontWeight: 'bold' ,
    fontSize: '14px',
    color: '#666',
    marginBottom: '4px'
  };

  const ratingStyle = {
    margin: '5px 0'
  };

  const linkStyle = {
    color: '#007bff',
    textDecoration: 'underline',
    marginBottom: '10px'
  };
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
    style={isHovered ? cardHoverStyle : cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={movie.poster} alt={`${movie.title} poster`} style={posterStyle} />
      <div>
        <h3 style={titleStyle}>{movie.title}</h3>
        <p style={genreStyle}>{movie.genre}</p>
        <p style={ratingStyle}><strong>Rating:</strong> {movie.rating}</p>
      </div>
      <Link to={`/movie/${movie.id}`} style={linkStyle}>
        View Details
      </Link>
    </div>
  );
};

export default MovieCard;
