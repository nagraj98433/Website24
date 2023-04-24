import React from 'react'
import '../../All styles/AboutUS.css'
import ElderlyPick from '../../assets/Images/Elderly.png'
import Ellipse from '../../assets/Images/Ellipse_13.jpg'

function AboutUS() {
  return (
    <>
      <div className="AboutUS_container mt-5">
        <div className='container'>
          <div className='row'>
            <div className='col col-lg-4 d-none d-lg-block'>
              <div className='BG_circle'>
                <div className='Overlay_container'>
                  <div className='A_family_pic'></div>
                  <div className='Img_container'><img src={ElderlyPick} alt="Elderly_pic" /></div>
                </div>
              </div>
            </div>
            <div className='col col-lg-8'>
              <div className='AboutUS_content_container'>
                <div className='Heding'>
                  ABOUT US
                </div>
                <div className='Content'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim est vero, repudiandae eaque illo reprehenderit natus, molestias similique ducimus nostrum nemo unde inventore saepe ex, exercitationem iusto. Ipsum a sapiente ullam omnis aspernatur praesentium, nesciunt temporibus nihil necessitatibus consequatur dolor adipisci, asperiores vel commodi, quisquam tempora laudantium perferendis hic saepe reprehenderit ut? Distinctio, rerum! Nihil dolore necessitatibus?
                </div>
                <div className='Content-1 mt-4'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim est vero, repudiandae eaque illo reprehenderit natus, molestias similique ducimus nostrum nemo unde inventore saepe ex, exercitationem iusto. Ipsum a sapiente ullam omnis aspernatur praesentium, nesciunt temporibus nihil necessitatibus consequatur dolor adipisci, asperiores vel commodi, ?
                </div>
                <div className='Content-2 mt-4'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim est vero, repudiandae eaque illo reprehenderit natus, molestias similique ducimus nostrum nemo unde inventore saepe ex, exercitationem iusto. Ipsum a sapiente ullam omnis aspernatur praesentium, nesciunt temporibus nihil necessitatibus consequatur dolor adipisci, asperiores vel commodi, quisquam tempora laudantium perferendis hic saepe reprehenderit ut? Distinctio, rerum! Nihil dolore necessitatibus?
                </div>
                <div className='Content-3 mt-4'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, incidunt?
                </div>
                <div className='A_button_for_ReadMore mt-4'>
                  <button type="button" class="btn btn-primary F_size">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default AboutUS
