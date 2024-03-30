import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/new/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        alert("Login");
        console.log("token is " + response.formData.token);
      } else {
        alert("Login error" + response);
      }
    } catch (error) {
      console.log(error);
      alert("Error occur in catch of login api" + error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />

        <label>Password</label>
        <input
          type="password"
          value={password}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
