import React from "react";
import { useContext } from "react";
import { myData } from "./49.ReactuseContext";

function ChildData2() {
  const data = useContext(myData);
  console.log(data);
  return (
    <>
      <h3>ChildData 2 component </h3>
    </>
  );
}

export default ChildData2;
