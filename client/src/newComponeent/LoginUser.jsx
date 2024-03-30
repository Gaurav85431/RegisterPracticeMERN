import React, { useState } from "react";
import axios from "axios";

// chat gpt

function LoginUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/new/login", {
        email,
        password,
      });

      const { success, data, message } = response.data;

      if (success) {
        const token = data.token;
        localStorage.setItem("token", token);
      } else {
        setError(message);
      }
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginUser; /*

/*##################################################*
// OLD WLA

function LoginUser() {
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
    e.preventDefault();
    try {
      const resp = await fetch("http://localhost:8000/api/new/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(login),
      });

      // const { success, data } = resp.data;
      // console.log(data.token, "======token");
      console.log("TOken ", resp.data);

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

export default LoginUser; /*

/*#####################################################*/ /*

/*
function LoginUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    console.log("emil is ", e.target.value);
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    console.log("text ii", e.target.value);
    setPassword(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      // const formData = new FormData();

      // formData.append("email", email);
      // formData.append("password", password);

      // console.log("formdata is ", formData);

      const response = await axios.post("http://127.0.0.1:8000/api/new/login", {
        email,
        password,
      });

      /*

      const response = await fetch("http://127.0.0.1:8000/api/new/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
*
      console.log("response is", response);
      console.log("Res.data is ", response.data);
      if (!response.ok) {
        alert("Login => " + response.redirected);
      } else {
        alert("Login error", response.message);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <h1>Login</h1>
        <label>Email</label>
        <input
          type="text"
          value={email}
          name="email"
          onChange={handleEmailChange}
        />

        <label>Password</label>
        <input
          type="text"
          value={password}
          name="password"
          onChange={handlePasswordChange}
        />

        <br />
        <br />
        <button>Login</button>
      </form>
    </div>
  );
}

export default LoginUser; /*

/********************************************************************************************************************
**********************************************************



import React, { useState } from "react";
import axios from "axios";

function LoginUser() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    // const email = e.target.email;
    // const password = e.target.password;
    const { name, value } = e.target;

    setFormData({
      ...formData,

      [name]: value,
      // [email]: email,
      // [password]: password,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/new/login",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      /*
      const response = await fetch('"http://localhost:8000/api/new/login', {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
*/ /*
if (response.ok) {
  alert("Login");
} else {
  alert("Login error", response);
}
} catch (error) {
alert(error);
}
};

return (
<div>
<form onSubmit={handleFormSubmit}>
  <h1>Login</h1>
  <label>Email</label>
  <input
    type="text"
    value={formData.email}
    name="email"
    onChange={handleChange}
  />

  <label>Password</label>
  <input
    type="text"
    value={formData.password}
    name="password"
    onChange={handleChange}
  />

  <br />
  <br />
  <button>Login</button>
</form>
</div>
);
}

export default LoginUser;








*****************************************************************************************************************************************************************************/
