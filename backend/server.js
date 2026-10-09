require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err.message));

const Note = mongoose.model(
  "Note",
  new mongoose.Schema({ text: { type: String, required: true } }, { timestamps: true })
);

// Read all notes
app.get("/api/notes", async (req, res) => {
  const notes = await Note.find().sort({ createdAt: -1 });
  res.json(notes);
});

// Create a note
app.post("/api/notes", async (req, res) => {
  if (!req.body.text) return res.status(400).json({ message: "Text is required" });
  const note = await Note.create({ text: req.body.text });
  res.status(201).json(note);
});

// Edit a note
app.put("/api/notes/:id", async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id))
    return res.status(400).json({ message: "Invalid id" });
  const note = await Note.findByIdAndUpdate(
    req.params.id,
    { text: req.body.text },
    { new: true }
  );
  if (!note) return res.status(404).json({ message: "Note not found" });
  res.json(note);
});

// Delete a note
app.delete("/api/notes/:id", async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id))
    return res.status(400).json({ message: "Invalid id" });
  await Note.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
