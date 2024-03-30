import React, { useEffect, useState } from "react";
import axios from "axios";

function GetMyImage() {
  const [datas, setDatas] = useState([]);

  // Jb v hm api call kernge axios se to usko useEffect ke under hi call karenge.
  useEffect(() => {
    axios.get("http://localhost:8000/api/new/getImg").then((response) => {
      console.log("Data are", response.data.data);
      setDatas(response.data.data);
    });
  }, []);

  return (
    <div>
      {datas.map((dta) => {
        return <h1>{dta.name}</h1>;
      })}
    </div>
  );
}

export default GetMyImage;
