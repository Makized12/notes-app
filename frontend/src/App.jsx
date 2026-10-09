import { useEffect, useState } from "react";
import "./App.css";

const API = "http://localhost:5000/api/notes";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  const [error, setError] = useState("");

  async function loadNotes() {
    try {
      const res = await fetch(API);
      setNotes(await res.json());
      setError("");
    } catch {
      setError("Cannot reach the server. Is the backend running?");
    }
  }

  useEffect(() => {
    loadNotes();
  }, []);

  async function addNote(e) {
    e.preventDefault();
    if (!text.trim()) return;
    await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    setText("");
    loadNotes();
  }

  async function saveEdit(id) {
    if (!editText.trim()) return;
    await fetch(`${API}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: editText }),
    });
    setEditingId(null);
    loadNotes();
  }

  async function deleteNote(id) {
    await fetch(`${API}/${id}`, { method: "DELETE" });
    loadNotes();
  }

  return (
    <div className="app">
      <h1>Notes App</h1>

      <form className="add-form" onSubmit={addNote}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write a note..."
        />
        <button type="submit">Add</button>
      </form>

      {error && <p className="error">{error}</p>}

      <ul className="notes">
        {notes.map((note) => (
          <li key={note._id}>
            {editingId === note._id ? (
              <>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => saveEdit(note._id)}>Save</button>
                <button className="secondary" onClick={() => setEditingId(null)}>
                  Cancel
                </button>
              </>
            ) : (
              <>
                <span>{note.text}</span>
                <button
                  className="secondary"
                  onClick={() => {
                    setEditingId(note._id);
                    setEditText(note.text);
                  }}
                >
                  Edit
                </button>
                <button className="danger" onClick={() => deleteNote(note._id)}>
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>

      {notes.length === 0 && !error && <p className="empty">No notes yet. Add your first one!</p>}
    </div>
  );
}
