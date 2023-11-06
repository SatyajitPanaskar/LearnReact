import React,{useState,useTransition, useEffect} from 'react'

function ReactuseTransitionHook() {
    // example 1
    // const [isPending, startTransition] = useTransition();
    // const [count, setCount] = useState(0);

    // useEffect
    // useEffect(() => {
    //   console.log("useState Run !!!");
    // }, [count])
    
    // const handleClick = () => {
    //     startTransition(() => {
    //         setCount(count + 1)
    //         console.log("handleClick Run !!");
    //     })}


    // example 2 
    const [isPending, startTransition] = useTransition();
    const [input, setInput] = useState();
    const [dataList, setDataList] = useState([]);
    
    const dataSize = 10000;
    const handleChange = (e) => {
        setInput(e.target.value);
        startTransition(() => {
            const a = [];
        for (let i = 0; i< dataSize; i++) {
            a.push(e.target.value)
        }
        setDataList(a)
       
          })
      
   }

    return (
      <>
          <h2>53.ReactuseTransitionHook</h2>  
          {/* Example 1 */}
          {/* <h2>Count : {count}</h2>
          <button onClick={handleClick}>Update Count</button> */}

            {/* Example 2 */}
            <input type="text" value={input} onChange={handleChange} />
            { isPending ? "Loding... " : dataList.map((item, index) => {
                return <div key={index}>{ item}</div>
            })}
      </>
  )
}

export default ReactuseTransitionHook 