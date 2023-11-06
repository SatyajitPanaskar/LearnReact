import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function EMPEdit() {
  const { empid } = useParams();

  // const [empdata, empdatachange] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/employee/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setIdChange(resp.id);
        setempnoChange(resp.empno);
        setEnameChange(resp.ename);
        setJOBChange(resp.job);
        setSalaryChange(resp.salary);
        setDeptnoChange(resp.deptno);
        setActiveChange(resp.active);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  const [id, setIdChange] = useState("");
  const [empno, setempnoChange] = useState("");
  const [ename, setEnameChange] = useState("");
  const [job, setJOBChange] = useState("");
  const [salary, setSalaryChange] = useState("");
  const [deptno, setDeptnoChange] = useState("");
  const [active, setActiveChange] = useState(true);
  const [validation, setValidation] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(empno, ename, job, salary, deptno, active);
    const empdata = { id, empno, ename, job, salary, deptno, active };
    fetch("http://localhost:8000/employee" + empid, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(empdata),
    })
      .then((res) => {
        alert("Saved Successfully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form div className="container" onSubmit={handleSubmit}>
            <div className="card">
              <div className="card-title">
                <h2>Employee Edit Data</h2>
              </div>
              <div className="card-body" style={{ textAlign: "left" }}>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>ID</label>
                      <input
                        value={id}
                        disabled="disabled"
                        className="form-control"></input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>EMPNO</label>
                      <input
                        required
                        placeholder="Enter Employee Number"
                        value={empno}
                        onChange={(e) => setempnoChange(e.target.value)}
                        className="form-control"></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>ENAME</label>
                      <input
                        value={ename}
                        onChange={(e) => setEnameChange(e.target.value)}
                        onMouseDown={(e) => setValidation(true)}
                        required
                        className="form-control"></input>
                      {ename.length === 0 && validation && (
                        <span className="text-danger">Enter the name</span>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>JOB</label>
                      <input
                        required
                        placeholder="Enter Job Name"
                        value={job}
                        onChange={(e) => setJOBChange(e.target.value)}
                        className="form-control"></input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>SALARY</label>
                      <input
                        required
                        placeholder="Enter your salary"
                        value={salary}
                        onChange={(e) => setSalaryChange(e.target.value)}
                        className="form-control"></input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>DEPTNO</label>
                      <input
                        required
                        placeholder="Enter Department Number"
                        value={deptno}
                        onChange={(e) => setDeptnoChange(e.target.value)}
                        className="form-control"></input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-check">
                      <input
                        checked={active}
                        onChange={(e) => setActiveChange(e.target.checked)}
                        type="checkbox"
                        className="form-check-input"></input>
                      <label className="from-check-label">IS ACTIVE</label>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="from-group">
                      <button className="btn btn-success" type="submit">
                        SAVE
                      </button>
                      <Link to="/" className="btn btn-danger">
                        BACK
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EMPEdit;
