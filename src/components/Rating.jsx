import React, { useState } from "react";
import { FcLike } from "react-icons/fc";

export const Rating = ({ on, turnOn }) => {
  const [show, setShow] = useState(false);

  const handleLike = () => {
    setShow(!show);
    setTimeout(() => {
      setShow(false);
    }, 1500);
  };
  return (
    <div
      className={`${
        on ? "block" : "hidden"
      } fixed md:left-[30vw] left-[10vw] z-10`}
    >
      <div
        className={`w-[80%] md:w-[40%] my-[30vh] mx-[10vw] px-4 py-1  md:mx-[15vw] md:my-[30vh]  flex flex-col items-center justify-center bg-[#fff] rounded-xl transition-all delay-75 
     `}
      >
        <div>
          <FcLike className={`text-9xl ${show ? "block" : "hidden"}`} />
          <button
            className={`px-8 py-3 bg-red-500 text-white rounded-lg my-4 font-bold capitalize tracking-wider ${
              show ? "hidden" : "block"
            } animate-bounce`}
            onClick={() => {
              handleLike();
              setTimeout(() => {
                turnOn(false);
              }, 1500);
            }}
          >
            like
          </button>
        </div>
        <h3 className="font-bold text-sm tracking-widest text-lime-500">
          developed by Akshat
        </h3>
      </div>
    </div>
  );
};
