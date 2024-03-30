import React, { useState } from "react";

function Notes() {
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:8000/api/new/create-note",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, notes }),
        }
      );

      if (response.ok) {
        alert("Notes saved");
      } else {
        alert("Note not save");
      }
    } catch (error) {
      alert("An error occured at " + error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title</label> <br />
        <input
          type="text"
          value={title}
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />
        <label>Notes</label>
        <input
          type="text"
          value={notes}
          name="notes"
          onChange={(e) => setNotes(e.target.value)}
        />
        <button type="submit">Create Notes</button>
      </form>
    </div>
  );
}

export default Notes;
