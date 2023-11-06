import React,{useState, useRef, useLayoutEffect} from 'react'

function ReactuseLayoutEffectHook() {
    const [width, setWidth] = useState(0);
    const elementRef = useRef(null);

    useLayoutEffect(() => {
        if (elementRef.current) {

            setWidth(elementRef.current.getBoundingClientRect().width);
            
        }
    },[]);
  return (
      <>
          <h2>51.React useLayoutEffect Hook</h2>
          <div>
              <h3>Width measurement Example </h3>
              <div ref={elementRef} style={{ width: "300px", background: "lightblue", margin: "auto" }}>Element Whose width is measured</div>
              <p> width : {width }px</p>
          </div>
      </>
  )
}

export default ReactuseLayoutEffectHook