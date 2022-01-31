import React, { Suspense } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LoadingAnimation from "./components/animation/loadingAnimation";

const ConnectToWallet = React.lazy(() =>
  import("./components/connectToWallet")
);

const RoutesNavigation = () => {
  return (
    <Router>
      <Suspense
        fallback={
          <div>
            <LoadingAnimation />
          </div>
        }
      >
        <Routes>
          <Route exact path="/" element={<ConnectToWallet />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default RoutesNavigation;
