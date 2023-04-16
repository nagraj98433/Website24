import React from 'react'
import manpic from '../../assets/Images/manpic.jpg'
import '../../All styles/Cards.css'


function Cards() {
  return (
    <>
      <div className="card mb-3 cardStyle" style={{ maxWidth: '300px' }}>
        <div className="row g-0">
          <div className="col-md-3 imgRound">
            <img src={manpic} className="img-fluid" alt="..." />
          </div>
          <div className="col-md-9">
            <div className="card-body">
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer natural lead-in to additional content. This content is a little bit longe.</p>
              <h5 className="card-title">John Doe</h5>
              <div className='Star_container'>
                <p className="card-text"><small className="text-body-secondary"><i className="fas fa-star"></i></small></p>
                <p className="card-text"><small className="text-body-secondary"><i className="fas fa-star"></i></small></p>
                <p className="card-text"><small className="text-body-secondary"><i className="fas fa-star"></i></small></p>
                <p className="card-text"><small className="text-body-secondary"><i className="fas fa-star"></i></small></p>
                <p className="card-text"><small className="text-body-secondary"><i className="NoClr fas fa-star"></i></small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards
