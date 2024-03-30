import axios from "axios";
import React, { useEffect, useState } from "react";

function GetData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/new/show-data")
      .then((response) => {
        // setData(response);

        setData(response.data.data);

        // console.log("Resp = ", response);
        // console.log("Resp data = ", response.data);
        // console.log("Resp data = ", response.data.data);
      })
      .catch((error) => {
        console.log("Err is ", error);
      });
  });

  return (
    <div>
      <h1>Get Data</h1>

      {data.map((itm) => {
        return (
          <>
            <h2>{itm.title}</h2>
            <h2>{itm.description}</h2>
            <h3>{itm.image}</h3>
            {/* <img src={itm.image} alt="img" />
            
            ** ye nhi chalega bcz src me hm path nhi de rhe hai
            */}
          </>
        );
      })}
    </div>
  );
}

export default GetData;
