import React, { Component } from 'react'

 class RenderLifecycleMethods extends Component {
     render() {
      console.log("Render Method !!!" , this.props);
    return (
      <>
            <h2>Render Method { this.props.name}</h2>
      </>
    )
  }
}
export default RenderLifecycleMethods