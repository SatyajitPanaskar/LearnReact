import React from 'react'

function PassFunction(props) {
  console.log(props);
  return (
    <> 
      {/* Example 1 */}
      <h2>Users</h2>
      <button onClick={props.handleClick}>Click me</button>
      {/* example 2 */}
      <h2>Count : {props.count}</h2>
      <button onClick={props.increment}>Increment</button>
      
    </>
  )
}

export default PassFunction
