import React, { useState, useEffect } from 'react'
import '../../All styles/OfferSection.css'
import CustomerReview from '../CustomerReview/CustomerReview'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import Cards from '../Cards/Cards'
import FAQ from '../FAQSection/FAQ'
import Blogs from '../Blogs/Blogs'
import AboutUS from '../AboutUS/AboutUS'
import BookNowPic from '../../assets/Images/BookNow.png'
import SubMenuTab from '../SubMenuTab/SubMenuTab'
import { Outlet, NavLink } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import BannerBg from '../BannerBg/BannerBg'
import FooterPage from '../FooterPage/FooterPage'






function OfferSection() {

  let [DBlock, setDBlock] = useState(1)
  let [Active, setActive] = useState(1)

  const ToggleTab = (val) => {
    setDBlock(val)
    setActive(val)
  }



  return (
    <>
      <BannerBg taggleFun={ToggleTab} active={Active} />

      <section className='bgClr'>

        <div className="OfferMain_container">

          <div className="ContentWrapper">

            <div className={`${DBlock === 1 ? 'd-block' : 'd-none'}`}>
              <div className="Imgoverlay_section">
                <div className="offerSection">

                  <div className="BookNow_secton">
                    <NavLink exact to="/BookNow" className="nav-link">
                      <img src={BookNowPic} alt="BookNowBtn" type='button' className='img-fluid' />
                    </NavLink>
                  </div>

                </div>
              </div>

              <div className="content_img_section">
                <div className="content_section">
                  <ul>
                    <li>Oral Hygiene and Bed Bath/ Sponge Bath</li>
                    <li>Cleanliness of patient's room</li>
                    <li>Feeding and Bathroom assistance</li>
                    <li>Assist with walking and home exercise when required</li>
                    <li>Turn position in bed for bedridden</li>
                    <li>Companionship and polite conversations</li>
                  </ul>
                </div>

                <div className="Video_section">
                  <iframe src="https://www.youtube.com/embed/tqczsLqkd2g" title="YouTube video player" frameBorder="0" allowFullScreen>
                  </iframe>

                </div>
              </div>
            </div>
            <div className={DBlock === 2 ? 'd-block' : 'd-none'}>
              {/* <div className="Imgoverlay_section">
                <div className="offerSection">

                  <div className="BookNow_secton">
                    <NavLink exact to="/BookNow" className="nav-link">
                      <img src={BookNowPic} alt="BookNowBtn" type='button' className='img-fluid' />
                    </NavLink>
                  </div>

                </div>
              </div> */}

              <div className="content_img_section">
                <div className="content_section">
                  <ul>
                    <li>Fixing a diet plan</li>
                    <li>Giving medicines on time</li>
                    <li>Blood Pressure Checkup</li>
                    <li>Pulse Oximeter</li>
                    <li>Oral Hygiene and Bed Bath/Sponge Bath</li>
                    <li>Feeding and bathroom assistance</li>
                  </ul>
                </div>

                <div className="Video_section">
                  <iframe src="https://www.youtube.com/embed/hUu5Qi79clI" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>

                </div>
              </div>
            </div>
            <div className={DBlock === 3 ? 'd-block' : 'd-none'}>
              {/* <div className="Imgoverlay_section">
                <div className="offerSection">

                  <div className="BookNow_secton">
                    <NavLink exact to="/BookNow" className="nav-link">
                      <img src={BookNowPic} alt="BookNowBtn" type='button' className='img-fluid' />
                    </NavLink>
                  </div>

                </div>
              </div> */}

              <div className="content_img_section">
                <div className="content_section">
                  <ul>
                    <li>Fixing a diet plan</li>
                    <li>Giving medicines on time</li>
                    <li>Caring and dressing wounds </li>
                    <li>Monitoring of Vital Signs</li>
                    <li>Intravenous medication and IV fluid management</li>
                    <li>Nebulization</li>
                  </ul>
                </div>

                <div className="Video_section">

                  <iframe src="https://www.youtube.com/embed/MAIYNrQuJ90" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>

                </div>
              </div>
            </div>

            <div className="BtnsSection">
              {/* <div><button type="button" className="btn btn-primary btn-lg">Chat 24/7</button></div> */}
              <button type="button" class="btn btn-primary btn-lg fs-2">Call Now</button>
              {/* <div><button type="button" className="btn btn-primary btn-lg">Book Now @499/-</button></div> */}
            </div>

          </div>

          <div className="TotalCalculation_Container mt-4 border">
            <div className="location">
              <div className="dropdown pt-3 ">
                <button className="btn border btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Mumbai
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Delhi</a></li>
                  <li><a className="dropdown-item" href="#">Banglore</a></li>
                  <li><a className="dropdown-item" href="#">Mumbai</a></li>
                </ul>
              </div>
            </div>


            <div className="Total text-center">
              <h1 className='fw-bold'>1280</h1>
              <p>Total</p>
            </div>
            <div className="On_Duty text-center">
              <h1 className='fw-bold'>980</h1>
              <p>On duty</p>
            </div>





            <div className="Available text-center">
              <h1 className='fw-bold'>300</h1>
              <p>Available</p>
            </div>
            <div className="Patients_visits text-center">
              <h1 className='fw-bold'>13,00,000+</h1>
              <p>Patients Visits</p>
            </div>


          </div>


          <div className='container-fluid'>
            <div className='row mb-2'>
              <div className="col fw-bold">Today's Ongoing Attendant Services</div>
            </div>
            <div className='row'>
              <div className="col">Mumbai</div>
            </div>
            <div className='row'>
              <div className="col">
                <div class="progress-stacked">
                  <div class="progress" role="progressbar" aria-label="Segment one" aria-valuenow="92" aria-valuemin="0" aria-valuemax="100" style={{ width: '50%' }}>
                    <div class="progress-bar"></div>
                  </div>
                  <div class="progress" role="progressbar" aria-label="Segment two" aria-valuenow="8" aria-valuemin="0" aria-valuemax="100" style={{ width: '8%' }}>
                    <div class="progress-bar bg-danger"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className="col">Delhi-NCR</div>
            </div>
            <div className='row'>
              <div className="col">
                <div class="progress-stacked">
                  <div class="progress" role="progressbar" aria-label="Segment one" aria-valuenow="92" aria-valuemin="0" aria-valuemax="100" style={{ width: '45%' }}>
                    <div class="progress-bar"></div>
                  </div>
                  <div class="progress" role="progressbar" aria-label="Segment three" aria-valuenow="8" aria-valuemin="0" aria-valuemax="100" style={{ width: '7%' }}>
                    <div class="progress-bar bg-danger"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className='row mt-5'>
              <div className='col'>
                <div className="row">
                  <div className="col-1 bg-primary me-3"></div>
                  <div className="col-8 fw-bold FontReduced">On Duty Caregivers</div>
                </div>
              </div>
              <div className='col'>
                <div className="row">
                  <div className="col-1 bg-danger me-3"></div>
                  <div className="col-8 fw-bold FontReduced">CG's Available</div>
                </div>
              </div>

            </div>
          </div>



          {/* Sub Tab */}
          <SubMenuTab taggleFun={ToggleTab} active={Active} />

        </div>




        {/* Customer Review */}
        <CustomerReview blogs="CUSTOMER'S REVIEWS" />


        {/* Blogs Section */}
        {/* <Blogs blogs="BLOGS" /> */}



        {/* FAQ Section */}
        <FAQ />

        {/* About us Section */}
        {/* <AboutUS /> */}

        {/* Footer Section */}
        <FooterPage />




      </section >
    </>
  )
}

export default OfferSection
