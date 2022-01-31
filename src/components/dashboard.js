import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { AiOutlineCopy } from "react-icons/ai";
import "../index.css";

import CreateToken from "./createToken";

import Animation from "./animation/emptyAnimation";

const Dashboard = (props) => {
  var obj = props.data;
  const [show, setShow] = useState(false);

  function renderCoinDetails() {
    if (props?.data?.Coins?.length === 0 || props.data === undefined)
      return (
        <div className="text-center py-3">
          <Animation path="./noData.json" />
          <br />
          <h4 style={{ color: "white" }}>No coins available</h4>
        </div>
      );
    else {
      return props.data?.Coins?.map((item) => {
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
  }

  return (
    <>
      {show && <CreateToken data={obj} />}
      {!show && (
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
            <h5 style={{ color: "white" }}>Tokens in your wallet: </h5>
            <p style={{ color: "white" }}>
              Any tokens minted using the address connected to Solminter will
              appear below. Please note: if you have transferred ownership of a
              token you've minted here, it will not appear below.
            </p>
          </Row>
          <Row>
            <div className="text-center py-3">
              <button
                style={{
                  border: "none",
                  width: "20%",
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
            </div>
          </Row>
          <div>{renderCoinDetails()}</div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
