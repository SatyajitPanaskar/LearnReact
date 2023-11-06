import React,{useState} from 'react'

function ReactCustomHook(initialValue = 0, step = 1) {
    const [count, setCount] = useState(initialValue);
    const increment = () => {
        setCount(count + step);
      };
    
      const decrement = () => {
        setCount(count - step);
      };
    
      return { count, increment, decrement };
  
}

export default ReactCustomHook