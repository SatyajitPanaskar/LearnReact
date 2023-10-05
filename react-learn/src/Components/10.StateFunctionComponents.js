import React, { useState } from 'react';



// function StateFunction() {
    
//     let [data, setData] = useState("Rushi Panaskar");

//     const UpdateValue = () => {
//         setData("State Function ")
//         alert(data)
//      };

//     return (
//         <>
//             <h2>{data}</h2>
//             <button onClick={UpdateValue}>Update Value</button>
//         </>
//     )
// }


function StateFunction() {
    let [count, setCount] = useState(0);
    const increment = () => {
        setCount(count+1)
    }

    return (
        <>
            <h2>Count: {count}</h2>
            <button onClick={increment}>Increment</button>        </>
    )
}



export default StateFunction;