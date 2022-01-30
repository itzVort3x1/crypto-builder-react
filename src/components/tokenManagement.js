import { useState } from "react";
import { Button, Modal, Row } from "react-bootstrap";
import Dashboard from "./dashboard";
var obj;
const Body = (props) => {
  
  
  const [show, setShow] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getProvider = async () => {
    const isPhantomInstalled = window.solana && window.solana.isPhantom;
    if(isPhantomInstalled === true) {
      
      try {
        const resp = await window.solana.connect();
        resp.publicKey.toString();
      } catch (err) {}
      
      
      const wallet={

        'wallet': window.solana.publicKey.toString()
      } 
      fetch('http://localhost:5000/authenticate', {
  method: 'POST', // or 'PUT'
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(wallet)
})
.then(res => res.json())
.then(data => obj = data)
.then(() => {
  console.log('Success:', obj);
  handleClose()
  setShowDashboard(true);
}) 

      

    } else {
      window.open("https://phantom.app/", "_blank");
    }
  }
  return (
    <>
      {showDashboard && <Dashboard data={obj}/>}
      {!showDashboard && (
        <div
          style={{
            position: "relative",
            top: "50%",
            transform: "translateY(-50%)",
            textAlign: "center",
          }}
        >
          <Button variant="dark" size="lg" onClick={handleShow}>
            Connect To Wallet
          </Button>
          <p className="mt-3">Please connect your wallet</p>
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

export default Body;
