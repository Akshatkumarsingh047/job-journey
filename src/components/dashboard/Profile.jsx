import React, { useState } from "react";
import FormRow from "../FormRow";
import { ToastContainer, toast } from "react-toastify";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../features/UserSlice";

function Profile() {
  const { isLoading, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    lastName: user?.lastName || "",
    location: user?.location || "",
  });

  const { name, email, lastName, location } = userData;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !lastName || !location) {
      toast.error("please fill out all fields");
      return;
    }
    dispatch(updateUser(userData));
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <>
      <Wrapper>
        <form action="" className="form" onSubmit={handleSubmit}>
          <h3>profile</h3>
          <div className="form-center">
            <FormRow
              type="text"
              name="name"
              value={userData.name}
              handleChange={handleChange}
              labelText="First Name"
            />
            <FormRow
              type="text"
              labelText="last name"
              name="lastName"
              value={userData.lastName}
              handleChange={handleChange}
            />
            <FormRow
              type="email"
              name="email"
              value={userData.email}
              handleChange={handleChange}
            />
            <FormRow
              type="text"
              name="location"
              value={userData.location}
              handleChange={handleChange}
            />
            <button
              type="submit"
              className="btn btn-block"
              disabled={isLoading}
            >
              {isLoading ? "Please Wait" : "Save changes"}
            </button>
          </div>
        </form>
      </Wrapper>
      <ToastContainer position="top-center" />
    </>
  );
}

export default Profile;
