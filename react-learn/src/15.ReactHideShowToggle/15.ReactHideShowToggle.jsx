import React,{useState} from 'react'
import "./15.ReactHideShowToggle.css"

function ReactHideShowToggle() {
    const [status, setStatus] = useState(true); 
    
  return (
    <>
          <h1> React Hide Show And Toggle </h1>
          {status ? <div className='status'>Content</div> : null}
         
          <button onClick={()=>setStatus(false)}>Hide</button>
          <button onClick={() => setStatus(true)}>Show</button>
          <button onClick={()=>setStatus(!status)}>Toggle</button>
    </>
  )
}

export default ReactHideShowToggle
