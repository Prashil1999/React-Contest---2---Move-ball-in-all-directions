import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition, setBallPosition] = useState({
    left: "0px",
    top: "0px"
  });

  const reset = () => {
    setRenderBall(false);
    setX(0);
    setY(0);
    let ballPositionCopy = { ...ballPosition };
    ballPositionCopy.left = x + "px";
    ballPositionCopy.top = y + "px";
    setBallPosition(ballPositionCopy);
  };
  const buttonClickHandler = () => {
    setRenderBall(true);
  };

  const handleClick = (event) => {
    if (event.keyCode === 39) {
      setX(x + 5);
    } else if (event.keyCode === 37) {
      setX(x - 5);
    } else if (event.keyCode === 40) {
      setY(y + 5);
    } else if (event.keyCode === 38) {
      setY(y - 5);
    }
    let ballPositionCopy = { ...ballPosition };
    ballPositionCopy.left = x + "px";
    ballPositionCopy.top = y + "px";
    setBallPosition(ballPositionCopy);
  };
  (function () {
    document.addEventListener("keydown", (event) => handleClick(event));
  })();
  const renderChoice = () => {
    if (renderBall) {
      return <div className="ball" style={ballPosition}></div>;
    } else
      return (
        <button className="start" onClick={buttonClickHandler}>
          Click For One Ball
        </button>
      );
  };

  return (
    <div className="playground">
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;
