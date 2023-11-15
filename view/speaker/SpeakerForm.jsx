// SpeakerForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const SpeakerForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send speaker data to the API
    axios.post('/api/speakers', { name, phone, address })
      .then(response => {
        console.log('Speaker added successfully:', response.data);
        // You might want to update the list of speakers after adding a new one
      })
      .catch(error => console.error('Error adding speaker:', error));
  };

  return (
    <div>
      <h2>Add Speaker</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Phone:</label>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />

        <label>Address:</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />

        <button type="submit">Add Speaker</button>
      </form>
    </div>
  );
};

export default SpeakerForm;
