import React from 'react'

function LiftingStateUp({ sharedState, handleChange }) {
    // Example 1
    const handleInputChange = (event) => {
        const newValue = event.target.value;
        handleChange(newValue);
    }

  return (
      <>
          <h2>Child components A:</h2> 
          <input type="text" value={sharedState} onChange={handleInputChange} />
      </>
  )
}

export default LiftingStateUp