const initialState = { floors: 0, elevators: 0 };

const reducerBuilding = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FLOORS":
      return { ...state, floors: action.floors };
    case "SET_ELEVATORS":
      return { ...state, elevators: action.elevators };
    default:
      return state;
  }
};

export default reducerBuilding;
