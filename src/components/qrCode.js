import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";

import { AiOutlineCopy } from "react-icons/ai";
import TokenDisplay from "./tokenDisplay";

const QRCode = (props) => {
  const [show, setShow] = useState(false);

  return (
    <>
      {show && <TokenDisplay data={props.data} />}
      {!show && (
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            className="customShadow px-5 py-4"
            style={{
              textAlign: "center",
              margin: "0",
              position: "absolute",
              borderRadius: "20px",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <div
              className="mb-4 my-3"
              style={{
                backgroundColor: "#F54748",
                fontFamily: "Dancing Script, cursive",
                fontWeight: "bold",
                fontSize: "30px",
                borderRadius: "15px",
              }}
            >
              Transfer 1 sol
            </div>
            <p className="mt-3" style={{ color: "white" }}>
              Qr code goes here
            </p>
            <div
              className="mt-3 p-2"
              style={{ backgroundColor: "lightblue", borderRadius: "10px" }}
            >
              <Row>
                <Col lg={10}>asdfsasdfasdfasdfasdfasdfhjdbnfiouasdh9of</Col>
                <Col>
                  <AiOutlineCopy
                    color="#F54748"
                    style={{ cursor: "pointer" }}
                  />
                </Col>
              </Row>
            </div>
            <button
              className="mx-3 my-3"
              style={{
                border: "none",
                padding: "10px 60px 10px 60px",
                backgroundColor: "#0A81AB",
                borderRadius: "10px",
              }}
              onClick={() => setShow(true)}
            >
              Transfered
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default QRCode;
