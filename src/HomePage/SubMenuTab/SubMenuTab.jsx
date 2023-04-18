import React from 'react'
import '../../All styles/SubMenuTab.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


function SubMenuTab(props) {
  return (
    <>

      {/* Tabs Section Start */}

      <div className='Hide_Show'>
        <div className="Tab_Section">
          <ul className="nav">
            <li className="nav-item PadLeft">
              <a className={`nav-link ${props.active === 1 ? 'Active_Class' : 'text-dark'} FontSize`} aria-current="page" href="#" onClick={() => { props.taggleFun(1) }}>Attandent</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${props.active === 2 ? 'Active_Class' : 'text-dark'} FontSize`} href="#" onClick={() => { props.taggleFun(2) }}>Elder Care</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${props.active === 3 ? 'Active_Class' : 'text-dark'} FontSize`} href="#" onClick={() => { props.taggleFun(3) }}>Nursing</a>
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
