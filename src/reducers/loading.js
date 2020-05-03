const initialState = {
  loading: false,
  loaded: false,
  error: false,
  loadingBuilding: false,
  loadingElevators: false,
  loadingStream: false,
};

const reducerLoading = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true, loaded: false, error: false };
    case "LOADED":
      return { ...state, loading: false, loaded: true, error: false };
    case "ERROR":
      return {
        ...state,
        loading: false,
        loaded: false,
        error: true,
        errorMsg: action.error,
      };
    case "LOAD_BUILDING":
      return {
        ...state,
        loadingBuilding: true,
      };
    case "LOAD_ELEVATORS":
      return {
        ...state,
        loadingElevators: true,
      };
    default:
      return state;
  }
};

export default reducerLoading;
