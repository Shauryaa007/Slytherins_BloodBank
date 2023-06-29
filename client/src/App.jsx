import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { IndexPage } from "./components/index";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "./redux/actions/auth";
import {
  LandingPage,
  LoginPage,
  RegisterPage,
  DashBoard,
  SetupProfile,
} from "./pages/index";
const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.loginStatus);
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch, isLoggedIn]);
  return (
    <div className="relative min-h-screen bg-bg-gradient bg-no-repeat">
      <div className="z-10">
        <Routes>
          <Route path="/" element={<LandingPage />}>
            <Route index path="/" element={<IndexPage />} />
            <Route path="/auth/register" element={<RegisterPage />} />
            <Route path="/auth/login" element={<LoginPage />} />
            {isLoggedIn && (
              <>
                <Route path="/dashboard" element={<DashBoard />} />
                <Route path="/profile-setup" element={<SetupProfile />} />
              </>
            )}
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
