// app.js
const express = require('express');
const mongoose = require('mongoose');
const eventsRouter = require('./routes/events');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/api', eventsRouter);

mongoose.connect('mongodb://localhost:27017/your-database-name', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch(error => console.error('Error connecting to MongoDB:', error));
