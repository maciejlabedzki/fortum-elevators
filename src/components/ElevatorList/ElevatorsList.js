import React from "react";
import ElevatorItem from "../ElevatorItem/ElevatorItem";
import { connect } from "react-redux";
import "./ElevatorsList.scss";

const ElevatorList = ({ elevatorList, loaded }) => {
  return (
    <>
      {loaded === true && (
        <div className="elevator-card-list-container">
          <div className="elevator-card-list-wrapper">
            {elevatorList.map((item, index) => {
              return (
                <ElevatorItem
                  key={item["id"]}
                  floor={item["floor"]}
                  state={item["state"]}
                  lp={index + 1}
                  length={elevatorList.length}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  elevatorList: state.reducerElevator,
  loaded: state.reducerLoading.loaded,
});

export default connect(mapStateToProps)(ElevatorList);
