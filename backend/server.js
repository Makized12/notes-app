const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let notes = [{ id: 1, text: "My first note" }];
let nextId = 2;

// Read all notes
app.get("/api/notes", (req, res) => {
  res.json(notes);
});

// Create a note
app.post("/api/notes", (req, res) => {
  const note = { id: nextId++, text: req.body.text };
  notes.push(note);
  res.status(201).json(note);
});

// Edit a note
app.put("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n.id === Number(req.params.id));
  if (!note) return res.status(404).json({ message: "Note not found" });
  note.text = req.body.text;
  res.json(note);
});

// Delete a note
app.delete("/api/notes/:id", (req, res) => {
  notes = notes.filter((n) => n.id !== Number(req.params.id));
  res.json({ message: "Deleted" });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
