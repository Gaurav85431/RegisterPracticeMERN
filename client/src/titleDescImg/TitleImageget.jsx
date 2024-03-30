import axios from "axios";
import React, { useEffect, useState } from "react";

const TitleImageget = () => {
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")

      .then((response) => {
        console.log("Response from server: imggggggg---- ", response);
        console.log("Response data from server: imggggggg---- ", response.data);
        console.log(
          "Response 1st data from server: imggggggg---- ",
          response.data[0]
        );
        console.log(
          "Response 1st data url  from server: imggggggg---- ",
          response.data[0].url
        );
        // setImageURL(response.data[0].url);

        setImageURL(response.data[5].url);

        // setImageURL(Array.isArray(response.data.url) ? response.data.url : []);

        // setImageURL(response.data.slice(0, 10));
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }, []);

  return (
    <div>
      <h1>TitleImageget</h1>
      <h1>Image Component</h1>

      {imageURL && <img src={imageURL} alt="Fetched Image" />}

      {/* {imageURL.map((itm, index) => (
        <div key={index}>
          <img src={itm.image} />
        </div>
      ))} */}
    </div>
  );
};

export default TitleImageget;

// ******************************
