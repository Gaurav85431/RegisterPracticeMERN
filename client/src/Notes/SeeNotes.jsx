// import React, { useEffect, useState } from "react";

// function SeeNotes() {
//   const [notes, setNotes] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "http://localhost:8000/api/new/get-notes",
//           {
//             method: "GET",
//           }
//         );

//         const jsonData = await response.json();

//         console.log("notes are ", jsonData);

//         setNotes(jsonData);
//       } catch (error) {
//         alert("Eror occur at catch");
//       }
//       fetchData();
//     };
//   }, []);

//   return (
//     <div>
//       <ul>
//         {notes.map((itm) => (
//           <li key={itm.id}>
//             {itm.title}
//             <br />
//             {itm.notes}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default SeeNotes;

////////////////************************************ */.

import React, { useState, useEffect } from "react";

function SeeNotes() {
  const [data, setData] = useState(["ram", "monh"]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/new/get-notes");

      const jsonData = await response.json();

      console.log("data are---->", jsonData);
      console.log("all dat", jsonData.data.allData);

      jsonData.data.allData.map((item) => {
        console.log("each data-->", item);
      });

      // setData(jsonData);
      setData(jsonData.data.allData);
      console.log("set data is ", setData);
      // jsonData.data.allData.map((item) => {
      //   setData(item);
      //   <h2>{item}</h2>;
      // });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h1>Data from API</h1>

      {/* <ul>
        {data.map((item) => (
          <li key={item.id}>{item.notes}</li>
        ))}
      </ul> */}

      {/* <p>{data.map((itm) => ({ itm }))}</p> */}

      {/* <h2>{data}</h2> */}

      {/* {jsonData.data.allData.map((item) => {
        <h2>{item}</h2>;
      })} */}

      {/* {data.map((item) => {
        <h3>{item}</h3>;
      })} */}

      {/* {data.jsonData.data.allData.map((item) => {
        <h2>{item}</h2>;
      })} */}
    </div>
  );
}

export default SeeNotes;
