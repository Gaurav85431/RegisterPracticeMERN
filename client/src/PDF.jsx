import React, { useState } from "react";

function PDF() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      /*
      const resp = await fetch("http://localhost:8000/api/new/set", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, image }),
      });
      */
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("image", image);

      const resp = await fetch("http://localhost:8000/api/new/set", {
        method: "POST",
        body: formData,
      });
      // The purpose of creating a FormData object and appending data to it is to prepare the data to be sent in a multipart/form-data format.

      const data = await resp.json();
      console.log("response is ", resp);
      console.log("Data is ", data);

      if (resp.ok) {
        // alert("Success, Data is  " + data);
        alert("Success, Data is  " + JSON.stringify(data));
      } else {
        alert("Failed ");
      }
    } catch (error) {
      alert("An err occur " + error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email</label>
        <input
          type="text"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Image</label>
        <input
          type="file"
          accept="image/*"
          name="image"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PDF;
