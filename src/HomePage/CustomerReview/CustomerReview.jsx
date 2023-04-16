import React from 'react'
import '../../All styles/CustomerReview.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
// import pic from '../../assets/Images/Bg_Banner.png'
import Cards from '../Cards/Cards'

function CustomerReview(props) {
  return (
    <>
      <div className="Main_CostomerReview_Container mt-5">
        <div className="sub_Container">
          <div className='Heading'>{props.blogs}</div>
          <div className='NextPrev_icons'>
            <span type="button"><i className="fas fa-less-than"></i></span>
            <span type="button"><i className="fas fa-greater-than"></i></span>
          </div>
        </div>

        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="Cards_container">
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
              </div>

            </div>
            <div className="carousel-item">
              <div className="Cards_container">
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
              </div>
            </div>
            <div className="carousel-item">
              <div className="Cards_container">
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
              </div>
            </div>
          </div>
          <button className="carousel-control-prev bg-info" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next bg-info" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

      </div>
    </>
  )
}

export default CustomerReview



