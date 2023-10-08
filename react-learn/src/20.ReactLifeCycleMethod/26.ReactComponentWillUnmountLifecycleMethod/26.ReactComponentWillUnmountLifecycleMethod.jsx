import React, { Component } from 'react'
import ComponentWillUnmountLifecycleMethod from './26.ComponentWillUnmountLifecycleMethod'

class ReactComponentWillUnmountLifecycleMethod extends Component {
    constructor() {
        super()
        this.state = {
            show:true,
        }
            
    }
    render() {
      console.log('clicked', this.state.show);
    return (
      <>
            <h2>React ComponentWillUnmount Lifecycle Method</h2>

            
            {this.state.show ? <ComponentWillUnmountLifecycleMethod /> : <h2>Remove</h2>}
            <button onClick={()=>this.setState({show: !this.state.show})}>Remove components</button>
      </>
    )
  }
}
export default ReactComponentWillUnmountLifecycleMethod