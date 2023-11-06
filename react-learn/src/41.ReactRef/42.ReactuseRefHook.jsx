import React,{useRef} from 'react'

function ReactuseRefHook() {
    // Example 1
    const inputRef = useRef(null);
    // exmple 2
    const handleButtonClick = () => {
        const inputValue = inputRef.current.value;
        alert(`Input value : ${inputValue}`);

  }

  return (
      <>
          <h2>React useRef Hook</h2>
          <input type="text" ref={inputRef} />
          <button onClick={handleButtonClick}>Get input value</button>
      </>
  )
}

export default ReactuseRefHook