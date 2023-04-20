import React, { useEffect, useState } from 'react'
import '../../All styles/CustomerReview.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
// import pic from '../../assets/Images/Bg_Banner.png'
import manpic from '../../assets/Images/manpic.jpg'

import Cards from '../Cards/Cards'

function CustomerReview(props) {

  const CallersList1 = [{ Img: manpic, Name: 'Niha' }, { Img: manpic, Name: 'Vishal' }, { Img: manpic, Name: 'Poonam' }]
  // const CallersList2 = [{ Img: manpic, Name: 'Vishal' }, { Img: manpic, Name: 'Niha' }, { Img: manpic, Name: 'Poonam' }]
  // const CallersList3 = [{ Img: manpic, Name: 'Poonam' }, { Img: manpic, Name: 'Vishal' }, { Img: manpic, Name: 'Niha' }]

  let [Callers1, SetCallers1] = useState(CallersList1)
  // let [Callers2, SetCallers2] = useState(CallersList2)
  // let [Callers3, SetCallers3] = useState(CallersList3)



  // useEffect(() => {

  //   setInterval(() => {
  //     console.log([Math.floor(Math.random() * 3)]);
  //     // console.log(Callers1[Math.floor(Math.random() * 3)]);
  //     // SetCallers1(Callers1[Math.floor(Math.random() * 3)])
  //     SetCallers1(typeof (Math.floor(Math.random() * 3)))

  //   }, 5000)

  // },)




  setTimeout(() => {
    SetCount(++Count)
    // console.log([Math.floor(Math.random() * 3)]);
    // console.log(Callers1[Math.floor(Math.random() * 3)]);
    // SetCallers1(Callers1[0])

  }, 5000)

  console.log(Callers1);








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



