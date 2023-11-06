import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EMPList from "./58.EMPList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./58.CRUDStyle.css";
import EMPCreate from "./58.EMPCreate";
import EMPDetails from "./58.EMPDetails";
import EMPEdit from "./58.EMPEdit";
function CRUDApps() {
  return (
    <>
      <h2>CRUD Operations</h2>
      <Router>
        <Routes>
          <Route path="/" element={<EMPList />}></Route>
          <Route path="/employee/create" element={<EMPCreate />}></Route>
          <Route
            path="/employee/detail/:empid"
            element={<EMPDetails />}></Route>
          <Route path="/employee/edit/:empid" element={<EMPEdit />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default CRUDApps;
