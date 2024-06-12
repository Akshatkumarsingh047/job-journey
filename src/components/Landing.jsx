import React from "react";
import navlogo from "../assets/images/navlogo.png";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <main className="min-h-screen pb-4 px-6 overflow-hidden space-y-[4vh]">
        <nav className="mt-2 mb-10 ">
          <Link to={"/"}>
            {" "}
            <img
              src={navlogo}
              className="h-[10vh] w-[50vw] sm:h-20 sm:w-80 mx-auto anm"
              alt=""
            />
          </Link>
        </nav>
        <div className="container page sm:flex sm:items-center sm:justify-between  space-y-[2.2vh]">
          <div className=" sm:hidden fade-in-from-right mb-2 mx-auto block md:h-[70%] md:w-72 h-[70%] w-[70%] self-start  ">
            <img src={main} alt="" className="img  " />
          </div>
          <div className="info md:pt-24">
            <h1 className="font-bold text-[6.55vh] md:text-[8vh] tracking-widest space-y-[2.2vh] anm">
              job{" "}
              <span className="text-[#a435f0] font-bold tracking-widest">
                tracking
              </span>{" "}
              app
            </h1>
            <p className=" fade-in-from-left text-xs md:text-xl -mt-4 tracking-widest opacity-70">
              Welcome to Job-Journey: Your Ultimate Job Tracking Solution
              Finding and keeping track of job applications has never been
              easier. With Job-Journey, you can seamlessly manage all your job
              applications in one place. Whether you're applying for your dream
              job or tracking multiple opportunities, Job-Journey helps you stay
              organized and on top of your job search.
            </p>
            <Link
              to={"/register"}
              className="text-xl text-white rounded-md px-3 py-2 bg-[#a435f0] capitalize bouncing-element"
            >
              login/register
            </Link>
          </div>
          <div className=" hidden fade-in-from-right sm:block md:h-[50vh] h-[70%] w-72 md:w-[50vw] self-start">
            <img src={main} alt="" className="img mt-12 fadeInFromRight" />
          </div>
        </div>
      </main>
    </>
  );
};

export default Landing;
