import React,{useState} from 'react'
import PassFunction from './19.PassFunction'

// function ReactPassFunctionAsProps() {

//     // Example 1
//     const handleButtonClick = () => {
//       console.log("Button Click !!!");
//   }

//   return (
//     <>
//           <h2>React Pas Function As Props</h2>
//           <PassFunction handleClick={ handleButtonClick} />
//     </>
//   )
// }


function ReactPassFunctionAsProps() {
           const handleButtonClick = () => {
              console.log("Button Click !!!");
          }
    // Example 2
    const [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount(count + 1);
    }


  return (
    <>
          <h2>React Pas Function As Props</h2> 
          <PassFunction handleClick={handleButtonClick} count={count} increment={incrementCount} />
    </>
  )
}

export default ReactPassFunctionAsProps
