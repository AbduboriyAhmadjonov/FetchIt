const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Common middleware
const commonMiddleware = require('./middleware/common');
const rateLimiter = require('./middleware/rateLimiter');

// Routes
const scrapeRoutes = require('./routes/scrape');

app.use(commonMiddleware);
app.use(rateLimiter);
app.use('/', scrapeRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

app.listen(PORT, () => {
  console.log(`Web Scraping API server running on port ${PORT}`);
  console.log(`Access the API at http://localhost:${PORT}`);
});
