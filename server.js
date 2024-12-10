const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Example route for a custom server endpoint
  server.get('/custom', (req, res) => {
    return res.send('Hello from custom route!');
  });

  // Fallback to Next.js for handling pages and static assets
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  // Start the server on a specified port
  const port = process.env.PORT || 3000;
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
