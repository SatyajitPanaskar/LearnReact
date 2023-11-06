import React, { Component } from 'react'

 class CounterPureComponent extends Component {
  render() {
    return (
        <>
            <h2>Counter Pure Component Counter : {this.props.count}</h2>
            <button onClick={this.props.onIncrement}>Increment</button>

        </>
    )
  }
}

export default CounterPureComponent