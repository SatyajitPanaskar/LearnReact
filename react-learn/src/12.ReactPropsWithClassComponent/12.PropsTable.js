import React from "react";
import { Table } from "react-bootstrap";

function PropsTable(props) {
  const { name, age, email } = props;
  return (
    <>
      <Table>
        <tbody>
          <tr>
            <td>Name: {name}</td>
            <td>Age: {age}</td>
            <td>Email: {email}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default PropsTable;
