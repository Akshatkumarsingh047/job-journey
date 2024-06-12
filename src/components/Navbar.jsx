import React, { useEffect } from "react";
import Logo from "../assets/images/navlogo.png";
import { useState } from "react";
import Wrapper from "../assets/wrappers/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { FaAlignLeft, FaCaretDown, FaUserCircle } from "react-icons/fa";
import { clearStore, logoutUser, toggleSidebar } from "../features/UserSlice";
import { toast } from "react-toastify";

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggle}>
          <FaAlignLeft />
        </button>
        <div className=" ">
          <img
            src={Logo}
            alt=""
            className="h-[40%] w-[40%] md:h-[25%] md:w-[25%] ml-[25%] md:hidden block"
          />
          <h3 className=" hidden md:block">dashboard</h3>
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="btn"
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
            <button
              type="button"
              className="dropdown-btn"
              onClick={() => dispatch(clearStore("Logging out..."))}
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
