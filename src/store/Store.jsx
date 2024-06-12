import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/UserSlice";
import jobSlice from "../features/JobSlice";
import allJobsSlice from "../features/allJobsSlice";

export default configureStore({
  reducer: {
    user: userSlice,
    job: jobSlice,
    allJobs: allJobsSlice,
  },
});
