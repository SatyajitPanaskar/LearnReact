import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function EMPList() {
  const [empData, setEmpDataChange] = useState(null);

  const navigate = useNavigate();

  const LoadDetails = (id) => {
    navigate("/employee/detail/" + id);
  };
  const LoadEdit = (id) => {
    navigate("/employee/edit/" + id);
  };
  const Removefunction = (id) => {
    if (window.confirm("Do you want to remove?")) {
      fetch("http://localhost:8000/employee/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Removed successfully.");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  useEffect(() => {
    fetch("http://localhost:8000/employee")
      .then((res) => res.json())
      .then((response) => {
        setEmpDataChange(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Employee List</h2>
        </div>
        <div className="card-body">
          <div className="divbtn">
            <Link to="employee/create" className="btn btn-success">
              Add New
            </Link>
          </div>
          <table className="table-bordered table">
            <thead className="text-white ">
              <tr className="table-dark">
                <th>ID</th>
                <th>EMPNO</th>
                <th>ENAME</th>
                <th>JOB</th>
                <th>SALARY</th>
                <th>DEPTNO</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {empData &&
                empData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.empno}</td>
                    <td>{item.ename}</td>
                    <td>{item.job}</td>
                    <td>{item.salary}</td>
                    <td>{item.deptno}</td>
                    <td>
                      <a
                        onClick={() => {
                          LoadEdit(item.id);
                        }}
                        className="btn btn-success">
                        EDIT
                      </a>
                      <a
                        onClick={() => {
                          LoadDetails(item.id);
                        }}
                        className="btn btn-danger">
                        DETAILS
                      </a>
                      <a
                        onClick={() => {
                          Removefunction(item.id);
                        }}
                        className="btn btn-primary">
                        REMOVE
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default EMPList;
