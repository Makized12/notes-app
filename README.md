# Notes App

A full-stack notes app built with the MERN stack (MongoDB, Express, React, Node.js).
Add, edit and delete notes. Everything is saved permanently in MongoDB.

## Features
- Create, read, update and delete notes
- REST API built with Express
- Data stored in MongoDB Atlas using Mongoose
- React frontend built with Vite

## API endpoints
| Method | Endpoint | What it does |
|--------|----------|--------------|
| GET | /api/notes | Get all notes |
| POST | /api/notes | Add a note |
| PUT | /api/notes/:id | Edit a note |
| DELETE | /api/notes/:id | Delete a note |

## Run it locally

You need Node.js and a free MongoDB Atlas cluster.

1. Backend. Create a file named .env inside the backend folder:

        MONGODB_URI=your_connection_string_here

   Then run:

        cd backend
        npm install
        node server.js

   The API runs on http://localhost:5000

2. Frontend. In a second terminal:

        cd frontend
        npm install
        npm run dev

   Open http://localhost:5173

## Tech stack
React (Vite), Node.js, Express, MongoDB (Mongoose)
