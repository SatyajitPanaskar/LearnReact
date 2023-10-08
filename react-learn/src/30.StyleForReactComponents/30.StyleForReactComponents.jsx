import React from 'react'

function StyleForReactComponents()
{
    const styles = {
        color: "white",
        backgroundColor:"skyblue",
    }
  return (
      <>
          <h2>Style For React Components</h2>

          {/* Example 1  Inline Css*/}
          <h1 style={{ color: "white", backgroundColor: "green", textTransform: "capitalize" }}>Inline Css</h1>
          
          {/* Example 2 Normal Css  */}
          <h1 className='NormalCss'>Normal Css</h1>
         
          {/* Example 3 css in js */}
          <h1 style={styles}>Css In js Method </h1> 
          
          {/* Example 4 css Module */}
          <h1 className='{style.title}'>Css Module Method </h1>

           
          {/* Example 4 sass and scss Method 
             style.scss
              .primary-sass{color:white; backgroundColor:blue;}
          */}
          <h1 className='primary-sass'> sass and scss Method </h1>
      </>
  )
}

export default StyleForReactComponents