import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
      <>
          <nav>
              <div>
                  <h2>
                      Rushi
                  </h2>
              </div>
              <div className='list_1'>
              <ul>
                  <li><Link to="/home">Home</Link> </li>
                  <li><Link to="/about">About</Link> </li>
                  <li><Link to="/services">Services</Link> </li>
                  <li><Link to="/user">UserList</Link></li>
              </ul>
              </div>
              <div className='list_2'>
                  <ul>
                      <li>contact</li>
                      <li>List</li>
                  </ul>
              </div>
         </nav>
      </>
  )
}

export default Navbar