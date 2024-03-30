import React from "react";
function GetImage() {
  const getdata = async (e) => {
    e.preventDefault();
    try {
      // const response = await fetch('http://localhost:8000/api/new/getImg')
      // if(!response.ok){
      //     throw new Error("Network errr");
      // }
      // const datas = response.json();

      fetch("http://localhost:8000/api/new/getImg")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network errrrrrrrr");
          }
          return response.json();
        })
        .then((data) => {
          console.log("data is ", data);
        })
        .catch((error) => {
          console.log("Problem while fetch", error);
        });
    } catch (error) {}
  };

  return <div>GetImage</div>;
}
export default GetImage;
