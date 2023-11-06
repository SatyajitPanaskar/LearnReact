import React from 'react'
import LiftingStateUp from './37.LiftingStateUp'
import { useState } from 'react'
import LiftingStateUpB from './37.LiftingStateUpB';

function ReactLiftingStateUp() {
    // Example 1
    const [sharedState, setSharedState] = useState("");

    const handleChange = (newValue) => {
        setSharedState(newValue);
    }

    // Example 2

    const parentAlert = (data) => {
        alert(data);
    };
  return (
      <>
          <h2>React Lifting State Up</h2>
          <LiftingStateUp sharedState={sharedState} handleChange={handleChange} />
          <LiftingStateUpB sharedState={sharedState} alert={parentAlert} />
      </>
  )
}

export default ReactLiftingStateUp