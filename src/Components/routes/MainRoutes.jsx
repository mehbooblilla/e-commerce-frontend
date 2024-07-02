import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '../Layout';
import Login from '../../Pages/Login';
import Signup from '../../Pages/Signup';
import Products from '../../Pages/Products';
const MainRoutes = () => {
  return (
    
    <Router>
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="products" element={<Products />} />
        </Route>
      </Routes>
  
    </Router>
  )
}

export default MainRoutes