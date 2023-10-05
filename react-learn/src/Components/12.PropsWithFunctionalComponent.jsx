import React from 'react'

//using simple prop  Example : 1
// function PropsWithFunctionalComponent(props) {
//     console.log(props);
//   return (
//     <>
//           <h2>Props With Functional Component </h2>
//           <h3>hello {props.name}</h3>
//     </>
//   )
// }


// function PropsWithFunctionalComponent(props) {
//     console.log(props);

//     const { name, age, email } = props;
//   return (
//     <>
//           {/* <h1>Props With Functional Component </h1> */}
//           <h2>Name :{name}</h2>
//           <h4>Age :{ age}</h4>
//           <h4>Email :{ email}</h4>
          
//     </>
//   )
// }

function PropsWithFunctionalComponent(props) {
    console.log(props);
  return (
    <>
          <h2>Props With Functional Component </h2>
          <h3>hello {props.name}</h3>
    </>
  )
}

export default PropsWithFunctionalComponent;

