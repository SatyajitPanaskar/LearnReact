import React from "react";
import { memo } from "react";

function MemoChild(props) {
  console.log("Memo Child Component ......");
  return (
    <>
      <h2>Memo Child Component {props.count}</h2>
    </>
  );
}

export default memo(MemoChild);
