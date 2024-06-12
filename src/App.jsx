import React from "react";
import Landing from "./components/Landing";
import { Routing } from "./routes/Routing";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div>
      <Routing>
        <Landing />/
      </Routing>
      <ToastContainer toastStyle={{ backgroundColor: "#1c1c1c" }} />
    </div>
  );
};

export default App;
