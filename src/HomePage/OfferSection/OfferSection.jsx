import React from 'react'
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



function OfferSection() {
  return (
    <>
      <section className='bgClr'>

        <div className="OfferMain_container">

          <div className="ContentWrapper">


            <div className="Imgoverlay_section">
              <div className="offerSection">

                <div className="BookNow_secton">
                  <img src={BookNowPic} alt="BookNowBtn" type='button' className='img-fluid' />
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

            {/* <div className="BtnsSection">
              <div><button type="button" className="btn btn-primary btn-lg">Chat 24/7</button></div>
              <div><button type="button" className="btn btn-primary btn-lg">Call Now </button></div>
              <div><button type="button" className="btn btn-primary btn-lg">Book Now @499/-</button></div>
            </div> */}

          </div>

          {/* <div className="TotalCalculation_Container mt-4 border">
            <div className="location">
              <div className="dropdown">
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
          </div> */}
        </div>





        {/* Customer Review */}
        {/* <CustomerReview blogs="CUSTOMER'S REVIEWS" /> */}


        {/* Blogs Section */}
        {/* <Blogs blogs="BLOGS" /> */}



        {/* FAQ Section */}
        {/* <FAQ /> */}

        {/* About us Section */}
        {/* <AboutUS /> */}

        {/* Sub Tab */}
        {/* <SubMenuTab /> */}

      </section>
    </>
  )
}

export default OfferSection
