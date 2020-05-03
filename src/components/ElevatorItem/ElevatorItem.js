import React from "react";
import "./ElevatorItem.scss";
import "../../css/vendor/font/flaticon.css";

const ElevatorItem = ({ floor, state, lp, length }) => {
  let animationUp = "";
  let animationDown = "";
  let animationFloor = "";
  if (state === "up") {
    animationUp = " animated infinite pulse";
  }

  if (state !== "stopped") {
    animationFloor = " animated infinite bounceOut ";
  }

  if (state === "down") {
    animationDown = " animated infinite pulse";
  }

  return (
    <>
      <div
        className="elevator-card-item"
        data-state={state}
        data-length={length}
      >
        <div className="label">
          <i className="icon flaticon-elevator"></i>
          {lp}
        </div>
        <div className={"elevator-move elevator-move__up" + animationUp}>▲</div>
        <div className={"elevator-current-floor"}>
          <label className={" " + animationFloor}>{floor}</label>
        </div>
        <div className={"elevator-move elevator-move__down" + animationDown}>
          ▼
        </div>
      </div>
    </>
  );
};

export default ElevatorItem;
