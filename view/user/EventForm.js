// EventForm.js
import React, { useState } from 'react';
import axios from 'axios';

const EventForm = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send data to the server to create a new event
    axios.post('/api/events', { name, date })
      .then(response => {
        console.log('Event created:', response.data);
        // Optionally, you can redirect or update the list of events
      })
      .catch(error => console.error('Error creating event:', error));
  };

  return (
    <div>
      <h2>Create Event</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Event Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Event Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <br />
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default EventForm;
