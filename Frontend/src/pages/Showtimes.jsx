// src/pages/Showtimes.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Showtimes = () => {
  const { id } = useParams(); // movie id from URL
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/movies/${id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  const sampleTheaters = [
    {
      name: "Cinepolis: BSR Mall, OMR",
      timings: ["10:40 PM"],
      ticketType: "M-Ticket",
      food: true,
      cancellable: false,
    },
    {
      name: "Miraj Cinemas: Sekaran Mall",
      timings: ["10:40 PM"],
      ticketType: "M-Ticket",
      food: true,
      cancellable: true,
    },
    {
      name: "Rohini Silver Screens: Koyambedu",
      timings: ["11:45 PM"],
      ticketType: "M-Ticket",
      food: true,
      cancellable: false,
    }
  ];

  return (
    <div style={{ padding: '20px' }}>
      {movie ? (
        <>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>{movie.title}</h2>
          <p>{movie.language} | {movie.genre} | {movie.duration}</p>
          <hr style={{ margin: '20px 0' }} />

          {sampleTheaters.map((theater, index) => (
            <div key={index} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '10px', marginBottom: '15px' }}>
              <h3>{theater.name}</h3>
              <p>{theater.ticketType} {theater.food && "| Food & Beverage"}</p>
              <p style={{ fontSize: '14px' }}>{theater.cancellable ? "Cancellation available" : "Non-cancellable"}</p>
              <div style={{ marginTop: '10px' }}>
                {theater.timings.map((time, i) => (
                  <button key={i} style={{
                    marginRight: '10px',
                    padding: '8px 16px',
                    backgroundColor: '#4caf50',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                  }}>
                    {time}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Showtimes;
