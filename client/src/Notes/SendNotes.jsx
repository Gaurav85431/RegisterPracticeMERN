import axios from "axios";
import React, { useState } from "react";

function SendNotes() {
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:8000/api/new/create-note", { title, notes })
      .then((response) => {
        alert("Data inserted " + response);
        console.log("Res from axios is " + response);
      })
      .catch((error) => {
        alert("Error occur " + error);
        console.log("err is axios se " + error);
      });
  };

  return (
    <div>
      <label>Title</label>
      <input
        type="text"
        value={title}
        name="title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <label>Notes</label>
      <input
        type="text"
        value={notes}
        name="notes"
        onChange={(e) => setNotes(e.target.value)}
      />

      <button onClick={handleSubmit}>save</button>
    </div>
  );
}

export default SendNotes;
