// import React from 'react'

// function RandomShow() {
//   return (
//     <div>RandomShow</div>
//   )
// }

// export default RandomShow

// --------
import React, { useState, useEffect } from "react";

const RandomShow = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/new/show-data");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        console.log("jsonsddata ", jsonData);
        console.log("data in josndata is ", jsonData.data);
        setData(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <img src={item.imageURL} alt={item.title} />
        </div>
      ))}
    </div>
  );
};

export default RandomShow;
