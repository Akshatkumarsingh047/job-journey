import React from "react";
import Landing from "../components/Landing";
import Error from "../components/Error";
import Register from "../components/Register";
import {
  Addjob,
  Profile,
  Stat,
  Alljobs,
  SharedLayout,
} from "../components/dashboard";

import { Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import ProtectedRoute from "../components/ProtectedRoute";

export const Routing = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/" element={<Alljobs />} />
          <Route path="/profile" element={<Profile />} />
          <Route index element={<Stat />} />
          <Route path="/add-job" element={<Addjob />} />
          <Route path="/all-jobs" element={<Alljobs />} />
        </Route>
        <Route path="/landing" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};
