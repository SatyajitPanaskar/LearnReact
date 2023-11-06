import React,{useState} from 'react'

function ReactControlledComponent() {
    // Example 1
    const [inputValue, setInputValue] = useState("");

    const handleChange = (event) => {
        setInputValue(event.target.value);
        console.log(inputValue);
    }
  return (
      <>
          <h2>44.React Controlled Component</h2>
          {/* Example 1 */}
          <input type="text" value={inputValue}  onChange={handleChange}/>
          <p>Current value : { inputValue}</p>

      </>
  )
}

export default ReactControlledComponent