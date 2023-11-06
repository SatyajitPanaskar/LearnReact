import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "../57.ReactFetchAPIGetMethod/img/img-2.avif";
import "../57.ReactFetchAPIGetMethod/62.ProfileBackground.css";
function ProfileBackground() {
  return (
    <>
      <h2>ProfileBackground</h2>;
      <Container fluid className="conatiner-fl">
        <Row>
          <Col
            lg={4}
            className="ms-auto align-items-center justify-content-center">
            <div className="img">
              <img src={img1} alt="img-1" height="320px" width="auto" />
            </div>
          </Col>
          <Col lg={4}>
            <div className="name">
              <h1>Satyajit Panaskar </h1>
              <h3>Frontend Developer</h3>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProfileBackground;
