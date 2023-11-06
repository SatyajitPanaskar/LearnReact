import React,{useState, useEffect} from 'react'
import Table from 'react-bootstrap/Table';
function Assignment() { 
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        console.log(response);
        if (!response.ok) {
        throw new Error("Network response  was not ok !!");
        }
        return response.json();
      }).then((data) => {
        setData(data);
        setLoading(false);
        console.log(data);
      }).catch((error) => {
        console.log("Error : ", error);
       })
  },[])

  return (
    <>
      <h2>API Integration Assignment </h2> 
      <div class="container">
      {
        loading ? (<p>Loading.....</p>) : (<Table striped bordered hover>
          <thead>
            <tr>
                <th>ID</th>
                <th>Post ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((list, index) => (
                <tr key={index}>
                  <td>{list.id}</td>
                  <td>{list.postId }</td>
                  <td>{list.name}</td>
                  <td>{list.email}</td>
                  <td>{list.body}</td>
                </tr>
              ))
           }
          </tbody>
        </Table>)
      }
     </div>
      
    </>
  )
}

export default Assignment