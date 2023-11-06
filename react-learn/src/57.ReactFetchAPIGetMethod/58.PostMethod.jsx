import React,{useState} from 'react'

function PostMethod() { 
    const [formData, setFromData] = useState({
        title: " ",
        name: " ",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFromData({
            ...formData, [name]: value,
        })
    } 

    const handleSubmit = (e) => {
        e.preventDefault();
        const apiUrl = "https://jsonplaceholder.typicode.com/posts";
// Create the Reuest Object 
        const requestOptions = {
            method: "POST",
            Headers: {
                "Content-Type": "application/json",
            }, 
            body: JSON.stringify(formData)
            
        }
        // send the post request 
        fetch(apiUrl, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                console.log("Response Data :", data);
            })
            .catch((error) => {
                console.log("Error :", error);
            })
    }
  return (
      <>
          <h2> 58. Post Method</h2>
          
          <form onChange={handleSubmit}>
              <div>
              <label >Title</label>
              <input type="text" name="title" value={FormData.title} onChange={handleChange}/>
              </div>
              <div>
              <label >Body</label>
              <textarea name="body" value={FormData.body} onChange={handleChange}/>
              </div>
              <button type='submit'>Submit</button>
          </form>
      </>
  )
}

export default PostMethod