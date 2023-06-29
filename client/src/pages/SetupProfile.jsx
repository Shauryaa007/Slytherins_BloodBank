import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, getUser } from "../redux/actions/auth";
import { useNavigate } from "react-router-dom";
import { Loading } from "../components/index";

const SetupProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.user);
  const isLoggedIn = useSelector((state) => state.auth.loginStatus);
  const loading = useSelector((state) => state.loading);

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
    <div>
      SetupProfile
      <div>Hello, {userData.name}</div>
      <div>Setup your profile</div>
    </div>
  );
};

export default SetupProfile;
