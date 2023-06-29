import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/actions/auth";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.loginStatus);
  const [show, setShow] = useState(false);
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !menuButtonRef.current.contains(event.target)
      ) {
        const btn = document.getElementById("menu-icon");
        btn.classList.toggle("open");
        if (!show) {
          btn.classList.remove("no-animation");
        }
        setShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleMenu() {
    const btn = document.getElementById("menu-icon");
    btn.classList.toggle("open");
    if (!show) {
      btn.classList.remove("no-animation");
    }
    setShow((prevState) => !prevState);
  }
  const handleLogOut = (e) => {
    e.preventDefault();
    try {
      dispatch(logout());
      navigate("/");
      handleMenu();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-between items-center relative">
      <Link to={"/"}>
        <img src={logo} alt="" className="w-[50px] sm:w-[70px]" />
      </Link>
      <div
        onClick={() => handleMenu()}
        className="hamburger no-animation flex justify-center"
        id="menu-icon"
        ref={menuButtonRef}
      >
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </div>
      {show && (
        <div
          ref={menuRef}
          className={`bg-white px-4 py-2 flex flex-col absolute top-0  border font-Inter text-[16px] md:text-[26px]  font-black rounded-lg justify-center -right-2 shadow-md`}
        >
          {!isLoggedIn ? (
            <>
              <div className="h-[40px]"></div>
              <Link
                className="border-t px-2 py-2"
                onClick={() => handleMenu()}
                to={"/auth/login"}
              >
                Login
              </Link>
              <Link
                className="border-t px-2 py-2"
                onClick={() => handleMenu()}
                to={"/auth/register"}
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <div className="h-[40px]"></div>
              <Link
                to={"/dashboard"}
                className="border-t px-2 py-2"
                onClick={() => handleMenu()}
              >
                Dashboard
              </Link>
              <Link
                to={"/profile-setup"}
                className="border-t px-2 py-2 "
                onClick={() => handleMenu()}
              >
                Profile
              </Link>

              <div
                className="border-t cursor-pointer px-2 py-2  "
                onClick={handleLogOut}
              >
                Log out
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default NavBar;
