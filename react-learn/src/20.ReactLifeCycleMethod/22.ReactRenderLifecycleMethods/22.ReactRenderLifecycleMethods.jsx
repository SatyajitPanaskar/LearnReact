import React,{useState} from 'react'
import RenderLifecycleMethods from './22.RenderLifecycleMethods'

function ReactRenderLifecycleMethods() {
    const [name, setName] = useState("Rushi Panaskar");
  return (
    <>
          <h2> React Render Lifecycle Methods </h2>
          <RenderLifecycleMethods name={name} />
          <button onClick={()=> setName("Satya Panaskar")}>Update Name</button>
    </>
  )
}

export default ReactRenderLifecycleMethods
