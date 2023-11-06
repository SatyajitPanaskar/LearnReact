import React from 'react'
import ReactCustomHook from './56.ReactCustomHook'

function CounterComponent() {
  
    const { count, increment, decrement } = ReactCustomHook(10, 5);
    return (
    
      <>
         <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      </>
  )
}

export default CounterComponent