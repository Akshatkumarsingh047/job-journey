import React from "react";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { toast, ToastContainer } from "react-toastify";
import FormRow from "../FormRow";
import { useDispatch, useSelector } from "react-redux";
import FormRowSelect from "../FormRowSelect";
import {
  clearValues,
  createJob,
  editJob,
  handleChange,
} from "../../features/JobSlice";

const Addjob = () => {
  const {
    isLoading,
    position,
    company,
    jobType,
    jobLocation,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!position || !company || !jobLocation) {
      toast.error("please fill out all fields");
      return;
    }
    if (isEditing) {
      dispatch(
        editJob({
          jobId: editJobId,
          job: {
            position,
            company,
            jobLocation,
            jobType,
            status,
          },
        })
      );

      return;
    }
    dispatch(createJob({ position, company, jobLocation, jobType, status }));
  };
  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };

  return (
    <>
      {" "}
      <Wrapper>
        <form action="" className="form">
          <h3>{isEditing ? "edit job" : "add job"}</h3>
          <div className="form-center">
            <FormRow
              type={"text"}
              name={"position"}
              value={position}
              handleChange={handleJobInput}
            />
            <FormRow
              type="text"
              name="company"
              value={company}
              handleChange={handleJobInput}
            />
            {/* location */}
            <FormRow
              type="text"
              labelText="job location"
              name="jobLocation"
              value={jobLocation}
              handleChange={handleJobInput}
            />
            <FormRowSelect
              name={"status"}
              value={status}
              handleChange={handleJobInput}
              list={statusOptions}
            />
            <FormRowSelect
              name={"jobType"}
              labelText={"job Type"}
              value={jobType}
              handleChange={handleJobInput}
              list={jobTypeOptions}
            />
            {/* btn container */}
            <div className="btn-container">
              <button
                type="button"
                className="btn btn-block clear-btn"
                onClick={() => dispatch(clearValues())}
              >
                clear
              </button>
              <button
                type="submit"
                className="btn btn-block submit-btn"
                onClick={handleSubmit}
                disabled={isLoading}
              >
                submit
              </button>
            </div>
          </div>
        </form>
      </Wrapper>
      <ToastContainer toastStyle={{ backgroundColor: "#1c1c1c" }} />
    </>
  );
};

export default Addjob;
