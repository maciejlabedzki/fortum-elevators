import validateMsg from "../module/Notification/validate";

const initialState = { msg: "All elevators are ready to call." };

const reducerNotyfication = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NOTYFICATION":
      return { msg: validateMsg(action.msg) };
    default:
      return state;
  }
};

export default reducerNotyfication;
