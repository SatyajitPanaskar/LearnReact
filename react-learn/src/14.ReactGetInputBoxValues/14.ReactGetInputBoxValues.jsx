import React,{useState} from 'react'

function ReactGetInputBoxValues() {
   
    const [inputValue, setInputValue] = useState("");
    const [inputValueShow, setInputValueHide] = useState("false")
    const handleChange = (event) => {
        console.log(event.target.value);
        setInputValue(event.target.value);
        setInputValueHide(false);
        
    };
    

  return (
    <>
          <h1>React Get Input Box Values</h1>
          <h2>Name: {inputValueShow ? inputValue : ""}</h2>
          <input type="text" onChange={handleChange} />
          <button onClick={() => setInputValueHide(true)}>Submit</button>
    </>
  )
}

export default ReactGetInputBoxValues
