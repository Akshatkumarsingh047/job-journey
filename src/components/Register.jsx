import React, { useState, useEffect } from "react";
import logo from "../assets/images/navlogo.png";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { FaEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../features/UserSlice";
import { Using } from "./Using";

const Register = () => {
  const { isLoading, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [visibility, setVisibility] = useState(false);
  const [show, setShow] = useState(true);
  const [type, setType] = useState("password");
  const navigate = useNavigate();
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
  const onSubmit = (data) => {
    const { name, email, password } = data;

    // toast.success("registered successfully", {
    //   position: "top-right",
    //   className: "w-[80%] h-full md:w-full ",
    // });

    dispatch(registerUser({ name: name, email: email, password: password }));

    reset();
  };
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  }, [user]);
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <Using show={show} handleShow={handleShow} />
      <div className={`${show ? "hidden" : "block"}`}>
        <div
          className="flex items-center justify-center min-h-screen py-6 overflow-x-hidden
    "
        >
          {isLoading == false ? (
            <form
              noValidate
              className={` w-[80%] min-h-[80%]  md:w-[40%] shadow-md shadow-[#000000] rounded-md bg-[#1c1c1c] `}
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
                  <h3 className="font-bold tracking-widest ">Register</h3>
                </div>

                {/* name field */}
                <div className="form-row -my-7">
                  <div>
                    <label htmlFor="name" className="form-label">
                      name
                    </label>
                    <input
                      {...register("name", {
                        required: {
                          value: true,
                          message: "name is required",
                        },
                      })}
                      type="text"
                      name="name"
                      placeholder="Your Name "
                      className="form-input outline-none"
                    />
                    <p className="text-red-500 text-sm font-semibold tracking-wider capitalize">
                      {errors.name?.message}
                    </p>
                  </div>
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
                      className="form-input outline-none"
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
                    <div className="flex w-full border bg-[#1c1c1c] border-[#bcccdc] rounded-md h-10 items-center justify-between pr-6">
                      <input
                        type={type}
                        name="password"
                        {...register("password", {
                          required: {
                            value: true,
                            message: "password is required",
                          },
                        })}
                        className="bg-[#1c1c1c] rounded-md outline-none h-full w-full"
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
                  className={`bg-[#d099f0] w-full py-2 rounded-md text-lg text-white tracking-widest font-semibold hover:bg-[#a435f0] 
           `}
                >
                  submit
                </button>
                <p className="p-4">
                  {" "}
                  Already a member?{" "}
                  <Link
                    to={"/login"}
                    className="underline decoration-[#a435f0] text-[#a435f0] "
                  >
                    login
                  </Link>
                </p>
              </div>
            </form>
          ) : (
            <div>
              <div className="loader1 relative left-8"></div>
              <div className="loader text-[#a435f0]"></div>
            </div>
          )}
        </div>
        <ToastContainer position="top-center" />
      </div>
    </>
  );
};

export default Register;
/* HTML: <div class="loader"></div> */
