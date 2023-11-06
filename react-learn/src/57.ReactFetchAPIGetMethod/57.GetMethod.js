import React,{useState,useEffect} from 'react'
import { Table } from 'react-bootstrap';

function GetMethod() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        
        fetch(" https://jsonplaceholder.typicode.com/posts")
            .then((result) => {
                console.log(result);
                if (!result.ok) {
                    throw new Error("Network response  was not ok !!")
                }
                return result.json();
            }).then((data) => {
                setData(data);
                setLoading(false);
                console.log(data);
            }).catch((err) => {
                console.log("erroe :", err);
            })
    },[])
  return (
      <>
          <div> 
              {
                  loading ? (<p>Loading...</p>):( <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                          {
                              data.map((list, index) => (
                                  <tr key={index}>
                                      <td>{list.id}</td>
                                      <td>{list.title} </td>
                                      <td>{list.body }</td>
                                  </tr>
                               ))
                        }
                    </tbody>
                </table>)
              }
             
          </div>
      </>
  )
}

export default GetMethod