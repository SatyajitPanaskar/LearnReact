import React,{useId} from 'react'

function Email() { 
    const id = useId();
  return (
      <>
          <h2>55.Email</h2> 
          <label htmlFor={id}> Email :</label>
          <input type="text" id={id} autoComplete='off'/>
      </>
  )
}

export default Email