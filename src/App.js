import React, { useEffect } from "react";
import { connect } from "react-redux";

import Loading from "./components/Loading/Loading";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Floor from "./components/Floor/Floor";
import ElevatorCall from "./components/ElevatorCall/ElevatorCall";
import ElevatorList from "./components/ElevatorList/ElevatorsList";
import Notification from "./components/Notification/Notification";

import * as actionCreator from "./action/index.js";

function App({
  state,
  handleDataBuilding,
  handleDataElevators,
  handleDataStream,
}) {
  useEffect(() => {
    if (state.reducerLoading.loadingBuilding === false) {
      handleDataBuilding();
    }

    if (
      state.reducerLoading.loadingBuilding === true &&
      state.reducerLoading.loadingElevators === false
    ) {
      handleDataElevators();
    }

    if (state.reducerLoading.loadingElevators === true) {
      handleDataStream();
    }
  }, [
    state.reducerLoading.loadingBuilding,
    state.reducerLoading.loadingElevators,
    handleDataBuilding,
    handleDataElevators,
    handleDataStream,
  ]);

  return (
    <div className="App">
      <Loading />
      <ErrorPage />
      <ElevatorList />
      <Notification />
      <Floor />
      <ElevatorCall />
    </div>
  );
}

const mapStateToProps = (state) => ({
  state: state,
});

export default connect(mapStateToProps, actionCreator)(App);
