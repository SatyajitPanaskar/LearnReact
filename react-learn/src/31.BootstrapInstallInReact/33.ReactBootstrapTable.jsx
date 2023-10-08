import React from 'react'
import Table from 'react-bootstrap/Table';
function ReactBootstrapTable() {

    const tableData = [
        { id: 1, name: "Rushi", age: 21, location: "Pune" },
        { id: 2, name: "Gonya", age: 24, location: "London" },
        { id: 3, name: "Somya", age: 26, location: "Satara" },
        { id: 4, name: "Jonya", age: 23, location: "Mumbai" },
        { id: 5, name: "Stya", age: 22, location: "Pune" },
    ];
  return (
      < >
          <h2>React Bootstrap Table</h2>
          <div>
              <Table striped bordered hover size='sm'>
                  <thead>
                      <tr>
                          <th>id</th>
                          <th>name</th>
                          <th>age</th>
                          <th>location</th>
                      </tr>
                  </thead>
                  <tbody >{tableData.map((data) => (
                      
                      <tr key={data.id}>
                          <td>{data.id}</td>
                          <td>{data.name}</td>
                          <td>{data.age}</td>
                          <td>{data.location}</td>
                      </tr>
                  ))}
                      
                  </tbody>
              </Table>
        </div>
      </>
  )
}

export default ReactBootstrapTable