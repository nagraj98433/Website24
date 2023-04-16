import React from 'react'
import '../../All styles/SubMenuTab.css'

function SubMenuTab() {
  return (
    <>
      <div className="Tab_Section mt-5 ">
        <ul className="nav">
          <li className="nav-item">
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

    </>
  )
}

export default SubMenuTab
