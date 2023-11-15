// SpeakerList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SpeakerList = () => {
  const [speakers, setSpeakers] = useState([]);

  useEffect(() => {
    // Fetch speakers from the API when the component mounts
    axios.get('/api/speakers')
      .then(response => setSpeakers(response.data))
      .catch(error => console.error('Error fetching speakers:', error));
  }, []);

  return (
    <div>
      <h2>Speaker List</h2>
      <ul>
        {speakers.map(speaker => (
          <li key={speaker._id}>
            {speaker.name} - {speaker.phone} - {speaker.address}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpeakerList;
