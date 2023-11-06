
import ListuseDeferredValueHook from './54.ListuseDeferredValueHook';
import React, { useState, useEffect, useDeferredValue } from "react";


function ReactuseDeferredValueHook() { 
    const [input, setInput] = useState();

  const handleChange = (e) => {
    setInput(e.target.value);
  };
// Example 2
const [count, setCount] = useState(0);
const deferredValue = useDeferredValue(count);

useEffect(() => {
  console.log(`Count: ${count} \nDeferred: ${deferredValue}`);
});
  return (
      <>
          <h1>useDeferredValue Hook</h1>

{/* Example 1 */}
<input type="text" value={input} onChange={handleChange} />
<ListuseDeferredValueHook input={ input} />

{/* Example 2 */}
<h2>Count Number:{count}</h2>
<button onClick={() => setCount(count + 1)}>Update Count</button>
          
      </>
  )
}

export default ReactuseDeferredValueHook