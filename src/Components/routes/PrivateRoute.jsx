import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Layout from '../Layout';
import Login from '../../Pages/Login';
import Signup from '../../Pages/Signup';
import Products from '../../Pages/Products';
const PrivateRoute = () => {
  return (

      <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="products" index element={<Products />} />
          <Route path='*' element={<Navigate to='/products' />} />
          </Route>
       
      </Routes>

  )
}

export default PrivateRoute