import React from 'react'

function LiftingStateUpB({ sharedState, alert }) {
  
  // exmple 2

  const data = "Rushi Panaskar"
  return (
    <>
       <h3>Shared State : {sharedState}</h3>
      <h2> Lifting State Up B : </h2>

      <button onClick={()=> alert(data)}>Click Me</button>
     

    </>
  )
}

export default LiftingStateUpB