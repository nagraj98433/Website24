import React from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './HomePage/Home';
import AboutUS from './AboutUS_Page/AboutUS';
import TopHeader from './HomePage/TopHeader/TopHeader';

function App() {
  return (
    <>
      <TopHeader />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/AboutUs' element={<AboutUS />} />
        {/* <Route path='/Caregivers' element={<Caregivers />} /> */}
        {/* <Route path='/Blogs' element={<Blogs />} /> */}
        {/* <Route path='/Services' element={<Services />} /> */}
        {/* <Route path='/Login' element={<Login />} /> */}
        {/* <Route path='/*' element={<Error />} /> */}
      </Routes>
    </>
  )
}

export default App
