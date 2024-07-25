import React, { useContext, useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Layout from "../Layout";
import Login from "../../Pages/Login";
import Signup from "../../Pages/Signup";
import PrivateRoute from "./PrivateRoute";
import { AuthContext } from "../../App";
const MainRoutes = () => {
  const { user, setUser } = useContext(AuthContext);


console.log(user);
  return (
    <Router>
      {user ? (
        <PrivateRoute />
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path='*' element={<Navigate to='/login' />} />
          </Route>
        </Routes>
      )}
    </Router>
  );
};

export default MainRoutes;
