import React from 'react'
import { Table, Container, Row, Col } from "react-bootstrap";
function ReactNestedMapFunction() {
     // Example 1
  const countriesWithCities = [
    {
      country: "USA",
      cities: ["New York", "Los Angeles", "Chicago"],
    },
    {
      country: "Canada",
      cities: ["Toronto", "Vancouver", "Montreal"],
    },
    {
      country: "UK",
      cities: ["London", "Manchester", "Birmingham"],
    },
    ];
    
     // Example 2
  const nestedData = [
    { category: "Fruits", items: ["Apple", "Banana", "Orange"] },
    { category: "Vegetables", items: ["Carrot", "Broccoli", "Spinach"] },
    { category: "Drinks", items: ["Water", "Juice", "Tea", "Coffee"] },
  ];
  return (
      <>
          <h2>React Nested Map Function</h2>
          {/* Example 1 */}
          <ul>
              {countriesWithCities.map((currentObj, index) => (
                  <li key={index}>
                      <b>{currentObj.country}</b>
                      <ul>{currentObj.cities.map((city, cityindex) => (
                          <li key={cityindex}>{ city}</li>
                      ))}</ul>
                  </li>
              ))}
          </ul>

          {/* Example 2 using Bootstrap data */}
          <Container>
              <Row>
                  <Col md={{span:6,offset:3}}>
                      <Table className='table'>
                          <thead>
                              <tr>
                                  <th>category</th>
                                  <th>items</th>
                              </tr>
                          </thead>
                          <tbody>
                              {nestedData.map((data, index) => (
                                  <tr key={index}>
                                      <td>{data.category}</td>
                                      <td>
                                          <ul className='list-unstyled '>
                                              {data.items.map((item , itemIndex) => (
                                              <li key={itemIndex}>{ item}</li>
                                              ))}
                                          </ul>
                                      </td>
                                  </tr>
                              ))}
                          </tbody>
                      </Table>
                  </Col>
              </Row>
          </Container>
      </>
  )
}

export default ReactNestedMapFunction