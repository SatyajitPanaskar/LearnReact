import React from "react";
import ChildData1 from "./49.ChildData1";
import { createContext } from "react";

// create provide usecontext

const myData = createContext();
function ReactuseContext() {
  const dataPass = "parent data to pass child data!!!";
  return (
    <myData.Provider value={dataPass}>
      <>
        <h1>From Parent component</h1>
        <ChildData1 />
      </>
    </myData.Provider>
  );
}

export default ReactuseContext;
export { myData };
