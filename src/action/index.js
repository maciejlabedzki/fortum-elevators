import axios from "axios";

export function handleDataBuilding() {
  return function (dispatch) {
    return axios
      .get("http://localhost:8080/building")
      .then((response) => {
        dispatch({ type: "SET_FLOORS", floors: response.data.floors });
        dispatch({
          type: "SET_ELEVATORS",
          elevators: response.data.elevators,
        });
        dispatch({ type: "LOAD_BUILDING" });
      })
      .catch((error) => {
        dispatch({
          type: "ERROR",
          error: "Data from '.../building'.",
        });
      });
  };
}

export function handleDataElevators() {
  return function (dispatch) {
    return axios
      .get("http://localhost:8080/elevators")
      .then((response) => {
        dispatch({ type: "ADD_STATE", data: response.data });
        dispatch({ type: "LOAD_ELEVATORS" });
      })
      .catch((error) => {
        dispatch({
          type: "ERROR",
          error: "Data from '.../elevators'.",
        });
      });
  };
}

export function handleDataStream() {
  return function (dispatch) {
    dispatch({ type: "LOADED" });
    const events = new EventSource("http://localhost:8080/stream");
    events.onmessage = (event) => {
      const parsedData = JSON.parse(event.data);
      dispatch({ type: "SET_NOTYFICATION", msg: parsedData });
      dispatch({ type: "UPDATE_ELEVATOR", payload: parsedData });
    };
    events.onerror = function () {
      dispatch({
        type: "ERROR",
        error: "Data from '.../stream'. ",
      });
    };
  };
}

export function handleCallElevator(currentFloor) {
  return function (dispatch) {
    axios
      .put("http://localhost:8080/floor/" + currentFloor)
      .then((response) => {})
      .catch((error) => {
        dispatch({
          type: "ERROR",
          error: "Data from '.../floor'.",
        });
      });
  };
}
