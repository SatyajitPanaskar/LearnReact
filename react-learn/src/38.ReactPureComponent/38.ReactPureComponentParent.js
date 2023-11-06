import React, { Component } from "react";
import ReactPureComponentChild from "./38.ReactPureComponentChild";

export class ReactPureComponentParent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };
  render() {
    console.log("Parent Component rendered !!!!");
    return (
      <>
        <h1>React Pure Component Parent</h1>
        <ReactPureComponentChild
          onIncrement={this.handleIncrement}
          count={this.state.count}
        />
      </>
    );
  }
}

export default ReactPureComponentParent;
