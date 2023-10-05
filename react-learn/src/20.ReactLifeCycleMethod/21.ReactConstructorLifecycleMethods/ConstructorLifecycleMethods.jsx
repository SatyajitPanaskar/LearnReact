import React, { Component } from 'react'

export class ConstructorLifecycleMethods extends Component {
    constructor() {
        super()
     console.log("Constructor method !!!");
    }
    render() {
       console.log("render method !!!");
    return (
        <>
            <h2>Constructor Lifecycle Methods</h2>
        </>
    )
  }
}

export default ConstructorLifecycleMethods