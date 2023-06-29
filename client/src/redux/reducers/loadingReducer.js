import { SET_LOADING } from "../actions/types";

const initalState = false;

const loadingReducer = (state = initalState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return action.payload;
    default:
      return state;
  }
};

export default loadingReducer;
