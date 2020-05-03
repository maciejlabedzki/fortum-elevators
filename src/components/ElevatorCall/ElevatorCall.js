import React from "react";
import { connect } from "react-redux";

import "./ElevatorCall.scss";
import * as actionCreator from "../../action/index.js";

const ElevatorCall = ({ loaded, currentFloor, handleCallElevator }) => {
  return (
    <>
      {loaded && (
        <div
          className="elevator-call-container"
          onClick={() => handleCallElevator(currentFloor)}
        >
          <button className="button-call">▼</button>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  loaded: state.reducerLoading.loaded,
  currentFloor: state.reducerFloor.currentFloor,
});

export default connect(mapStateToProps, actionCreator)(ElevatorCall);
