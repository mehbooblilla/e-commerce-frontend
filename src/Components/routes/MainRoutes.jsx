import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from '../../Pages/About';
import Home from '../../Pages/Home';
import Layout from '../Layout';
const MainRoutes = () => {
  return (
    
    <Router>
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
  
    </Router>
  )
}

export default MainRoutes