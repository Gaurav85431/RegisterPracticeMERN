import axios from "axios";
import React, { useState } from "react";

function GetOneImage() {
  const [image, setImage] = useState("");
  // const [image, setImage] = useState([]);
  // const [id, setId] = useState("66011e04a18dafcd81e377da");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .get(`http://localhost:8000/api/new/show-image/66011e04a18dafcd81e377da`)
      // .get(`http://localhost:8000/api/new/show-image/${id}`)
      .then((response) => {
        setImage(response.data.data);
        console.log("resp=======", response);
        console.log("resp data===========", response.data);

        console.log("resp data data============", response.data.data);

        // setImage(id);
      })
      .catch((error) => {
        console.log("Err is ", error);
      });
  };

  return (
    <div>
      <h1>Show image Data</h1>
      {/* 
      {image.map((itm) => {
        return (
          <>
            <h3>{itm.image}</h3>
            <img src={itm.image} alt="img" />
          </>
        ); 
      })}
        */}

      <img src={image} alt="immmmggggggggg" />
    </div>
  );
}

export default GetOneImage;
