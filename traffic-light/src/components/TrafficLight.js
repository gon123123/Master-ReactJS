import React from "react";
import classNames from "classnames";
import "./TrafficLight.css";

function TrafficLight() {
  const RED = 0;
  const ORANGE = 1;
  const GREEN = 2;

  function getNextColor(color) {
    switch (color) {
      case RED:
        return ORANGE;
      case ORANGE:
        return GREEN;
      default:
        return RED;
    }
  }

  ////////
  var currentColor = RED;
  setInterval(() => {
    currentColor = getNextColor(currentColor);
    console.log(currentColor);
  }, 2000);
  ////////
  return (
    <div className="TrafficLight">
      <div
        className={classNames("bulb", "red", {
          active: currentColor === RED,
        })}
      ></div>
      <div
        className={classNames("bulb", "orange", {
          active: currentColor === ORANGE,
        })}
      ></div>
      <div
        className={classNames("bulb", "green", {
          active: currentColor === GREEN,
        })}
      ></div>
    </div>
  );
}
export default TrafficLight;
