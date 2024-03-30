import React, { useEffect, useState } from "react";

const GetName = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true); //It show whether data is fetched or not

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/new/get-Name");

        console.log("response of get name  is ", response);
        const userdata = await response.json();

        const { message } = userdata;
        console.log("Name from get is ", message);
        const { data } = userdata;
        console.log("data of get is -======== ", data);

        console.log("Email is ", data.email);

        data.map((itm) => {
          console.log("Name is ", itm.name + "Email is ", itm.email);
        });

        if (response.ok) {
          alert("data is fetched ");

          userdata.map((itm) => {
            console.log("userdata map == ", itm.name);
          });

          setName(userdata.name);
          setEmail(userdata.email);

          setLoading(false);
        } else {
          alert("Unable to get data ");
        }
      } catch (error) {
        alert("Err occr" + error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <h1>Get Name and Email</h1>

      {name.map((itm) => {
        return <h1>{itm.name}</h1>;
      })}

      {email.map((itm) => {
        return <h2>{itm.email}</h2>;
      })}

      <h1>{name}</h1>
      <h2>{email}</h2>
    </div>
  );
};

export default GetName;
