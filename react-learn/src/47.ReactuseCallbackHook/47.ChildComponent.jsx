import React,{memo} from 'react'

function ChildComponent({increment}) {
    console.log("Child Component");
  return (
      <>
          
          <h2>47.Child Component</h2> 
          <button onClick={increment}>Increment</button>
      </>
  )
}

export default memo(ChildComponent);