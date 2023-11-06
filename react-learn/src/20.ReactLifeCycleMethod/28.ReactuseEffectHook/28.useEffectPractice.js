import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";

function ReactuseEffectPractice() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    alert("React useEffect");
    console.log("React Use Effect");

    console.log("Updating state...");
  });
  return (
    <>
      <h1>useEffect Practice</h1>
      <h3>Count : {count}</h3>
      <Button onClick={() => setCount(count + 1)}>Update Count</Button>
    </>
  );
}

export default ReactuseEffectPractice;
