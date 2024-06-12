import React, { useState } from "react";

import Wrapper from "../assets/wrappers/ChartsContainer.js";
import { useSelector } from "react-redux";
import AreaCharts from "./AreaCharts.jsx";
import BarCharts from "./BarCharts.jsx";

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true);
  const { monthlyApplications: data } = useSelector((store) => store.allJobs);
  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <div className="flex items-center  justify-center gap-4 mx-[30%]">
        <div
          className="px-3 py-1 bg-[#a435f0] text-white font-semibold rounded tracking-widest cursor-pointer"
          onClick={() => setBarChart(!barChart)}
        >
          {" "}
          click
        </div>
        <h2>{!barChart ? "Area Chart" : "Bar Chart"}</h2>
      </div>
      {barChart ? <BarCharts data={data} /> : <AreaCharts data={data} />}
    </Wrapper>
  );
};

export default ChartsContainer;
