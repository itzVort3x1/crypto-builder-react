import React from "react";
import { Col, Row, Form } from "react-bootstrap";
import { AiFillInfoCircle } from "react-icons/ai";

const FormHeader = [
  { title: "Token name", value: "", isDisabled: false },
  { title: "Token Symbol", value: "", isDisabled: false },
  {
    title: "Mint authority",
    value: "askdjfhiausdf8as7dfhasidjfha8sd7",
    isDisabled: true,
  },
  {
    title: "Freeze authority",
    value: "askdjfhiausdf8as7dfhasidjfha8sd7",
    isDisabled: true,
  },
  { title: "Decimals", value: "", isDisabled: false },
];

const CreateToken = () => {
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
            <input
              disabled={item.isDisabled}
              style={{
                border: "none",
                width: "100%",
                height: "100%",
                color: "black",
              }}
              value={item.value}
            />
          </Col>
        </Row>
      );
    });
  }

  return (
    <div
      style={{
        borderRadius: "20px",
      }}
      className="m-4 customShadow"
    >
      <div className="p-3" style={{ textAlign: "center" }}>
        <h4 style={{ color: "white" }}>Token Details</h4>
        <hr style={{ color: "white" }} />
      </div>
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
        <div className="text-center py-3">
          <button
            style={{
              border: "none",
              width: "20%",
              backgroundColor: "purple",
              color: "white",
              padding: "6px",
              paddingLeft: "10px",
              paddingRight: "10px",
              borderRadius: "10px",
            }}
          >
            Move to account
          </button>
        </div>
      </Row>
    </div>
  );
};

export default CreateToken;
