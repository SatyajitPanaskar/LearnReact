import React,{createContext } from 'react'
import Child1 from './50.Child1'

// create, provider, consumer
 
const myContext = createContext();
const myContextNew = createContext();

function ReactContextAPI() {
    const sharedData = "hello from parent !!";
    const sharedData2 = " hello child !!";
  return (
      <>
          <myContext.Provider value={sharedData}>
              <myContextNew.Provider value={sharedData2}>
                       <h2>50.React ContextAPI</h2>
                        <Child1 /> 
                  </myContextNew.Provider>
              </myContext.Provider>
      </>
  )
}

export default ReactContextAPI 
export {myContext , myContextNew}