// events.js
const express = require('express');
const router = express.Router();
const Event = require('../models/event'); // Assuming you have a 'Event' model

// Get all events
router.get('/events', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new event
router.post('/events', async (req, res) => {
  const event = new Event({
    name: req.body.name,
    date: req.body.date,
  });

  try {
    const newEvent = await event.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
