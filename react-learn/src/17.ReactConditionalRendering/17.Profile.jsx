import React from 'react'

function Profile() {
    // example 1
    const isLoginIn = true;
    // example 2
    const items = ['Apple, Banana, Orange, Mango'];
  return (
      <>
          {/* example 1 */}
          {isLoginIn ? <h2>WelCome users </h2> : <h2>Welcome Guest</h2>}
          
          {/* Example 2 */}
          <div>{items.length > 0 ? (
              <ul>
                  {
                      items.map((item, index) =>
              (
                  <li key={index}>{item}</li>
              ))
              }
                  
              </ul>) :(<p>No Items to display</p>)
          }</div>
    </>
  )
}

export default Profile
