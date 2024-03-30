import React, { useState } from "react";

function NmAge() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8000/api/new/vote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, age }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Success");
        console.log(data);
      } else {
        alert("Fail");
      }
    } catch (error) {
      alert("Error occur " + error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Age</label>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default NmAge;
