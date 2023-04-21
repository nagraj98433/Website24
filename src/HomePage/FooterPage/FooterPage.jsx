import React from 'react'
import '../../All styles/FooterPage.css'
import footerImg from '../../assets/Images/FooterPic_overlay.png'
import footerLogo from '../../assets/Images/Footer_Logo.png'

function FooterPage() {
  return (
    <>
      <div className='footerContainer mt-5'>
        <div className='FooterContent footerImg_in_BG'>
          <div className='Main_container'>
            <div className="footer_flex_Container">
              <div className='Inner_flex_container'>
                <div>
                  <div className='footerImg'><img src={footerLogo} alt="footer logo" /></div>
                  <div className='AboutUS_content'>
                    <h4>ABOUT US</h4>
                  </div>
                  <div className='AboutUS_content_description'>
                    <small>Now be stress-free, Care24 is here to take care  of your loved ones</small>
                  </div>
                </div>
                <div className='Line_Height'>
                  <div className='Services_content'>
                    <h4>OUR SERVICES</h4>
                  </div>
                  <div className='Services_content_description'>
                    <ul>
                      <li>Our Caregivers</li>
                      <li>Attendant Services</li>
                      <li>Nursing Services</li>
                      <li>Elderly Care</li>
                      <li>Doctor At Home</li>
                      <li>Physiotherapist</li>
                      <li>Rehabilitation at Home</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='Inner_flex_container'>
                <div className='Line_Height marginRight'>
                  <div className='Quick_content_content'>
                    <h4>QUICK LINKS</h4>
                  </div>
                  <div className='Quick_content_description'>
                    <ul>
                      <li>Home</li>
                      <li>About us</li>
                      <li>Caregivers</li>
                      <li>Blogs</li>
                      <li>Services</li>
                    </ul>
                  </div>
                </div>
                <div className='Line_Height'>
                  <div className='Connect_content'>
                    <h4>CONNECT WITH US</h4>
                  </div>
                  <div className='Connect_content_description'>
                    <ul style={{ listStyleType: 'none' }}>
                      <li><span className='PhoneIcon_style'><i class="fas fa-phone-alt"></i></span> 080690 48802</li>
                      <li className='MailIcon_container'><span className='MailIcon_style'><i class="fas fa-envelope"></i></span> support@care24.co.in</li>
                      <li className='mt-3'>
                        <a href="" className='Clr_white'>
                          <span className='FacebookIcon_style'><i class="fab fa-facebook-f fs-3"></i></span>
                        </a>
                        <a href="" className='Clr_white'>
                          <span className='InstagramIcon_style'><i class="fab fa-instagram fs-3"></i></span>
                        </a>
                        <a href="" className='Clr_white'>
                          <span className='TwitterIcon_style'><i class="fab fa-twitter fs-3"></i></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className='footer_underLine_container'>
              <div className='Border_bottom'></div>
              <div className='text-center Text_light mt-3'><span>&copy;</span> 2021 Care24. All Rights Reserved.</div>
            </div>



          </div>
        </div>
      </div>
    </>
  )
}

export default FooterPage
