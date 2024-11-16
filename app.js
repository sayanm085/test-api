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

let data= 
    [{
        "_id": {
          "$oid": "66a67c2f95994a866640c77e"
        },
        "fastname": "Sayan",
        "lastname": "Mondal",
        "username": "sayanm085",
        "gander": "Male",
        "email": "sayanm091@gmail.com",
        "password": "$2b$10$Ot7E1QnpobfLxd6Ngo6TGOTJ2AUpKahLGsrxlkGWn10FWF.CXqMcC",
        "profilePicture": "profilePicture-e54cd567a2a14e0514198e6d66db0f30.jpg",
        "profilebanner": "profilebanner-94474a1ceead28a3b6efa524a863ee51.jpg",
        "followers": {
          "followerNumber": 1,
          "followerBy": [
            {
              "$oid": "66a67c5695994a866640c78f"
            }
          ]
        },
        "following": {
          "followingNumber": 1,
          "followingBy": [
            {
              "$oid": "66a67c5695994a866640c78f"
            }
          ]
        },
        "posts": [
          {
            "$oid": "66bb41a1b2126aabc3589e42"
          },
          {
            "$oid": "66c8ab5b4abb27b72321a205"
          }
        ],
        "Location": "India",
        "joinedAt": {
          "$date": "2024-07-28T17:13:19.756Z"
        },
        "__v": 0,
        "about": "Hey there! I am using MataBook",
        "contact": "9775845588",
        "website": "www.sayanthecoder.in",
        "likeContent": {
          "likeContentBy": [
            {
              "$oid": "66bb41a1b2126aabc3589e42"
            },
            {
              "$oid": "66bce3a546cb44a661794b76"
            },
            {
              "$oid": "66c0da01cf2598ca89eec8b4"
            },
            {
              "$oid": "66c8ab5b4abb27b72321a205"
            }
          ],
          "likeContentNumber": 5
        },
        "savepost": {
          "savepostBy": [
            {
              "$oid": "66bb41a1b2126aabc3589e42"
            },
            {
              "$oid": "66c8ab5b4abb27b72321a205"
            }
          ],
          "savepostNumber": 2
        }
      },
      {
        "_id": {
          "$oid": "66a67c5695994a866640c78f"
        },
        "fastname": "Sanu",
        "lastname": "Mondal",
        "username": "sayanm091",
        "gander": "Male",
        "email": "sasa@gdsg.gh",
        "password": "$2b$10$plOKWYSG9wPsy.qi/ZH6.u7D9NE0VrqQgpKCkWWL9AJxI1jNpyAD.",
        "profilePicture": "profilePicture-74bd1f90e1688f96d228ec93eba0b379.jpg",
        "profilebanner": "profilebanner-1b2626c02bfda1dade0f85c92b3a6f00.jpg",
        "followers": {
          "followerNumber": 1,
          "followerBy": [
            {
              "$oid": "66a67c2f95994a866640c77e"
            }
          ]
        },
        "following": {
          "followingNumber": 1,
          "followingBy": [
            {
              "$oid": "66a67c2f95994a866640c77e"
            }
          ]
        },
        "posts": [
          {
            "$oid": "66bce3a546cb44a661794b76"
          },
          {
            "$oid": "66c0da01cf2598ca89eec8b4"
          }
        ],
        "joinedAt": {
          "$date": "2024-07-28T17:13:58.753Z"
        },
        "__v": 0,
        "about": "Hey there! I am web-devlaper",
        "website": "www.ui-ux.com",
        "contact": "977758445",
        "Location": "usa",
        "likeContent": {
          "likeContentBy": [
            {
              "$oid": "66bb41a1b2126aabc3589e42"
            },
            {
              "$oid": "66bce3a546cb44a661794b76"
            },
            {
              "$oid": "66c0da01cf2598ca89eec8b4"
            }
          ],
          "likeContentNumber": 1
        },
        "savepost": {
          "savepostBy": [
            {
              "$oid": "66bce3a546cb44a661794b76"
            },
            {
              "$oid": "66c0da01cf2598ca89eec8b4"
            }
          ],
          "savepostNumber": 2
        }
      }]

// Define a route that renders the "login" view
app.get('/', (req, res) => {
  res.render('login');
});

app.get('/api', (req, res) => {

    res.json(data);
    
    
})

export default app;
