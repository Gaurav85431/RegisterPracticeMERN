/*
import axios from "axios";
import React, { useEffect, useState } from "react";

function TitleGet() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/new/show-datas")
      .then((response) => {
        console.log("Response from server of title description is " + response);

        console.log(
          "Response ka data from server of title description is 55 " +
            response.data.message
        );
        console.log(
          "Response ka data from server of title description is 585 " +
            response.data.data
        );
        // setData(response.data.data);
        console.log(
          "All data of title and desc 231231= " + response.data.data.mydata[0]
        );
        console.log("All data of title and desc21= " + response.data.data[0]);
        console.log(
          "All data of title and desc847425= " + response.data.data.mydata
        );

        setData(response.data.data);
      })
      .catch((error) => {
        console.log("error  is " + error);
      });
  }, []);

  return (
    <div>
      <h1>Get title </h1>
      {/* {data.map((itm) => {
        return (
          <>
            <h1>{itm.title}</h1>
            <h1>{itm.description}</h1>
            <h1>{itm.image}</h1>
          </>
        );
      })} * /}
    </div>
  );
}

export default TitleGet;
*/

// -----------------------------------------------------------------------------------------------------
/*
import axios from "axios";
import React, { useEffect, useState } from "react";

function TitleGet() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/new/show-datas")
      .then((response) => {
        console.log("Response from server: ", response);

        console.log("Response data: ", response.data);

        setData(response.data);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }, []);

  return (
    <div>
      <h1>Get title</h1>

      {data.map((itm, index) => (
        <div key={index}>
          <h2>Title: {itm.title}</h2>
          <p>Description: {itm.description}</p>

          <img src={itm.image} />
        </div>
      ))}

      {/* {Array.isArray(data) &&
        data.map((itm, index) => (
          <div key={index}>
            <h2>Title: {itm.title}</h2>
            <p>Description: {itm.description}</p>
            <img src={itm.image} alt={itm.title} />
          </div>
        ))} * /}
    </div>
  );
}

export default TitleGet;
*/

/**------------------------------------- chat gpt se ----------------- */
import axios from "axios";
import React, { useEffect, useState } from "react";

function TitleGet() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/new/show-datas")
      .then((response) => {
        console.log("Response from server: ", response);
        console.log("Response data: ", response.data);

        console.log(
          "mydata resp from title, desc,img is " + response.data.mydata
        );
        console.log("title,desc,imga " + response.data.data.mydata[0]);
        console.log("title,desc,img form message of " + response.data.message);
        console.log("title,desc,img form success of " + response.data.success);
        console.log(
          "title,desc,img form data of " + response.data.data.mydata[0].title
        );

        // Check if response data is an array, otherwise default to an empty array
        // setData(Array.isArray(response.data.data) ? response.data.data : []);
        setData(
          Array.isArray(response.data.data.mydata)
            ? response.data.data.mydata
            : []
        );
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }, []);

  return (
    <div>
      <h1>Get title</h1>
      {data.map((itm, index) => (
        <div key={index}>
          <h2>Title: {itm.title}</h2>
          <p>Description: {itm.description}</p>
          <img src={itm.image} />
        </div>
      ))}
    </div>
  );
}

export default TitleGet;
