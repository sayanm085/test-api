import express from 'express';
import path from 'path';

const app = express();

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Set the view engine (e.g., EJS, Pug, etc.)
app.set('view engine', 'ejs');

// Define a route that renders the "login" view
app.get('/login', (req, res) => {
  res.render('login');
});

export default app;