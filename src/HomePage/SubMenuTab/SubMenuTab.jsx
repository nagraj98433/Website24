import React from 'react'
import '../../All styles/SubMenuTab.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


function SubMenuTab() {
  return (
    <>

      {/* Tabs Section Start */}

      <div className='Hide_Show'>
        <div className="Tab_Section">
          <ul className="nav">
            <li className="nav-item PadLeft">
              <a className="nav-link active FontSize" aria-current="page" href="#">Attandent</a>
            </li>
            <li className="nav-item">
              <a className="nav-link FontSize" href="#">Elder Care</a>
            </li>
            <li className="nav-item">
              <a className="nav-link FontSize" href="#">Nursing</a>
            </li>

          </ul>
          <div className='SearchIconStyle' type="button"><i className="fas fa-search"></i></div>
        </div>
      </div>

      {/* Tabs Section End */}


    </>
  )
}

export default SubMenuTab
