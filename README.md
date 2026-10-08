# Notes App

A full-stack notes app built with the MERN stack (MongoDB, Express, React, Node.js).

## Status
- Backend REST API (Node.js + Express): done, notes are stored in memory for now
- MongoDB database connection: in progress
- React frontend: coming next

## API endpoints
| Method | Endpoint | What it does |
|--------|----------|--------------|
| GET | /api/notes | Get all notes |
| POST | /api/notes | Add a note |
| PUT | /api/notes/:id | Edit a note |
| DELETE | /api/notes/:id | Delete a note |

## Run the backend

    cd backend
    npm install
    node server.js

The server runs on http://localhost:5000

## Tech stack
React, Node.js, Express, MongoDB
