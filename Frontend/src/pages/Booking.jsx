// src/pages/Booking.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {
  const { id } = useParams();
  const [tickets, setTickets] = useState(1);

  const handleBooking = () => {
    alert(`Booking ${tickets} ticket(s) for movie ID ${id}`);
  };

  return (
    <div>
      <h1>Book Tickets for Movie ID {id}</h1>
      <div>
        <label>Number of Tickets: </label>
        <input
          type="number"
          value={tickets}
          onChange={(e) => setTickets(Number(e.target.value))}
          min="1"
          max="10"
        />
      </div>
      <button onClick={handleBooking} style={{ marginTop: '10px' }}>Book Now</button>
    </div>
  );
};

export default Booking;