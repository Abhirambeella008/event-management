// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    // Fetch users from the backend API with sorting
    axios.get(`http://localhost:5000/api/users?sortBy=${sortBy}&sortOrder=${sortOrder}`)
      .then(response => setUsers(response.data))
      .catch(error => console.error(error));
  }, [sortBy, sortOrder]);

  const handleSort = (field) => {
    setSortBy(field);
    setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
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
          {users.map(user => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td>{user.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
