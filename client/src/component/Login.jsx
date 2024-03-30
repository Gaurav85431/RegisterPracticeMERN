import React, { useState } from "react";

function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    // const email = req.body.email;
    // const password = req.body.password;

    const { name, value } = e.target;

    setLogin({ ...login, [name]: value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const resp = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(login),
      });

      if (resp.ok) {
        alert("Login");
      } else {
        alert("Login Failed");
      }
    } catch (error) {
      alert("Error in Login");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={setLogin.email}
          onChange={handleChange}
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={setLogin.password}
          onChange={handleChange}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
