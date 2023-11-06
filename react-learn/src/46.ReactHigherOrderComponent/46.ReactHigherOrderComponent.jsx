import React,{useState} from 'react'

function ReactHigherOrderComponent() {
    

    // higher order components 
    const withCounter = (WrappedComponent) => {
        return function WithCounter(props) {
            const [count, setCount] = useState(0);
            const increment = () =>
            {
                setCount(count + 1);
            }
            return (
                <WrappedComponent {...props} count={count} increment={increment} />
            )
        }
    }

    // functional Component
    const counter = ({ count, increment }) => {
        return (
            <div>
                <p>Count :{count}</p>
                <button onClick={increment}>Increment</button>
            </div>
        );
    }
    
    // Wrap counter component with the withCounter HOC
      
    const CounterWithEnhacement = withCounter(counter);
     
    return (
      <>
          <h2>46.React Higher Order Component</h2>
          {/* Example 1 */}
          {/* <h2>Count: {count}</h2>
          <button onClick={()=>setCount(count+1)}>update count</button> */}
            {/* Example 2 */}
            <CounterWithEnhacement/>
      </>
  )
}

export default ReactHigherOrderComponent