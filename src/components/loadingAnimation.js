import react, { useState, useRef, useEffect } from "react";
import Lottie from "lottie-web";

const LoadingAnimation = (props) => {
  const container = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current, // the dom element that will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./loading.json"),
    });
  }, []);

  return (
    <div className="text-center">
      <div
        style={{ height: "300px", width: "300px" }}
        className="container"
        ref={container}
      ></div>
    </div>
  );
};

export default LoadingAnimation;
