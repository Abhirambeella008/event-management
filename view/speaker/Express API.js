// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB (replace 'your-mongodb-uri' with your actual MongoDB URI)
mongoose.connect('your-mongodb-uri', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

// Define Speaker schema
const speakerSchema = new mongoose.Schema({
  name: String,
  phone: String,
  address: String,
});

const Speaker = mongoose.model('Speaker', speakerSchema);

app.use(bodyParser.json());
app.use(cors());

// Get all speakers
app.get('/api/speakers', async (req, res) => {
  try {
    const speakers = await Speaker.find();
    res.json(speakers);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Add a new speaker
app.post('/api/speakers', async (req, res) => {
  const { name, phone, address } = req.body;

  try {
    const newSpeaker = new Speaker({ name, phone, address });
    await newSpeaker.save();
    res.json(newSpeaker);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
