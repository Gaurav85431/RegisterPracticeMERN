/*
import React, { useEffect, useState } from "react";

function RandomDisp() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/new/show-data");

        if (!response.ok) {
          console.log("Fail to fetch data");
        }

        // const jsonData = await response.json();
        // const myjsonData = await response.json();
        // const jsonData = myjsonData.data;

        setTitle(jsonData.title);
        setDescription(jsonData.description);
        setImage(jsonData.image);

        console.log("Data is dddd ", jsonData);
        // console.log("Data is of 1st ", jsonData.data[0]);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading........</div>;
  }
  if (error) {
    return <div>Error:{error.message}</div>;
  }

  return (
    <div>
      {jsonData.map((itm) => {
        <h1>{itm.title}</h1>;
      })}

      {/* {title && (
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
          <img src={image} alt={title} />
        </div>
      )} * / }
    </div>
  );
}

export default RandomDisp;
*/
