import React, { useEffect } from "react";
import { NavBar, Footer } from "../components/index";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const LandingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;
  const isLoggedIn = useSelector((state) => state.auth.loginStatus);
  useEffect(() => {
    if (isLoggedIn) navigate("/dashboard");
  }, [isLoggedIn]);
  return (
    <div className="container  mx-auto p-4 sm:py-12 sm:px-24 md:px-30 ">
      <NavBar />
      <Outlet />
      {pathname === "/" && <Footer />}
    </div>
  );
};

export default LandingPage;
