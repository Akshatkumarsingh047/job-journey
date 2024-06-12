import React from "react";
import { FaTimes } from "react-icons/fa";

export const Using = ({ show, handleShow }) => {
  return (
    <div
      className={`h-[80%] w-[80%] mx-3 md:mx-[30vw] md:h-[40%] md:w-[45%] bg-[#3b3b3b]  px-4 py-2 rounded-xl ${
        show ? "block" : "hidden"
      } mx-auto mt-[15vh]`}
    >
      <button
        type="button"
        className="text-red-400 hover:text-red-700 text-4xl ml-[5%]"
        onClick={handleShow}
      >
        <FaTimes />
      </button>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-[#a435f0] font-bold text-3xl">important</h1>
        <div>
          <h3 className="text-[#a435f0] text-lg font-thin tracking-widest -mb-[4px]">
            {" "}
            if you want to use application
          </h3>
          <p className="text-red-600 text-lg font-semibold tracking-widest ">
            register/login with your E-mail
          </p>
          <h2 className="text-[#a435f0] text-xl font-semibold tracking-widest -mb-[4px]">
            {" "}
            if you want to explore
          </h2>
          <p className="text-zinc-400 text-sm font-semibold tracking-widest">
            you can{" "}
            <span className="uppercase text-lg text-green-500">login</span> with
            (optional)
            <p className="text-red-600 font-bold text-xl -mb-1 font-sans">
              E-mail: test<span className="text-green-500">U</span>ser@test.com
            </p>
            <p className="text-red-600 font-bold text-xl">Password: secret</p>
          </p>
        </div>
      </div>
    </div>
  );
};
