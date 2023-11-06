import React,{createContext} from 'react'
import Child1 from './49.Child1'

// imp create , provider, useContext 
const myContext = createContext();

function ReactuseContextHook() {
    const shearedData = "Hello From Parent !!!" 
  return (
      <> 
          <myContext.Provider value={shearedData}>
          <h2>49.React useContext Hook</h2>
              <Child1 />
         </myContext.Provider>
      </>
  )
}

export default ReactuseContextHook 
export {myContext}