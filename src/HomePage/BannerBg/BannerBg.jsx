import React from 'react'
import '../../All styles/BannerBg.css'
import '../../All styles/OfferSection.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
// import CustomerReview from '../CustomerReview/CustomerReview'
// import Cards from '../Cards/Cards'
// import FAQ from '../FAQSection/FAQ'
// import Blogs from '../Blogs/Blogs'
// import AboutUS from '../AboutUS/AboutUS'
// import SubMenuTab from '../SubMenuTab/SubMenuTab'
import BookNowPic from '../../assets/Images/BookNow.png'
import { Outlet, NavLink } from "react-router-dom";



function BannerBg(props) {

  return (
    <>
      <div className="Banner_container">
        <div className='CenterText'>WE CARE FOR YOU</div>
      </div>

      {/* Tab section */}

      <div className="Tab_Section1">
        <ul className="nav">
          <li className="nav-item">
            <a className={`nav-link ${props.active === 1 ? 'Active_Class' : 'text-dark'} FontSize`} aria-current="page" href="#" onClick={() => { props.taggleFun(1) }}>Attandent</a>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${props.active === 2 ? 'Active_Class' : 'text-dark'} FontSize`} href="#" onClick={() => { props.taggleFun(2) }}>Elder Care</a>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${props.active === 3 ? 'Active_Class' : 'text-dark'} FontSize`} href="#" onClick={() => { props.taggleFun(3) }}>Nursing</a>
          </li>

        </ul>
        <div className='SearchIconStyle1' type="button"><i className="fas fa-search"></i></div>
      </div>








    </>
  )
}

export default BannerBg
