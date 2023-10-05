import React, { Component } from 'react'

class ReactComponentDidUpdateLifecycleMethod extends Component {
    constructor() {
         super();
         this.state = {
             name: "Rushi Panaskar",
             count:0,
         }
         
         console.log("Constructor Called!!!");
    }

    componentDidUpdate( prevProps, prevState, ) {
        console.log("Components Did Update!!!");
        if (this.state.count, prevState.count) {
            alert("working")
            console.log("Components Did Update!!!", prevState.count, this.state.count);
        }

    }
    render() {
      console.log("Render Method !!!");
    return (
        <>
            <h2>React ComponentDidUpdate Lifecycle Method</h2>
            <h2>Count : {this.state.count}</h2>
            {/* Example 2 
            <button onClick={() => this.setState({ name: "Satya Panskar" })}>Update Name </button>*/}

            {/* Example 3 */}
            <button onClick={()=>this.setState({count:this.state.count + 1})}>Update Name </button>
        </>
    )
  }
}
export default  ReactComponentDidUpdateLifecycleMethod;