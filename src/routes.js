import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const ConnectToWallet = React.lazy(() => import("./components/sideBar"));

const RoutesNavigation = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={ConnectToWallet} />
      </Routes>
    </Router>
  );
};

export default RoutesNavigation;
