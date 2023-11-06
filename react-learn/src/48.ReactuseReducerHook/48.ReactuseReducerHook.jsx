import React,{useState} from 'react'
import Counter from './48.Counter';

function ReactuseReducerHook() { 
    // Example 1
   
    const [count, setCount] = useState(0);


    return (
      <>
            <h2>48.React useReducer Hook</h2> 
            {/* Example 1 */}
            <p>Count : {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button> 
            

            {/* Example 2 */}
            <Counter/>
      </>
  )
}

export default ReactuseReducerHook