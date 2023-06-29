import { SET_LOADING } from "./types";

export const setloading = (isLoading) => (dispatch) => {
  try {
    dispatch({ type: SET_LOADING, payload: isLoading });
  } catch (error) {
    console.log(error);
  }
};
