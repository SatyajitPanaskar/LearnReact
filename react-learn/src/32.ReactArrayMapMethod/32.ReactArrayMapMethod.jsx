import React from 'react'

function ReactArrayMapMethod() {
    // Example 1 
    const name = ["rushi", "satya", "Kumar", "Deva", "Rohan"];
    
    // Example 2  array of object

    const product = [
        {
            id: 11,
            name: "Product 1",
            price:111
        },
        {
            id: 22,
            name: "Product 2",
            price:222
        },
        {
            id: 33,
            name: "Product 3",
            price:333
        },
        {
            id: 44,
            name: "Product 4",
            price:444
        }
    ]

    // example 3 return map function 
    const fruit = ["apple", "orange", "banana", "Mango"];
    // using map to transform the array of fruit into  an array of react elements.
    const result = fruit.map((fruits, index) => <li key={index}>{fruits}</li>)

  return (
      <>    <h2>React Array Map Method</h2>
          {/* Example 1  */}
          <ul>
              {name.map((value, index) => (
                  <li key={index}>{ value}</li>
              ))}
          </ul>
          {/* Example 2 */}
              <h2>Array of object </h2>
          <ul>
              {product.map((product) =>
                  <li key={product.id}>{product.name} - ${ product.price}</li>
              )}
          </ul>
          {/* Example 3 */}
          <h2> example:3 return map function</h2>
          <ul>{ result}</ul>
      </>
      
              
  )
}

export default ReactArrayMapMethod