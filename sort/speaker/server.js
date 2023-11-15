// server.js
// ... (previous code)

// API endpoint to get speakers with sorting
app.get('/api/speakers', async (req, res) => {
    try {
      const { sortBy } = req.query;
      const sortOptions = { [sortBy]: 1 }; // 1 for ascending order, -1 for descending order
      
      const speakers = await Speaker.find().sort(sortOptions);
      res.json(speakers);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // ... (remaining code)
  