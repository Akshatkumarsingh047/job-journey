import React from "react";
import Wrapper from "../assets/wrappers/SmallSidebar";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../assets/images/navlogo.png";
import { toggleSidebar } from "../features/UserSlice";
import Navlinks from "./Navlinks";

// ----------------
const Smallsidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(toggleSidebar());
  };
  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button type="button" className="close-btn" onClick={toggle}>
            <FaTimes />
          </button>
          <header>
            <img
              src={Logo}
              alt="logo"
              className="h-[90%] w-[90%] sm:h-[70%] sm:w-[70%]"
            />
          </header>
          <Navlinks toggleSidebar={toggle} />
        </div>
      </div>
    </Wrapper>
  );
};

export default Smallsidebar;
