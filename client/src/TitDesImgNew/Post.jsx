// fetch se

import React, { useState } from "react";

function Post() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/new/insertData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, image }),
      });

      if (response) {
        console.log("ALl data from response is ", response);

        alert("data saved");
      } else {
        alert("Data not saved");
        console.log("Not saved" + response);
      }
    } catch (error) {
      alert("error occcur");
      console.log("An err occur  ", error);
    }
  }

  return (
    <div>
      <h1>POST Title and Image</h1>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <br />
        <br />

        <label>Image</label>
        <input
          type="file"
          name="image"
          accept="image/*" /** 
          accept="image/*" attribute in the <input> element specifies that the file input should only accept files that are of type image. The /* wildcard means that any image file type is accepted, including JPEG, PNG, GIF, etc. This attribute helps in filtering the files shown in the file picker dialog to only display image files, making it easier for users to select the correct type of file. */
          onChange={(e) => {
            setImage(e.target.files);
          }}
        />

        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Post;
