import React from "react";
import PropsTable from "./12.PropsTable";

function PropsFunction() {
  const userData = [
    {
      name: "Rushi",
      age: "30",
      email: "rushi@gmail.com",
    },
    {
      name: "Satyajit",
      age: "34",
      email: "satyajit@gmail.com",
    },
    {
      name: "Rahul",
      age: "44",
      email: "rahul@gmail.com",
    },
    {
      name: "Sumit",
      age: "24",
      email: "sumit@gmail.com",
    },
  ];

  return (
    <>
      <h1>Props Function Component </h1>

      {userData.map((user, index) => (
        <PropsTable
          key={index}
          name={user.name}
          age={user.age}
          email={user.email}
        />
      ))}
    </>
  );
}

export default PropsFunction;
