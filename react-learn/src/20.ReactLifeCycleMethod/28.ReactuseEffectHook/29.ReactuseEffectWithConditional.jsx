import React,{ useEffect, useState } from 'react'

function ReactuseEffectWithConditional() {
   
    //Example 2
    const [count, setCount] = useState(0);
    const[total, setTotal]= useState(100)



    useEffect(() => {
        console.log("render After ");
    },[total])
  return (
      <> 
          <h2>React useEffect With Conditional </h2>
          {/* Example 2 */}
          <h2>Count : { count }</h2>
          <button onClick={() => setCount(count + 1)}>Update Count </button>
          <h2>Total : {total}</h2>
          <button onClick={()=> setCount(total+1)}>Update Total</button>
    </>
  )
}

export default ReactuseEffectWithConditional