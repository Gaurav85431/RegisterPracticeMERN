import axios from "axios";
import React, { useState } from "react";

function TitlePost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("image", image);

      const response = await axios.post(
        "http://127.0.0.1:8000/api/new/insert-datas",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response) {
        alert("Saveed");
        console.log("Data saved");
      } else {
        alert("not save");
        console.log("Not saved");
      }
    } catch (error) {
      alert("eror");
    }
  };

  return (
    <div>
      <h1>Title Description Image</h1>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <br />
        <label>Image</label>
        <input
          type="file"
          name="image"
          // value={image}
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <br />
        <br />
        <button type="submit">Post using AXIOS</button>
      </form>
    </div>
  );
}

export default TitlePost;
