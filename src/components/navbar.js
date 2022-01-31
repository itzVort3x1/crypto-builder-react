import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { FaCoins, FaRocket, FaSnowflake, FaScroll } from "react-icons/fa";

const NavbarComponent = (props) => {
  let width = window.innerWidth;

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        style={{ width: "100%" }}
      >
        <Container>
          <Navbar.Brand href="#home" style={{ fontFamily: "cursive" }}>
            <img
              alt=""
              src="https://img.icons8.com/cotton/50/000000/blockchain-transactions--v4.png"
              width="30"
              height="30"
              className="d-inline-block align-top mx-3"
            />{" "}
            Crypto Builder
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="/" className="mx-3">
                {width > 950 ? (
                  <FaCoins
                    color={
                      window.location.href === "http://localhost:3000/"
                        ? "white"
                        : ""
                    }
                  />
                ) : (
                  "Token Management"
                )}
              </Nav.Link>
              <Nav.Link href="#memes" className="mx-3">
                {width > 950 ? <FaRocket /> : "Apply for IDO"}
              </Nav.Link>
              <Nav.Link href="#memes" className="mx-3">
                {width > 950 ? <FaSnowflake /> : "NFT"}
              </Nav.Link>
              <Nav.Link href="#memes" className="mx-3">
                {width > 950 ? <FaScroll /> : "Documentation"}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
