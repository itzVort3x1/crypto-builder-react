import React, { useState } from "react";
import { Col, Row, Form } from "react-bootstrap";
import { AiOutlineInfoCircle, AiFillInfoCircle } from "react-icons/ai";

import QRCodeComponent from "./qrCode";

const FormHeader = [
  { title: "Token name", value: "" },
  { title: "Token Symbol", value: "" },
  { title: "Mint authority", value: "askdjfhiausdf8as7dfhasidjfha8sd7" },
  { title: "Freeze authority", value: "askdjfhiausdf8as7dfhasidjfha8sd7" },
  { title: "Decimals", value: "" },
];

const CreateToken = () => {
  const [qrCodePage, setQrCodePage] = useState(false);

  function renderForm() {
    return FormHeader.map((item) => {
      return (
        <Row
          style={{
            border: "1px solid purple",
            margin: "10px",
          }}
        >
          <Col
            lg={2}
            style={{
              justifyContent: "space-between",
              borderRight: "1px solid black",
              textAlign: "center",
              backgroundColor: "lightgray",
            }}
          >
            <div>
              <Row>
                <Col lg={8} className="mt-2">
                  <h6>{item.title}</h6>
                </Col>
                <Col className="mt-1" style={{ textAlign: "end" }}>
                  <AiFillInfoCircle color="purple" />
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={10} style={{ paddingLeft: "2px", paddingRight: "2px" }}>
            {item.value}
          </Col>
        </Row>
      );
    });
  }

  return (
    <div>
      {!qrCodePage && (
        <div
          style={{
            margin: "20px",
            width: "90vw",
            height: "94vh",
            borderRadius: "15px",
          }}
          className="shadow-lg"
        >
          <div>
            <h5
              style={{
                paddingLeft: "10px",
                paddingTop: "10px",
                textAlign: "center",
              }}
            >
              Token Details
            </h5>
            <hr />
          </div>
          <Row>
            <Col lg={12} style={{ textAlign: "center" }}>
              {/* <Form>
              <Form.Check type="switch" id="custom-switch" />
            </Form> */}
            </Col>
          </Row>
          <div>{renderForm()}</div>
          <Row>
            <Col lg={12} style={{ textAlign: "center" }}>
              <button
                style={{
                  border: "none",
                  backgroundColor: "purple",
                  color: "white",
                  padding: "8px",
                  borderRadius: "20px",
                }}
                onClick={() => setQrCodePage(true)}
              >
                Move To Account
              </button>
            </Col>
          </Row>
        </div>
      )}
      {qrCodePage && <QRCodeComponent />}
    </div>
  );
};

export default CreateToken;
