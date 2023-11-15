// server.js
// ... (previous code)

// Define the Venue schema
const venueSchema = new mongoose.Schema({
    name: String,
    phone: String,
    address: String,
  });
  
  // Create a model based on the schema
  const Venue = mongoose.model('Venue', venueSchema);
  
  // API endpoint to get venues with sorting
  app.get('/api/venues', async (req, res) => {
    try {
      const { sortBy, sortOrder } = req.query;
  
      const sortOptions = {};
      if (sortBy && sortOrder) {
        sortOptions[sortBy] = sortOrder === 'asc' ? 1 : -1;
      }
  
      const venues = await Venue.find().sort(sortOptions);
      res.json(venues);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // ... (remaining code)
  