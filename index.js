const express = require('express');
const escape = require('escape-html');
const app = express();

app.get('/search', (req, res) => {
  const query = req.query.q;
  // VULNERABILITY FIXED: User input is now HTML-escaped before being sent to the browser
  res.send("<h1>Search results for: " + escape(query) + "</h1>");
});