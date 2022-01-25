import React from "react";
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

const FormHeader = [
  { title: "Token name" },
  { title: "Token Symbol" },
  { title: "Mint authority" },
  { title: "Freeze authority" },
  { title: "Decimals" },
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
            <h5>
              {item.title} <AiFillInfoCircle color="purple" />
            </h5>
          </Col>
          <Col lg={10}>
            <p>askdjfhiausdf8as7dfhasidjfha8sd7</p>
          </Col>
        </Row>
      );
    });
  }

  return (
    <div>
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
              <AiOutlineInfoCircle color="black" size={25} /> it takes 1 SOL to
              mint a token, save 25% by paying with SMRT
            </p>
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
            <Button variant="info">Create Token</Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CreateToken;
