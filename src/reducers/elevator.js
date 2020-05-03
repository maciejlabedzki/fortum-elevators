let initialState = [
  // { id: "elv0", floor: 0, state: "stopped" },
  // { id: "elv1", floor: 0, state: "stopped" },
  // { id: "elv2", floor: 0, state: "stopped" },
];

const reducerElevator = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_STATE":
      return (state = action.data);
    case "UPDATE_ELEVATOR":
      return state.map((item) => {
        if (item["id"] === action.payload.id) {
          return {
            ...item,
            floor: action.payload.floor,
            state: action.payload.state,
          };
        } else {
          return item;
        }
      });
    default:
      return state;
  }
};

export default reducerElevator;
