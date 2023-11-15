import React, { useState } from 'react';
import axios from 'axios';

const VenueForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = () => {
    // Send venue data to the server
    axios.post('/api/venues', { name, phone, address })
      .then(response => console.log('Venue added successfully'))
      .catch(error => console.error('Error adding venue: ', error));
  };

  return (
    <div>
      <h1>Add Venue</h1>
      <form>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

        <label>Phone:</label>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />

        <label>Address:</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />

        <button type="button" onClick={handleSubmit}>Add Venue</button>
      </form>
    </div>
  );
};

export default VenueForm;
