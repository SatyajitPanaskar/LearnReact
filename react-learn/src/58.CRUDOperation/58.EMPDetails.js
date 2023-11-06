import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
function EMPDetails() {
  const { empid } = useParams(); 

  const [empdata, empdatachange] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/employee/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        empdatachange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <>
      <div>
        {/* <div className="row">
                <div className="offset-lg-3 col-lg-6"> */}

        <div className="container">
          <div className="card row" style={{ textAlign: "left" }}>
            <div className="card-title">
              <h2>Employee Create</h2>
            </div>
            <div className="card-body"></div>

            {empdata && ( 
              <div>
                <h2>
                  The Employee name is : <b>{empdata.ename}</b> ({empdata.id})
                </h2>
                <h3> Details</h3>
                <h5>Employee Number : {empdata.empno}</h5>
                <h5>JOB : {empdata.job}</h5>
                <h5>Salary is : {empdata.salary}</h5>
                <h5>Department Number is : {empdata.deptno}</h5>
                <Link className="btn btn-danger" to="/">
                  Back to Listing
                </Link>
              </div>
            )}
          </div>
        </div>
        {/* </div>
            </div> */}
      </div>
    </>
  );
}

export default EMPDetails;
