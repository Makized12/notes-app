# Notes App

A full-stack notes app built with the MERN stack (MongoDB, Express, React, Node.js).

## Status
- Backend REST API (Node.js + Express): done
- MongoDB database (Mongoose + Atlas): done, notes are saved permanently
- React frontend: coming next

## API endpoints
| Method | Endpoint | What it does |
|--------|----------|--------------|
| GET | /api/notes | Get all notes |
| POST | /api/notes | Add a note |
| PUT | /api/notes/:id | Edit a note |
| DELETE | /api/notes/:id | Delete a note |

## Run the backend

Create a file named .env inside the backend folder with your own MongoDB Atlas connection string:

    MONGODB_URI=your_connection_string_here

Then run:

    cd backend
    npm install
    node server.js

The server runs on http://localhost:5000

## Tech stack
React, Node.js, Express, MongoDB (Mongoose)
