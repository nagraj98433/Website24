import React from 'react'
import '../../All styles/TopHeader.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'

function TopHeader() {
  return (
    <>
      <header className='NavMenu_container'>
        <nav class="navbar navbar-expand-sm bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav ">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
                <a class="nav-link" href="#">About us</a>
                <a class="nav-link" href="#">Caregivers</a>
                <a class="nav-link" href="#">Blogs</a>
                <a class="nav-link" href="#">Services</a>
                <a class="nav-link" href="#">Login/Signup</a>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className='box'>Lorem</div>

    </>
  )
}

export default TopHeader
