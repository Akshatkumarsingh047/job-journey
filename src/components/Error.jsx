import React from "react";
import error from "../assets/images/error.svg";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col items-center  md:gap-2 overflow-hidden">
      <div className=" h-[40%] pt-[10%] pl-[10%] pr-[10%] pb-[5%] md:pb-4 md:pt-8 md:w-[60%] md:h-fit ">
        {" "}
        <img src={error} alt="error-img" className="object-cover" />
      </div>
      <div className="mx-[5%]">
        <h3 class>Ohh! page not found</h3>
        <p className="text-sm text-zinc-500 tracking-wider">
          {" "}
          we can't seem to find the page you are looking for !!!
        </p>
        <Link to={"/"} className="capitalize text-[#a435f0] underline text-xl">
          {" "}
          back to home
        </Link>
      </div>
    </div>
  );
};

export default Error;
