import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import MemoChild from "./39.MemoChild";

function MemoParent() {
  const [count, setCount] = useState(0);
  console.log("Parent Memo Component .....");
  return (
    <>
      <h1>Memo Parent Compoent </h1>
      <MemoChild count={count} />
      <h2>Count : {count}</h2>
      <Button onClick={() => setCount(count + 1)}>Count +</Button>
    </>
  );
}

export default MemoParent;
