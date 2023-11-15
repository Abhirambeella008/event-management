import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VenueList = () => {
  const [venues, setVenues] = useState([]);

  useEffect(() => {
    // Fetch venues from the server
    axios.get('/api/venues')
      .then(response => setVenues(response.data))
      .catch(error => console.error('Error fetching venues: ', error));
  }, []);

  return (
    <div>
      <h1>Venue List</h1>
      <ul>
        {venues.map(venue => (
          <li key={venue._id}>
            {venue.name} - {venue.address}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VenueList;
