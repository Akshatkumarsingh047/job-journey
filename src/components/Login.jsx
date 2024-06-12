import React, { useEffect, useState } from "react";
import logo from "../assets/images/navlogo.png";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { FaEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { WiDayThunderstorm } from "react-icons/wi";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/UserSlice";
import { Using } from "./Using";

const Login = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const handleShow = () => {
    setShow(!show);
  };
  const dispatch = useDispatch();
  const { isLoading, user } = useSelector((store) => store.user);
  useEffect(() => {
    if (!user)
      toast.warning("please fill all details", {
        position: "top-right",
        className: "w-[80%] h-full md:w-full ",
      });
    if (user) {
      //toast.success(`welcome back ${user.name}`);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [user, navigate]);

  const [visibility, setVisibility] = useState(false);
  const [type, setType] = useState("password");
  const passwordVisible = () => {
    setVisibility(!visibility);
    visibility ? setType("password") : setType("text");
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },

    control,
  } = useForm();
  // --------------------------------onsubmit
  const onSubmit = (data) => {
    const { name, email, password } = data;

    dispatch(loginUser({ email: email, password: password }));

    reset();
  };
  return (
    <>
      <Using show={show} handleShow={handleShow} />
      <div className={`${show ? "hidden" : "block"}`}>
        <div className="flex items-end m-5 justify-center">
          {isLoading == false ? (
            <form
              noValidate
              className={` w-[90%] min-h-[80%]  md:w-[40%] shadow-md shadow-[#000]  rounded-md bg-[#111111] ${
                isLoading ? "opacity-40" : ""
              }`}
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="h-2  mx-auto rounded-se-full rounded-ss-full bg-[#a435f0]"></div>
              <div className="p-6">
                <div className="relative left-1/4">
                  {" "}
                  <div className="w-40">
                    {" "}
                    <img src={logo} alt="" className="img " />
                  </div>
                  <h3 className="font-bold tracking-widest ">Login</h3>
                </div>

                {/* name field */}
                <div className="form-row -my-7">
                  <div>
                    <label htmlFor="email" className="form-label">
                      E-mail
                    </label>
                    <input
                      type="email"
                      {...register("email", {
                        pattern: {
                          value:
                            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                          message: "invalid email address",
                        },
                        required: {
                          value: true,
                          message: "email is required",
                        },
                      })}
                      name="email"
                      placeholder="example@gmail.com"
                      className="form-input outline-none bg-[#1c1c1c]"
                    />
                    <p className="text-red-500 text-sm font-semibold tracking-wider capitalize">
                      {errors.email?.message}
                    </p>
                  </div>
                  <div>
                    {" "}
                    <label htmlFor="password" className="form-label">
                      password
                    </label>
                    <div className="flex w-full border bg-[#1c1c1c] border-[#bcccdc] rounded-md h-10 items-center justify-between px-4">
                      <input
                        type={type}
                        name="password"
                        {...register("password", {
                          required: {
                            value: true,
                            message: "password is required",
                          },
                        })}
                        className="bg-[#1c1c1c] rounded-md w-[90%] outline-none"
                      />{" "}
                      <span
                        className="text-lg cursor-pointer "
                        onClick={passwordVisible}
                      >
                        {visibility ? <FaEye /> : <FaRegEyeSlash />}
                      </span>
                    </div>
                    <p className="text-red-500 text-sm font-semibold tracking-wider capitalize">
                      {errors.password?.message}
                    </p>
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-[#d099f0] w-full py-2 rounded-md text-lg text-white tracking-widest font-semibold hover:bg-[#a435f0]"
                >
                  submit
                </button>
                <p className="p-4">
                  {" "}
                  Not a member?{" "}
                  <Link
                    to={"/register"}
                    className="underline decoration-[#a435f0] text-[#a435f0]"
                  >
                    register
                  </Link>
                </p>
              </div>
            </form>
          ) : (
            <div className="mt-8">
              <div className="loader1 relative left-8"></div>
              <div className="loader2 text-[#a435f0]"></div>
            </div>
          )}
          <ToastContainer toastStyle={{ backgroundColor: "#1c1c1c" }} />
        </div>
      </div>
    </>
  );
};

export default Login;
