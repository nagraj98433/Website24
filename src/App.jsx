import React from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './HomePage/Home';
import AboutUS from './AboutUS_Page/AboutUS';
import TopHeader from './HomePage/TopHeader/TopHeader';
import BookNow from './HomePage/BookNow/BookNow';
import Caregivers from './CaregiversPage/Caregivers';
import Services from './ServicesPage/Services';
import BlogsPage from './BlogsPage/BlogsPage';
import LoginSingup from './Login_signup_Page/LoginSingup';




function App() {
  return (
    <>
      <TopHeader />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/AboutUs' element={<AboutUS />} />
        <Route path='/Caregivers' element={<Caregivers />} />
        <Route path='/Blogs' element={<BlogsPage />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/Login' element={<LoginSingup />} />
        <Route path='/BookNow' element={<BookNow />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </>
  )
}

export default App
