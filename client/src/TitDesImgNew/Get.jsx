// fetch se
/*
import React, { useState } from "react";

function Get() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);

  return <div></div>;
}

export default Get;
*/
// *********************************************************************************
/*
import React, { useState, useEffect } from "react";

function Get() {
  const [imageData, setImageData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/new/getData");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setImageData(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {error && <p>Error: {error}</p>}
      {imageData && (
        <div>
          <h1>Title: {imageData.title}</h1>
          <img src={imageData.imageUrl} alt={imageData.title} />
        </div>
      )}
    </div>
  );
}

export default Get;

*/

/*************************************************************3rd way */
import React, { useState, useEffect } from "react";

function Get() {
  const [studentName, setStudentName] = useState("");
  const [studentImage, setStudentImage] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/new/getData");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("data is ---" + data.allData);
        // // console.log("data is 2---" + data["data"]);
        // console.log("data is 23---" + data.allData.title);
        // console.log("data is 56---" + data.data[0].title);
        console.log("data is 3---" + data.message);
        console.log("My title is " + data.data[0].title);
        console.log("My Image is from get " + data.data[0].image);

        //

        // data.forEach((obj) => {
        //   const title = obj.title;
        //   const image = obj.image;
        //   console.log("Title:", title);
        //   console.log("Image:", image);
        // });

        //

        setStudentName(data.data[0].title);
        setStudentImage(data.data[0].image);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>get data is </h1>

      {error && <p>Error: {error}</p>}
      {studentName && (
        <div>
          <h1>Name: {studentName}</h1>
          <img src={studentImage} />
          <img src="https://th.bing.com/th?id=OAID.3232d89b10faf807b63d60d99dd25b7e&w=180&h=120&c=2&rs=1&qlt=80&o=6&cdv=1&dpr=1.3&pid=16.1" />
          <img src="E:\FRONT END DEVELOPMENT DEC23\MY PROECT\MY Practice MERN SELF\Register\server\public\a.jpg" />
        </div>
      )}
    </div>
  );
}

export default Get;
