import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create an Express application
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

// Set the view engine (e.g., EJS, Pug, etc.)
app.set('view engine', 'ejs');
// Set the path to the views directory
app.set('views', path.join(__dirname, 'views'));

// Define a route that renders the "login" view
app.get('/', (req, res) => {
  res.render('login');
});

export default app;
