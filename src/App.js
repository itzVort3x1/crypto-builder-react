import React from "react";
import SideBar from "./components/sideBar.js";
import Routes from "./routes";

function App() {
  return (
    <>
      <SideBar>
        <Routes />
      </SideBar>
    </>
  );
}

export default App;
