// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [speakers, setSpeakers] = useState([]);
  const [sortBy, setSortBy] = useState(null);

  useEffect(() => {
    // Fetch speakers from the backend API with sorting
    const apiUrl = `http://localhost:5000/api/speakers${sortBy ? `?sortBy=${sortBy}` : ''}`;
    axios.get(apiUrl)
      .then(response => setSpeakers(response.data))
      .catch(error => console.error(error));
  }, [sortBy]);

  const handleSort = (column) => {
    // Toggle sorting order on each click
    setSortBy((prevSortBy) => (prevSortBy === column ? `-${column}` : column));
  };

  return (
    <div>
      <h1>Event Management</h1>
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('name')}>Name</th>
            <th onClick={() => handleSort('phone')}>Phone</th>
            <th onClick={() => handleSort('address')}>Address</th>
          </tr>
        </thead>
        <tbody>
          {speakers.map(speaker => (
            <tr key={speaker._id}>
              <td>{speaker.name}</td>
              <td>{speaker.phone}</td>
              <td>{speaker.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
