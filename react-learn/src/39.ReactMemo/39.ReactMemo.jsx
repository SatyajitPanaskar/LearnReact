import React,{useState} from 'react'
import ChildComponent from './39.ChildComponent';

function ReactMemo() {
    // Example 1
    const [count, setCount] = useState(0);
    console.log("Parent Component !!");
  return (
      <>
          
          <h2>React Memo</h2>
          <ChildComponent/>
          <h3>Count: {count}</h3>
          <button onClick={()=> setCount(count+1)}>Count ++</button>
      </>
  )
}

export default ReactMemo