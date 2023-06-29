// import axios from "axios";
import axios from "../../axiosConfig";
import {
  REGISTER_USER_ERROR,
  REGISTER_USER_SUCCESS,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  SET_USER,
  LOGOUT_USER,
} from "./types";
import { setloading } from "./loading";
export const register =
  (name, email, phone, adhaar, dob, password) => async (dispatch) => {
    try {
      dispatch(setloading(true));
      await axios.post("/auth/register", {
        name,
        email,
        phone,
        adhaar,
        dob,
        password,
      });
      dispatch({ type: REGISTER_USER_SUCCESS });
      dispatch(getUser());
      dispatch(setloading(false));
    } catch (error) {
      dispatch({ type: REGISTER_USER_ERROR });
      dispatch(setloading(false));
    }
  };

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch(setloading(true));
    await axios.post("/auth/login", { email, password });
    dispatch({ type: LOGIN_USER_SUCCESS });
    dispatch(getUser());
    dispatch(setloading(false));
  } catch (error) {
    dispatch({ type: LOGIN_USER_ERROR });
    dispatch(setloading(false));
  }
};
export const logout = () => async (dispatch) => {
  try {
    dispatch(setloading(true));
    await axios.get("/auth/logout");
    dispatch({ type: LOGOUT_USER });
    dispatch(setloading(false));
  } catch (error) {
    console.log(error);
    dispatch(setloading(false));
  }
};
export const getUser = () => async (dispatch) => {
  try {
    dispatch(setloading(true));
    const { data } = await axios.get("/auth/getUser");
    dispatch({ type: SET_USER, payload: data });
    dispatch(setloading(false));
  } catch (error) {
    dispatch(setloading(false));
  }
};
