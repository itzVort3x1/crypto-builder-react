import React, { useState } from "react";
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  Menu,
  MenuItem,
} from "react-pro-sidebar";
import { FaCoins, FaRocket, FaSnowflake, FaScroll } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import "react-pro-sidebar/dist/css/styles.css";
import Body from "./tokenManagement";
import LoadingAnimation from "./loadingAnimation";
import { Link } from "react-router-dom";

const SideBar = (props) => {
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(true);
  const [activeScreen, setActiveScreen] = useState("TokenManagement");

  function ScreenRender() {
    if (activeScreen === "TokenManagement") {
      return <Body />;
    } else if (activeScreen === "IDO") {
      return <LoadingAnimation />;
    } else if (activeScreen === "NFT") {
      return <div>Hello</div>;
    } else if (activeScreen === "DOC") {
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
                          fontSize: "30px",
                          letterSpacing: "2px",
                          fontWeight: "bold",
                          color: "black",
                          fontFamily: "Dancing Script, cursive",
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
                  style={{
                    color:
                      activeScreen === "TokenManagement" ? "white" : "black",
                    backgroundColor:
                      activeScreen === "TokenManagement" ? "purple" : "white",
                  }}
                  icon={<FaCoins color="white" size={20} />}
                  onClick={() => setActiveScreen("TokenManagement")}
                >
                  Token Management
                </MenuItem>
                <MenuItem
                  style={{
                    color: activeScreen === "IDO" ? "white" : "black",
                    backgroundColor:
                      activeScreen === "IDO" ? "purple" : "white",
                  }}
                  icon={<FaRocket color="white" size={20} />}
                  onClick={() => setActiveScreen("IDO")}
                >
                  Apply for IDO
                </MenuItem>
                <MenuItem
                  style={{
                    color: activeScreen === "NFT" ? "white" : "black",
                    backgroundColor:
                      activeScreen === "NFT" ? "purple" : "white",
                  }}
                  icon={<FaSnowflake color="white" size={20} />}
                  onClick={() => setActiveScreen("NFT")}
                >
                  NFT
                </MenuItem>
                <MenuItem
                  style={{
                    color: activeScreen === "DOC" ? "white" : "black",
                    backgroundColor:
                      activeScreen === "DOC" ? "purple" : "white",
                  }}
                  icon={<FaScroll color="white" size={20} />}
                  onClick={() => setActiveScreen("DOC")}
                >
                  Documentation
                </MenuItem>
                <MenuItem
                  style={{ color: "black" }}
                  onClick={() => {
                    setMenuCollapse(!menuCollapse);
                    setActiveScreen("TokenManagement");
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
