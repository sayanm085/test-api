import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import crypto from 'crypto';
let app = express();

app.use(cors({
    origin: true, // Allow all origins
    credentials: true, // Allow cookies to be sent
    allowedHeaders: ['Content-Type', 'Authorization ']
}));

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

app.get('/', (req, res) => {


res.send('Encryption Secret Token Generated');

});

app.post('/set-cookie', (req, res) => {
    res.cookie('token', 'CODE_IS_RUNNING_WALL', {
      httpOnly: true, // Ensures the cookie cannot be accessed via JavaScript
      secure: false, // Set to true for HTTPS in production
      maxAge: 1000 * 60 * 60 * 24 // Cookie expiration (1 day)
    });
    res.json({ message: 'Cookie set' });
  });

  app.get('/get-cookie', (req, res) => {
    const token = req.cookies.token; // Access cookie
    if (token) {
      res.json({ message: 'Cookie retrieved', token });
    } else {
      res.json({ message: 'No cookie found' });
    }
  });

//Routes Import
import userRoutes from './routes/user.routes.js';
import WebContent from './routes/webContent.routes.js';


//Routes Definition
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/content', WebContent);



export default app;
