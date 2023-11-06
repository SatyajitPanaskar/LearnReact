import React, { Component } from 'react'
import CounterPureComponent from './38.CounterPureComponent'

class ReactPureComponent extends Component {
    // Example 1 
    constructor(props) {
        super(props)
        this.state = {
            count:0,
        }
    }
    // Example 1 
    handleIncrement = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }));
    };
        
    
    render() {
        console.log("Parent rendered!!");
    return (
        <>
            <h2>React Pure Component</h2>
            {/* Example 1 */}
            <CounterPureComponent count={this.state.count} onIncrement={ this.handleIncrement} />
    
      </>
    )
  }
}

export default ReactPureComponent