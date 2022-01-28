import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
  AiOutlineCopy,
} from "react-icons/ai";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

import CreateToken from "./createToken";

const details = [
  {
    name: "SPL",
    ticker: "SPL",
    address: "0x00000000",
  },
  {
    name: "SPL",
    ticker: "SPL",
    address: "0x00000000",
  },
  {
    name: "SPL",
    ticker: "SPL",
    address: "0x00000000",
  },
];

const Dashboard = (props) => {
  const [show, setShow] = useState(false);

  function renderCoinDetails() {
    return details.map((item) => {
      return (
        <Row
          style={{
            border: "1px solid purple",
            margin: "20px",
            borderRadius: "20px",
            padding: "5px",
          }}
        >
          <Col>
            <h5>Name</h5>
            <h3>{item.name}</h3>
          </Col>
          <Col>
            <h5>Ticker</h5>
            <h3>{item.ticker}</h3>
          </Col>
          <Col>
            <h5>Address</h5>
            <h3>
              {item.address} <AiOutlineCopy size={20} color="purple" />
            </h3>
          </Col>
          <Col style={{ textAlign: "center", marginTop: "20px" }}>
            <button
              style={{
                border: "none",
                backgroundColor: "purple",
                color: "white",
                padding: "6px",
                borderRadius: "10px",
              }}
            >
              Create Token
            </button>
          </Col>
        </Row>
      );
    });
  }

  return (
    <>
      {show && <CreateToken />}
      {!show && (
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
              Token Management
            </h5>
            <hr />
          </div>
          <Row>
            <Col lg={8} xs={12} style={{ padding: "20px" }}>
              <h3>Tokens in your wallet</h3>
              <p>
                Any tokens minted using the address connected to Solminter will
                appear below. Please note: if you have transferred ownership of
                a token you've minted here, it will not appear below.
              </p>
            </Col>
            <Col lg={4} style={{ textAlign: "center" }}>
              <button
                style={{
                  border: "none",
                  backgroundColor: "#161E54",
                  color: "white",
                  padding: "6px",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  borderRadius: "10px",
                }}
                onClick={() => setShow(true)}
              >
                Create A new SPL Token +
              </button>
            </Col>
          </Row>
          <div>{renderCoinDetails()}</div>
          <Row>
            <Col lg={12} style={{ textAlign: "center" }}>
              <AiOutlineDoubleLeft />
              <MdOutlineKeyboardArrowLeft />
              <>1</>
              <MdOutlineKeyboardArrowRight /> <AiOutlineDoubleRight />
            </Col>
          </Row>
        </div>
      )}
    </>
  );
};

export default Dashboard;
