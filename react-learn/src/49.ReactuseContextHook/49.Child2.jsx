import React,{ useContext } from 'react'
import { myContext } from './49.ReactuseContextHook'


function Child2() {
    const sharedData = useContext(myContext);
    console.log(sharedData);
  return (
      <>
          <h2> 49.Child 2 components </h2>
          <h4>{ sharedData}</h4>
      </>
  )
}

export default Child2