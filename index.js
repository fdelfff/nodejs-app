const express = require('express');
const app = express();

app.get('/search', (req, res) => {
  const query = req.query.q;
  // VULNERABILITY: Directly sending user input back to the browser
  // This is a "Reflected Cross-Site Scripting (XSS)" vulnerability.
  res.send("<h1>Search results for: " + query + "</h1>");
});