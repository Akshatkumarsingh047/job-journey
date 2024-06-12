import React from "react";
import Links from "../Links/Links";
import { NavLink } from "react-router-dom";

function Navlinks({ toggleSidebar }) {
  return (
    <div>
      {Links.map((link, index) => {
        const { id, path, text, icon } = link;
        return (
          <NavLink
            to={path}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            key={id}
            onClick={toggleSidebar}
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
}

export default Navlinks;
