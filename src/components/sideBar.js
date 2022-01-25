import React, { useState } from "react";
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import { FaCoins, FaRocket, FaSnowflake, FaScroll } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import "react-pro-sidebar/dist/css/styles.css";
import { Row, Col } from "react-bootstrap";
import Body from "./tokenManagement";

const SideBar = (props) => {
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(true);
  const [activeScreen, setActiveScreen] = useState("TokenManagement");

  function ScreenRender() {
    if (activeScreen === "TokenManagement") {
      return <Body />;
    } else if (activeScreen === "IDO") {
      return <div>Hello</div>;
    } else if (activeScreen === "NFT") {
      return <div>Hello</div>;
    } else {
      return <div>Hello</div>;
    }
  }

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <ProSidebar
            collapsed={menuCollapse}
            style={{
              height: "100vh",
              textAlign: "center",
              borderRight: "1px solid black",
            }}
          >
            <SidebarHeader style={{ backgroundColor: "white" }}>
              <div className="logotext mt-4 mb-3">
                {/* small and big change using menucollapse state */}
                <div>
                  {menuCollapse ? (
                    <img
                      src="https://img.icons8.com/cotton/39/000000/blockchain-transactions--v4.png"
                      alt="block"
                    />
                  ) : (
                    <div>
                      <p
                        style={{
                          fontSize: "20px",
                          letterSpacing: "2px",
                          fontWeight: "bold",
                          color: "black",
                        }}
                      >
                        Crypto Builder
                      </p>{" "}
                      <img
                        className="center"
                        src="https://img.icons8.com/cotton/39/000000/blockchain-transactions--v4.png"
                        alt="block"
                      />{" "}
                    </div>
                  )}
                </div>
              </div>
            </SidebarHeader>
            <SidebarContent style={{ backgroundColor: "white" }}>
              <Menu iconShape="circle">
                <MenuItem
                  style={{ color: "black" }}
                  icon={<FaCoins color="white" size={20} />}
                  onClick={() => setActiveScreen("TokenManagement")}
                >
                  Token Management
                </MenuItem>
                <MenuItem
                  style={{ color: "black" }}
                  icon={<FaRocket color="white" size={20} />}
                  onClick={() => setActiveScreen("IDO")}
                >
                  Apply for IDO
                </MenuItem>
                <MenuItem
                  style={{ color: "black" }}
                  icon={<FaSnowflake color="white" size={20} />}
                  onClick={() => setActiveScreen("NFT")}
                >
                  NFT
                </MenuItem>
                <MenuItem
                  style={{ color: "black" }}
                  icon={<FaScroll color="white" size={20} />}
                  onClick={() => setActiveScreen("Documentation")}
                >
                  Documentation
                </MenuItem>
                <MenuItem
                  style={{ color: "black" }}
                  onClick={() => {
                    setMenuCollapse(!menuCollapse);
                  }}
                  icon={
                    !menuCollapse ? (
                      <AiFillCloseCircle color="white" size={20} />
                    ) : (
                      <BsFillArrowRightCircleFill color="white" size={20} />
                    )
                  }
                >
                  {!menuCollapse ? "close" : ""}
                </MenuItem>
              </Menu>
            </SidebarContent>
            <SidebarFooter style={{ backgroundColor: "white" }}>
              <img
                src="https://solminter.com/static/media/builtOn.1297d358.svg"
                alt=""
              ></img>
              {/**
               *  You can add a footer for the sidebar ex: copyright
               */}
            </SidebarFooter>
          </ProSidebar>
          ;
        </div>
        <div style={{ width: "100vw" }}>{ScreenRender()}</div>
      </div>
    </>
  );
};

export default SideBar;
