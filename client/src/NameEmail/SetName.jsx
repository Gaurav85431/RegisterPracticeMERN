import React, { useState } from "react";

const SetName = () => {
  const [name, setNm] = useState("");
  const [email, setEmail] = useState("");

  const handleButton = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/new/set-Name", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });
      console.log("Resp is " + response);

      if (response.ok) {
        alert("Data inserted ");
        console.log("res name is " + response.ok);
      } else {
        alert("Data not inserted");
        console.log("else resp name " + response);
      }
    } catch (error) {
      alert("Error " + error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleButton}>
        <label>name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setNm(e.target.value)}
        />
        <label>email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* <button onClick={handleButton}>Save</button> */}
        <button>Save</button>
      </form>
    </div>
  );
};

export default SetName;
