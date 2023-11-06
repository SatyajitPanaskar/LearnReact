import React,{memo} from 'react'

function ChildComponent(props) {
    console.log("Child Component Rendered!!!");
  return (
      <>
          <h2>Child Componentcount :{ props.count} </h2>
      </>
  )
}

export default  memo( ChildComponent)