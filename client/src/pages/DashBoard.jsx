import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, logout } from "../redux/actions/auth";
import { Loading } from "../components/index";
const DashBoard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const userData = useSelector((state) => state.auth.user);
  const isLoggedIn = useSelector((state) => state.auth.loginStatus);
  useEffect(() => {
    dispatch(getUser());
  }, [isLoggedIn]);
  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="">
      DashBoard
      <div>Hello, {userData.name}</div>
    </div>
  );
};

export default DashBoard;
