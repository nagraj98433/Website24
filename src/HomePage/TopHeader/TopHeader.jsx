import React, { useEffect, useState } from 'react'
import '../../All styles/TopHeader.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import { Outlet, NavLink } from "react-router-dom";
// import logo from '../../assets/Images/care24_logo.jpg'
import logo from '../../assets/Images/care24-logo.png'

function TopHeader() {
  // let Windowwidth = window.innerWidth

  // let [Width, setWidth] = useState(Windowwidth)

  // console.log(Width)
  // const UpdateDimension = () => {
  //   setWidth(window.innerWidth)
  // }

  // useEffect(() => {
  //   window.addEventListener("resize", UpdateDimension);

  //   return () => window.removeEventListener('resize', UpdateDimension);
  // }, [])




  return (
    <>
      <div className="Position_fixed">
        <header className='NavMenu_container'>
          <nav className="navbar navbar-expand-lg bg-white Position_fixed">
            <div className="container-fluid BottomShadow">
              <img src={logo} alt="logo" className="logo" />
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <NavLink exact to='/' className="nav-link" aria-current="page">Home</NavLink>
                  <NavLink exact to='/aboutus' className="nav-link">About us</NavLink>
                  <NavLink exact to="/caregivers" className="nav-link">Caregivers</NavLink>
                  <NavLink exact to="/blogs" className="nav-link">Blogs</NavLink>
                  <NavLink exact to="/services" className="nav-link">Services</NavLink>
                  <NavLink to="/login" className="nav-link"><span className='bgRounded'>Login/Signup</span></NavLink>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
      <Outlet />
    </>
  )
}

export default TopHeader
