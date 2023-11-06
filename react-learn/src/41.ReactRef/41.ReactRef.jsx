import React, { Component , createRef} from 'react'


class ReactRef extends Component {

    constructor() {
        super()
        this.myInputRef = createRef();
    }
    // exmple 1
    // componentDidMount() {
    //     this.myInputRef.current.value = "Rushi Panaskar";
    //     console.log(this.myInputRef.current.value);
    //   }

    // exmple 2
    handleClick = () => {
        this.myInputRef.current.focus();
        this.myInputRef.current.style.background = "green";
        this.myInputRef.current.style.color = "white"
        console.log(this.myInputRef.current.value);
    }

    render() {
      console.log(this.myInputRef);
    return (
        <>
            <h2> React Ref</h2>
            {/* Example 1 */}
            <input type="text" ref={this.myInputRef} />
            <button onClick={this.handleClick}>Focus Input</button>
        </>
    )
  }
}

export default ReactRef