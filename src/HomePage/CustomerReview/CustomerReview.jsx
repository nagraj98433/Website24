import React, { useEffect, useState } from 'react'
import '../../All styles/CustomerReview.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
// import pic from '../../assets/Images/Bg_Banner.png'
import manpic from '../../assets/Images/manpic.jpg'

import Cards from '../Cards/Cards'

function CustomerReview(props) {

  const [arrayValues, setArrayValues] = useState([]);
  const [arrayValues1, setArrayValues1] = useState([]);
  const [arrayValues2, setArrayValues2] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      // code to fetch new array values
      const newArrayValues = [{ Img: manpic, Name: "Nilesh" }, { Img: manpic, Name: "Monalisa" }, { Img: manpic, Name: "Sushila" }, { Img: manpic, Name: "Steffe" }];
      const newArrayValues1 = [{ Img: manpic, Name: "Niha" }, { Img: manpic, Name: "Vishal" }, { Img: manpic, Name: "Poonam" },]
      const newArrayValues2 = [{ Img: manpic, Name: "Prasad" }, { Img: manpic, Name: "Pradeep" }, { Img: manpic, Name: "Sandeep" },]
      setArrayValues(newArrayValues[[Math.floor(Math.random() * 4)]]);
      setArrayValues1(newArrayValues1[[Math.floor(Math.random() * 3)]]);
      setArrayValues2(newArrayValues2[[Math.floor(Math.random() * 3)]]);
    }, 6000);
    return () => clearInterval(interval);
  }, []);


  // console.log([Math.floor(Math.random() * 4)]);
  // console.log(arrayValues);
  // console.log(arrayValues.Img);
  // console.log(arrayValues.Name);





  return (
    <>
      <div className="Main_CostomerReview_Container mt-5">
        <div className="Speaker_container">
          <div class="card imgRound bg-secondary" style={{ width: '14rem' }}>
            <img src={manpic} className="img-fluid" alt="..." />
            <div class="card-body bg-dark">
              <h5 class="card-title text-center text-light">{arrayValues.Name}</h5>

            </div>
          </div>
          <div class="card imgRound bg-secondary" style={{ width: '14rem' }}>
            <img src={manpic} className="img-fluid" alt="..." />
            <div class="card-body bg-dark">
              <h5 class="card-title text-center text-light">{arrayValues1.Name}</h5>

            </div>
          </div>
          <div class="card imgRound bg-secondary" style={{ width: '14rem' }}>
            <img src={manpic} className="img-fluid" alt="..." />
            <div class="card-body bg-dark">
              <h5 class="card-title text-center text-light">{arrayValues2.Name}</h5>

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



