import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { showStats } from "../../features/allJobsSlice";
import Loading from "../Loading";
import ChartsContainer from "../ChartsContainer";
import Statscontainer from "../Statscontainer";

function Stat() {
  const { isLoading, monthlyApplications } = useSelector(
    (store) => store.allJobs
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showStats());
    // eslint-disable-next-line
  }, []);
  if (isLoading) {
    return <Loading center />;
  }

  return (
    <>
      <Statscontainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  );
}

export default Stat;
