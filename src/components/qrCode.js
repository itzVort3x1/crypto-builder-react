import React from "react";
import { Row, Col } from "react-bootstrap";

import { AiOutlineCopy } from "react-icons/ai";

const QRCode = (props) => {
  return (
    <div
      style={{ textAlign: "center", height: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <div
        className="shadow-lg p-5"
        style={{ width: "40%", height: "60%", borderRadius: "15px" }}
      >
        <Col>
          <Row className="justify-content-center">
            <Col lg={6}>
              <div
                className="mb-4"
                style={{
                  backgroundColor: "skyblue",
                  fontFamily: "Dancing Script, cursive",
                  fontSize: "30px",
                  borderRadius: "15px",
                }}
              >
                Transfer 1 sol
              </div>
            </Col>
          </Row>
          <Row>
            <div className="mb-4">
              <p>qrcode goes here</p>
            </div>
          </Row>
          <Row>
            <div
              className="mt-3 p-2"
              style={{ backgroundColor: "lightblue", borderRadius: "10px" }}
            >
              <Row>
                <Col lg={10}>asdfsasdfasdfasdfasdfasdfhjdbnfiouasdh9of</Col>
                <Col>
                  <AiOutlineCopy color="black" />
                </Col>
              </Row>
            </div>
          </Row>
          <Row>
            <Col>
              <button
                className="mt-5"
                style={{
                  border: "none",
                  padding: "10px 60px 10px 60px",
                  backgroundColor: "skyblue",
                  borderRadius: "10px",
                }}
              >
                Transfered
              </button>
            </Col>
          </Row>
        </Col>
      </div>
    </div>
  );
};

export default QRCode;
