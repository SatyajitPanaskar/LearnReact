import React, { Component } from 'react'


class ReactComponentDidMountLifecycleMethods extends Component {
    constructor() {  
        super();
        this.state = {
            count: 0
        }
        
         console.log("Constructor Called !!!");
    }
    incrementCount = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }))
    };

    componentDidMount() {
        console.log("Components Did Mount !!!");
    }
    render() {
        console.log("render Method !!!");
        return (
            <>
                <h2>React ComponentDidMount Lifecycle Methods</h2>

                <h2>Count : {this.state.count}</h2>
                <button onClick={this.incrementCount}>Increment</button>
            </>
        )
    }
}

export default ReactComponentDidMountLifecycleMethods;