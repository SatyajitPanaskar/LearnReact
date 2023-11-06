import { type } from '@testing-library/user-event/dist/type';
import React,{useReducer} from 'react'



// reducer function
const reducer = (state, action) => {
    console.log(state, action); 
    switch (action.type) {
        case "Increment":
            return { count: state.count + 1 }
        case "Decrement":
            return { count: state.count - 1 }
        default:
            return state;
    }
    
}


function Counter() {

    // Example 2  
    const initialState = {count:0}
    const [state, dispatch] = useReducer(reducer, initialState);
  return (
      <>
          <h2>48.Counter</h2>
          <p>Count : {state.count }</p>
          <button onClick={() => dispatch({type: "Increment"})}>Increment count</button>
          <button onClick={() => dispatch({ type: "Decrement" })}>Decrement count</button>
      </>
  )
}

export default Counter