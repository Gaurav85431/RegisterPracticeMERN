import React, { useState } from "react";

function RandomInsert() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("image", image);

      const response = await fetch(
        "http://localhost:8000/api/new/insert-data",
        {
          method: "POST",
          // headers: {
          //   "Content-Type": "application/json",
          // },
          // body: JSON.stringify({ title, description, image }),
          body: formData,
        }
      );

      // const resData = await response.data;
      // console.log("Response is " + response.ok);
      // console.log("Rspnc is " + resData);

      if (response.ok) {
        alert("Data insert Successfully");
      } else {
        // alert("Data Insertion Error so failed");

        console.log("errrrrrrrrrrrrrrrrrrrr is -================", response);
      }
    } catch (error) {
      console.log("an err occr at fe", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label>Image</label>
        <input type="file" onChange={handleImage} />

        <br />
        <br />
        <button type="submit">SEND DATA</button>
      </form>
    </div>
  );
}

export default RandomInsert;
