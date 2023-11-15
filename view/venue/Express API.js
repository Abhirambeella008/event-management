const express = require('express');
const router = express.Router();
const Venue = require('../models/Venue'); // Create a Venue model

// Get all venues
router.get('/venues', async (req, res) => {
  try {
    const venues = await Venue.find();
    res.json(venues);
  } catch (error) {
    console.error('Error fetching venues: ', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Add a new venue
router.post('/venues', async (req, res) => {
  const { name, phone, address } = req.body;

  try {
    const newVenue = new Venue({ name, phone, address });
    await newVenue.save();
    res.json({ message: 'Venue added successfully' });
  } catch (error) {
    console.error('Error adding venue: ', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
