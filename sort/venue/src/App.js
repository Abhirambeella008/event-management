// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [venues, setVenues] = useState([]);
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    // Fetch venues from the backend API with sorting options
    axios.get(`http://localhost:5000/api/venues?sortBy=${sortBy}&sortOrder=${sortOrder}`)
      .then(response => setVenues(response.data))
      .catch(error => console.error(error));
  }, [sortBy, sortOrder]);

  const handleSortChange = (column) => {
    // Toggle sorting order if clicking on the same column
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('asc');
    }
  };

  return (
    <div>
      <h1>Event Management</h1>
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSortChange('name')}>Name</th>
            <th onClick={() => handleSortChange('phone')}>Phone</th>
            <th onClick={() => handleSortChange('address')}>Address</th>
          </tr>
        </thead>
        <tbody>
          {venues.map(venue => (
            <tr key={venue._id}>
              <td>{venue.name}</td>
              <td>{venue.phone}</td>
              <td>{venue.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
