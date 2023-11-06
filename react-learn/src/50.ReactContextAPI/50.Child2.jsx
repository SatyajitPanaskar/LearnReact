import React from 'react'
import { myContext, myContextNew } from './50.ReactContextAPI'


function Child2() {
  return (
      <>
          <h2>50.Child 2 Components</h2>
          
          <myContext.Consumer>
              {
                  (sharedData) => {
                      return (
                          
                          <myContextNew.Consumer>
                              {
                                  (sharedData2) =>
                                  {
                                     return <p>{sharedData} <br /> <br /> {sharedData2}</p> 
                                      }
                              }

                          </myContextNew.Consumer>
                      )
                  }
              }
           </myContext.Consumer>
      </>
  )
}

export default Child2