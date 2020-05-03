const initialState = { currentFloor: 0 };

const reducerFloor = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_FLOOR":
      return { currentFloor: action.floor };
    default:
      return state;
  }
};

export default reducerFloor;
