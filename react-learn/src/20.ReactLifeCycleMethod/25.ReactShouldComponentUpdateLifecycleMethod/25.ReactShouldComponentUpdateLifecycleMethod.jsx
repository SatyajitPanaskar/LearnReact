import React, { Component } from 'react'

class ReactShouldComponentUpdateLifecycleMethod extends Component {
    constructor() {
        super();
        this.state ={
            count:0
        }
    }
    shouldComponentUpdate() {
        console.log(" ShouldComponentUpdate Lifecycl eMethod", this.state.count);
        return true;
    }
  render() {
    return (
        <> 
            <h2>React ShouldComponentUpdate Lifecycle Method</h2>
            <h2>Count : {this.state.count }</h2>
            {/* Example 1 */}
            <button onClick={()=> this.setState({count: this.state.count + 1})}>Update State</button>
      </>
    )
  }
}

export default ReactShouldComponentUpdateLifecycleMethod