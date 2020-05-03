const validateMsg = (data) => {
  let id = data.id;
  const state = data.state;
  const floor = data.floor;
  const target = data.targetFloor;
  let stateText = "New information";

  // id
  if (id === undefined) {
    id = "";
  } else {
    id = id.slice(id.length - 1, id.length);
  }

  // state
  if (state === undefined) {
    stateText = "";
  } else if (state === "up" || state === "down") {
    stateText =
      "Elevator " +
      (Number(id) + 1) +
      " is going " +
      state +
      " to the floor " +
      target;
  } else if (state === "stopped") {
    stateText =
      "Elevator " + (Number(id) + 1) + " is arrived on the floor " + floor;
  }

  return stateText;
};

export default validateMsg;
