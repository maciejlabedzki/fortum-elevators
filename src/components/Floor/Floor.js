import React, { useEffect } from "react";
import { connect } from "react-redux";
import Select from "react-select";
import "./Floor.scss";

let options = [];

const Floor = ({ loaded, dispatch, floors }) => {
  useEffect(() => {
    for (var i = 0; i < floors; i++) {
      options = options.concat({ value: i, label: i });
    }
  }, [floors]);

  const handleSelect = (selectedOption) => {
    dispatch({ type: "CHANGE_FLOOR", floor: selectedOption.value });
  };

  return (
    <>
      {loaded && (
        <div className="floor-container">
          <Select
            className="floor-selection"
            onChange={handleSelect}
            options={options}
            placeholder="0"
            menuPlacement="top"
            alignItems="center"
          />
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  currentFloor: state.reducerFloor.currentFloor,
  loaded: state.reducerLoading.loaded,
  floors: state.reducerBuilding.floors,
});

const mapDispatchToProps = (dispatch) => {
  return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(Floor);
