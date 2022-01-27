import React, { useState } from "react";
import { Button, Col, Row, Form } from "react-bootstrap";
import {
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
  AiOutlineInfoCircle,
  AiFillInfoCircle,
} from "react-icons/ai";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

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
            border: "1px solid black",
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
            <input style={{ border: "none", width: "100%", height: "100%" }} />
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
            <h5 style={{ paddingLeft: "10px", paddingTop: "10px" }}>
              Token Management
            </h5>
            <hr />
          </div>
          <Row>
            <Col lg={12} xs={12} style={{ padding: "20px" }}>
              <h3>Create SPL Token</h3>
              <p>
                Creating a SPL token with SolMinter is easy as 1,2,3. start with
                the basic requirements: Mint authority, freeze, authority and
                number of decimals.
                <br />
                <AiOutlineInfoCircle color="black" size={25} /> it takes 1 SOL
                to mint a token, save 25% by paying with SMRT
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <Form>
                <Form.Check
                  inline
                  label="label goes here"
                  name="group1"
                  type="checkbox"
                />
              </Form>
            </Col>
          </Row>
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
                Create Token
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
