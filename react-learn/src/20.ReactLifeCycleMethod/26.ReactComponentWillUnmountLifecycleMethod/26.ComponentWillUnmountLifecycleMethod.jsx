import React, { Component } from 'react'

export default class ComponentWillUnmountLifecycleMethod extends Component {
    componentDidMount() {
        this.intervalId = setInterval(() => {
            console.log("interval ID");
        },1000)
    }

    //exmaple 2
    componentWillUnmount() {
        clearInterval(this.intervalId);
        console.log("Interval Tick Remove");     
    }
  render() {
    return (
        <div>
            <h2> Childer Components Will Umount</h2>
        </div>
    )
  }
}
