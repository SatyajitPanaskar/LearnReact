import React,{useEffect, useState} from 'react'
import ReactuseEffectWithConditional from './29.ReactuseEffectWithConditional';

function ReactuseEffectHook() {

 const [count,setCount] = useState(0)
    useEffect(() => {
        alert("UseEffect Hooks !!!");
        console.log("Use effect Hooks !!!");
    })
  return (
      <>
          <h2>React useEffect Hook</h2>
          <h2>Count : { count}</h2>
          <button onClick={() => setCount(count + 1)}>Update count</button>
          <ReactuseEffectWithConditional/>
      </>
  )
}

export default ReactuseEffectHook
