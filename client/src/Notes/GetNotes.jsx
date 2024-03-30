import axios from "axios";
import React, { useEffect, useState } from "react";

function GetNotes() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/new/get-notes")
      .then((response) => {
        console.log("data aree--", response.data.data.allData[0].notes);
        console.log("data=== aree--", response.data.data.allData);
        setData(response.data.data.allData);
      })
      .catch((error) => {
        console.log("AN err occur ", error);
      });
  }, []);

  return (
    <div>
      {data.map((itm) => {
        return (
          <>
            <h2>{itm._id}</h2>
            <h2>{itm.notes}</h2>;
          </>
        );
      })}
    </div>
  );
}

export default GetNotes;
