import React, { useState } from "react";
import { Button, Modal, Row } from "react-bootstrap";
import "react-pro-sidebar/dist/css/styles.css";
import NavbarComponent from "./navbar";
import Dashboard from "./dashboard";
var obj;
const ConnectToWallet = (props) => {
  const [show, setShow] = useState(false);
  const [showDashboard, setShowDashboardState] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getProvider = async () => {
    const isPhantomInstalled = window.solana && window.solana.isPhantom;
    if (isPhantomInstalled === true) {
      try {
        const resp = await window.solana.connect();
        resp.publicKey.toString();
      } catch (err) {}

      const wallet = {
        wallet: window.solana.publicKey.toString(),
      };
      fetch("http://localhost:5000/authenticate", {
        method: "POST", // or 'PUT'
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(wallet),
      })
        .then((res) => res.json())
        .then((data) => (obj = data))
        .then(() => {
          console.log("Success:", obj);
          handleClose();
          setShowDashboardState(true);
          window.location.href = "/dashboard";
        });
    } else {
      window.open("https://phantom.app/", "_blank");
      handleClose();
      setShowDashboardState(true);
    }
  };

  return (
    <>
      <NavbarComponent data={obj} />
      {showDashboard && <Dashboard />}
      {!showDashboard && (
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{
              textAlign: "center",
              margin: "0",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Button variant="success" size="lg" onClick={handleShow}>
              Connect To Wallet
            </Button>
            <p className="mt-3" style={{ color: "gray" }}>
              Please connect your wallet
            </p>
          </div>
          {
            <Modal show={show} onHide={handleClose} centered size="sm">
              <Modal.Header closeButton>
                <Modal.Title>Select Wallet</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Row style={{ padding: "10px" }}>
                  <Button
                    variant="warning"
                    size="lg"
                    onClick={() => {
                      handleShow();
                      getProvider();
                    }}
                  >
                    Phantom
                  </Button>
                </Row>
                <Row style={{ padding: "10px" }}>
                  <Button variant="warning" size="lg" onClick={handleShow}>
                    Solfare
                  </Button>
                </Row>
                <Row style={{ padding: "10px" }}>
                  <Button variant="warning" size="lg" onClick={handleShow}>
                    Torus
                  </Button>
                </Row>
                <Row style={{ padding: "10px" }}>
                  <Button variant="warning" size="lg" onClick={handleShow}>
                    Ledger
                  </Button>
                </Row>
              </Modal.Body>
            </Modal>
          }
        </div>
      )}
    </>
  );
};

export default ConnectToWallet;
