import React, { useState } from "react";

function Image() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  // const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/new/insert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, mobile }),
      });

      if (response.ok) {
        alert("Data insert");
      } else {
        alert("Not insert");
      }
    } catch (error) {
      console.log("Error catch", error);
      alert("Error in catch " + error.message);
    }
  };
  // const handleImage = async (e) => {
  //   const file = e.target.files[0];
  //   setImage(file);

  //   // const setImages = new setImage();
  //   // setImages.append("image", image);
  // };

  return (
    <div>
      {/* <h1>image</h1> */}

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <label>Mobile</label>
        <input
          type="phone"
          name="mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <br />
        <br />
        {/* <label>Image</label> */}
        {/* <input type="file" name="image" value={image} onChange={handleImage} />
        <br /> */}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Image;
