import React, { useState } from "react";
import { useMemo } from "react";

import { Button } from "react-bootstrap";

function ReactuseMemoPractice() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [count, setCount] = useState(0);

  const sum = useMemo(() => {
    console.log("Calculating Sum ....!");
    return number1 + number2;
  });

  return (
    <>
      <h2>React useMemo Practice </h2>
      <input
        type="number"
        value={number1}
        onChange={(e) => setNumber1(Number(e.target.value))}
      />
      <input
        type="number"
        value={number2}
        onChange={(e) => {
          setNumber2(Number(e.target.value));
        }}
      />
      <h3>Total Number: {sum} </h3>
      <h3>Count Number : {count}</h3>
      <Button onClick={() => setCount(count + 1)}>Count +</Button>
    </>
  );
}

export default ReactuseMemoPractice;
