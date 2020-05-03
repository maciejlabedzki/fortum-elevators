import { combineReducers } from "redux";
import reducerLoading from "./loading";
import reducerElevator from "./elevator";
import reducerFloor from "./floor";
import reducerBuilding from "./building";
import reducerNotyfication from "./notification";

const rootReducers = combineReducers({
  reducerLoading,
  reducerBuilding,
  reducerElevator,
  reducerFloor,
  reducerNotyfication,
});

export default rootReducers;
