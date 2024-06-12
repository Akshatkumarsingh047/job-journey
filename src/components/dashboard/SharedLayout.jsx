import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import BigSidebar from "../BigSidebar";
import Smallsidebar from "../Smallsidebar";
import Navbar from "../Navbar";
import Wrapper from "../../assets/wrappers/SharedLayout";
import { ToastContainer, toast } from "react-toastify";
import Register from "../Register";
import { Rating } from "../Rating";

const SharedLayout = () => {
  const [on, setOn] = useState(false);
  const turnOn = (id) => {
    setOn(id);
  };
  useEffect(() => {
    setTimeout(() => {
      setOn(true);
    }, 5000);
  }, []);

  return (
    <>
      <Rating turnOn={turnOn} on={on} />
      <div>
        <Wrapper className={`${on ? "opacity-10" : ""} `}>
          <main className="dashboard">
            <Smallsidebar />
            <BigSidebar />
            <div>
              <Navbar />
              <div className="dashboard-page">
                <Outlet />
              </div>
            </div>
          </main>
        </Wrapper>
        <ToastContainer />
      </div>
    </>
  );
};

export default SharedLayout;
