// server.js
// ... (previous code)

// API endpoint to get users with sorting
app.get('/api/users', async (req, res) => {
    try {
      let sortField = req.query.sortBy || 'name'; // Default sorting by name
      const sortOrder = req.query.sortOrder === 'desc' ? -1 : 1;
  
      // Validate sortField to prevent injection
      const allowedSortFields = ['name', 'phone', 'address'];
      if (!allowedSortFields.includes(sortField)) {
        return res.status(400).json({ error: 'Invalid sortBy parameter' });
      }
  
      const users = await User.find().sort({ [sortField]: sortOrder });
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // ... (rest of the code)
  