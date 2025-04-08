import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/movies/${id}`);
        setMovie(res.data);
      } catch (err) {
        console.error("Error fetching movie details:", err);
      }
    };

    fetchMovie();
  }, [id]);

  if (!movie) {
    return <div style={{ padding: '20px', fontSize: '18px' }}>Loading...</div>;
  }

  return (
    <>
      <div style={{ maxWidth: '800px', margin: '40px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '10px' }}>
        <img 
          src={movie.poster} 
          alt={movie.title} 
          style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '10px' }}
        />
        <h2 style={{ marginTop: '20px', fontSize: '28px' }}>{movie.title}</h2>
        <p><strong style={{ fontWeight: 'bold', color: '#333' }}>Genre:</strong> <span style={{ fontWeight: 'bold' }}>{movie.genre}</span></p>
        <p><strong>Duration:</strong> {movie.duration} minutes</p>
        <p><strong>Language:</strong> {movie.language}</p>
        <p><strong>Rating:</strong> {movie.rating}</p>

        <div style={{ marginTop: '20px' }}>
          <strong>Showtimes:</strong>
          <ul>
            {movie.showtimes.map((time, index) => (
              <li key={index}>{new Date(time).toLocaleString()}</li>
            ))}
          </ul>
        </div>

        <button
          onClick={() => navigate(`/booking/${movie.id}`)}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: 'red',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#cc0000'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'red'}
        >
          Book Now
        </button>
      </div>

      {/* Optional footer similar to BookMyShow */}
      <footer style={{ backgroundColor: '#1f1f1f', color: '#aaa', padding: '30px 0', marginTop: '60px', textAlign: 'center', fontSize: '14px' }}>
        <p>Movies Now Showing | Top Cinemas | Upcoming Movies</p>
        <p>Subscribe to newsletter | Contact us | Customer Care 24/7</p>
        <p>© 2025 BookMyShow Clone</p>
      </footer>
    </>
  );
};

export default MovieDetails;
