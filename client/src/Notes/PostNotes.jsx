import axios from "axios";
import React, { useState } from "react";

function PostNotes() {
  // const data = { title: "", notes: "" };
  // const [inputData, setInputData] = useState(data);

  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");

  // const handleData = (e) => {
  //   // Jo v inputData hai usko waise ka waise rkho aur jo v e.target.name hai usme e.target.value ka value ko set karo

  //   // setInputData({ ...inputData, [e.target.name]: e.target.value });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // axios.post  2 parameter lega 1st to api aur 2nd me hme jo v data ko post krana hia usko send kar denge. Hme inputData ko post krana hai
    await axios
      // .post("http://localhost:8000/api/new/create-note", {
      //   title: "abc",
      //   notes: "youo",
      // })
      // .post("http://localhost:8000/api/new/create-note", inputData)
      .post("http://localhost:8000/api/new/create-note", { title, notes })
      .then((response) => {
        console.log("data is ", response);
      })
      .catch((error) => {
        console.log("Error is ", error);
      });
  };

  return (
    <div>
      <label>title</label>
      <input
        type="text"
        name="title"
        // value={inputData.title}
        value={title}
        // onChange={handleData}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <label>notes</label>
      <input
        type="text"
        name="notes"
        // value={inputData.notes}
        // onChange={handleData}
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default PostNotes;
