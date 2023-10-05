import React, { Component } from 'react'

export default class UserList extends Component {
    render() {
        console.log(this.props);
        const { name, age } = this.props;
        
    return (
        <>
            <h2>User List</h2>
            <h3>{name}</h3>
            <h3>{age}</h3>
        </>
    )
  }
}
