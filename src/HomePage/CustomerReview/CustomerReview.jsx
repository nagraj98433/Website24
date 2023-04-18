import React from 'react'
import '../../All styles/CustomerReview.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
// import pic from '../../assets/Images/Bg_Banner.png'
import manpic from '../../assets/Images/manpic.jpg'

import Cards from '../Cards/Cards'

function CustomerReview(props) {





  return (
    <>
      <div className="Main_CostomerReview_Container mt-5">
        <div className="Speaker_container">
          <div class="card imgRound bg-secondary" style={{ width: '14rem' }}>
            <img src={manpic} className="img-fluid" alt="..." />
            <div class="card-body bg-dark">
              <h5 class="card-title text-center text-light">Niha</h5>

            </div>
          </div>
          <div class="card imgRound bg-secondary" style={{ width: '14rem' }}>
            <img src={manpic} className="img-fluid" alt="..." />
            <div class="card-body bg-dark">
              <h5 class="card-title text-center text-light">Vishal</h5>

            </div>
          </div>
          <div class="card imgRound bg-secondary" style={{ width: '14rem' }}>
            <img src={manpic} className="img-fluid" alt="..." />
            <div class="card-body bg-dark">
              <h5 class="card-title text-center text-light">Poonam</h5>

            </div>
          </div>

        </div>
        <div className="Call_Availibilty_btn mt-3">
          <button type="button" class="btn btn-dark fs-4">I'm available to talk</button>

        </div>


      </div>
    </>
  )
}

export default CustomerReview



