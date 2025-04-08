import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const Booking = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/movies/${id}`);
        setMovie(res.data);
      } catch (err) {
        console.error('Error fetching movie:', err);
      }
    };

    fetchMovie();
  }, [id]);

  const handleSeatSelect = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  const handleConfirm = async () => {
    const bookingData = {
      movieId: movie.id,
      movieTitle: movie.title,
      time: selectedTime,
      seats: selectedSeats,
      user: localStorage.getItem("email") || "Guest",
    };
  
    try {
      await axios.post('http://localhost:3001/bookings', bookingData);
      alert('Booking confirmed!');
      setSelectedSeats([]);
      setSelectedTime(null);
    } catch (err) {
      console.error("Booking failed:", err);
      alert("Something went wrong!");
    }
  };
  

  if (!movie) return <div>Loading...</div>;

  const theaters = [
    'PVR: Heritage RSL ECR',
    'INOX: Marina Mall',
    'Rohini Silver Screens',
    'Miraj Cinemas: Sekaran Mall'
  ];

  const seats = ['A1', 'A2', 'A3', 'A4', 'A5', 'B1', 'B2', 'B3'];

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h2>{movie.title} - Book Tickets</h2>

      {theaters.map((theater, i) => (
        <div key={i} style={{ marginTop: '20px' }}>
          <h3>{theater}</h3>
          {movie.showtimes.map((time, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedTime(`${theater} - ${new Date(time).toLocaleTimeString()}`)}
              style={{
                margin: '5px',
                padding: '10px 15px',
                backgroundColor: selectedTime?.includes(theater) && selectedTime?.includes(new Date(time).toLocaleTimeString())
                  ? 'red'
                  : '#eee',
                border: '1px solid #ccc',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              {new Date(time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </button>
          ))}
        </div>
      ))}

      {selectedTime && (
        <>
          <h4 style={{ marginTop: '30px' }}>Select Seats:</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
            {seats.map((seat) => (
              <button
                key={seat}
                onClick={() => handleSeatSelect(seat)}
                style={{
                  padding: '10px',
                  backgroundColor: selectedSeats.includes(seat) ? 'green' : '#f0f0f0',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                {seat}
              </button>
            ))}
          </div>

          <button
            onClick={handleConfirm}
            style={{
              padding: '12px 24px',
              backgroundColor: 'red',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Confirm Booking
          </button>
        </>
      )}
    </div>
  );
};

export default Booking;
