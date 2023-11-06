
import React,{ useRef } from 'react'
import ChildforwardRefHook from './43.ChildforwardRefHook';

function ReactforwardRefHook() {
     // Example 1
  // const inputRef = useRef(null);
  // const updateInput = () => {
  //   inputRef.current.value = "1000";
  //   inputRef.current.focus();
  //   //   inputRef.current.style.color = "white";
  //   //   inputRef.current.style.background = "blue";
  // };

  // Example 2
  const childRef = useRef();

  const handleButtonClick = () => {
    if (childRef.current) {
      childRef.current.handleChildButtonClick();
    }
  };
    return (
      <>
          <h2>43.React forwardRef Hook</h2> 
          {/* Example 1 */}
          {/* <ChildforwardRefHook ref={inputRef} />
          <button onClick={updateInput}>update Input </button> */}
            
            
            {/* Example 2 */}
            <ChildforwardRefHook ref={childRef} />
            <button onClick={handleButtonClick}>
        Click Child Button From Parent
      </button>
      </>
  )
}

export default ReactforwardRefHook  