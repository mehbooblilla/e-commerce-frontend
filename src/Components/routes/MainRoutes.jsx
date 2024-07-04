import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Layout from "../Layout";
import Login from "../../Pages/Login";
import Signup from "../../Pages/Signup";
import Products from "../../Pages/Products";
import PrivateRoute from "./PrivateRoute";
const MainRoutes = () => {
  const user = JSON.parse(localStorage.getItem("user"));
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
