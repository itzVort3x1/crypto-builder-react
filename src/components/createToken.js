import React, { useState } from "react";
import { Col, Row, Form } from "react-bootstrap";
import { AiOutlineInfoCircle, AiFillInfoCircle } from "react-icons/ai";

import QRCodeComponent from "./qrCode";

const CreateToken = (props) => {
  const [inputVal, setInputVal] = useState([
    { title: "Token name", value: "" },
    { title: "Token Symbol", value: "" },
    { title: "Mint authority", value: props.data?.Authority, isDisabled: true },
    {
      title: "Freeze authority",
      value: props.data?.Authority,
      isDisabled: true,
    },
    { title: "Decimals", value: "" },
  ]);
  // const FormHeader = [
  //   { title: "Token name", value: inputVal },
  //   { title: "Token Symbol", value: "" },
  //   { title: "Mint authority", value: props.data?.Authority, isDisabled: true },
  //   {
  //     title: "Freeze authority",
  //     value: props.data?.Authority,
  //     isDisabled: true,
  //   },
  //   { title: "Decimals", value: "" },
  // ];

  console.log(props.data);
  const [qrCodePage, setQrCodePage] = useState(false);

  function renderForm() {
    return inputVal.map((item, index) => {
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
              backgroundImage:
                "linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)",
            }}
          >
            <div>
              <Row>
                <Col lg={8} className="mt-2">
                  <h6 style={{ color: "white" }}>{item.title}</h6>
                </Col>
                <Col className="mt-1" style={{ textAlign: "end" }}>
                  <AiFillInfoCircle color="black" />
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={10} style={{ paddingLeft: "2px", paddingRight: "2px" }}>
            <input
              disabled={item.isDisabled}
              style={{ border: "none", width: "100%", height: "100%" }}
              value={item.value}
            />
          </Col>
        </Row>
      );
    });
  }

  return (
    <>
      {qrCodePage && <QRCodeComponent />}
      {!qrCodePage && (
        <div
          style={{
            borderRadius: "20px",
          }}
          className="m-4 customShadow"
        >
          <div className="p-3" style={{ textAlign: "center" }}>
            <h4 style={{ color: "white" }}>Token Management</h4>
            <hr style={{ color: "white" }} />
          </div>
          <Row className="m-3">
            <h3 style={{ color: "white" }}>Create SPL Token</h3>
            <p style={{ color: "white" }}>
              Creating a SPL token with SolMinter is easy as 1,2,3. start with
              the basic requirements: Mint authority, freeze, authority and
              number of decimals.
              <br />
              <AiOutlineInfoCircle color="yellow" size={25} /> it takes 1 SOL to
              mint a token, save 25% by paying with SMRT
            </p>
          </Row>
          <Row>
            <div className="text-center py-3">
              <Form>
                <Form.Check
                  inline
                  style={{ color: "white" }}
                  label="label goes here"
                  name="group1"
                  type="checkbox"
                />
              </Form>
            </div>
          </Row>
          <div className="py-3 px-3">{renderForm()}</div>
          <Row>
            <div className="px-5">
              <Form>
                <Form.Check
                  inline
                  style={{ color: "white" }}
                  label="label goes here"
                  name="group1"
                  type="switch"
                />
              </Form>
            </div>
          </Row>
          <Row>
            <div className="text-center py-3">
              <button
                style={{
                  border: "none",
                  width: "20%",
                  backgroundImage:
                    "linear-gradient(to right top, #be0019, #b30039, #990057, #6c006f, #13097f)",
                  color: "white",
                  padding: "6px",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  borderRadius: "10px",
                }}
                onClick={() => setQrCodePage(true)}
              >
                Create Token
              </button>
            </div>
          </Row>
        </div>
      )}
    </>
  );
};

export default CreateToken;
