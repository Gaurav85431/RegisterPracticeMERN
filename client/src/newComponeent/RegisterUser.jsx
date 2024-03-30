import React, { useState } from "react";
import axios from "axios";

function RegisterUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  function handleImageChange(e) {
    const file = e.target.files[0];
    setImage(file);

    // setImage(e.target.files[0]);
  }

  async function handleSubmit(e) {
    console.log("Handle submit called");

    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("image", image);

      const response = await axios.post(
        "http://localhost:8000/api/new/register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response) {
        console.log("User Register", response.data);
      } else {
        console.log("User Registration failed");
      }
    } catch (error) {
      console.log("error is ", error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>RegisterUser</h1>
        <br />
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <label>image</label>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
        />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default RegisterUser;
