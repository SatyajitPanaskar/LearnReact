import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class ReactPureComponentChild extends Component {
  render() {
    console.log("Child Component rendered !!!!!");
    return (
      <>
        <h2>React PureComponent Child</h2>
        <h3>Count : {this.props.count}</h3>
        <Button onClick={this.props.onIncrement}>Count Increment</Button>
      </>
    );
  }
}
