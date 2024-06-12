import React from "react";
import Wrapper from "../assets/wrappers/BigSidebar";
import Navlinks from "./Navlinks";
import { useSelector } from "react-redux";
import Logo from "../assets/images/navlogo.png";

const BigSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user);
  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen
            ? "sidebar-container "
            : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>
            <img
              src={Logo}
              alt=""
              className="h-[90%] w-[90%] sm:h-[70%] sm:w-[70%]"
            />
          </header>
          <Navlinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
