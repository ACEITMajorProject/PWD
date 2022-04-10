import React from 'react'
import "./styles/header.css"

function Header() {
  return (
    <div>
      <div className="header">
      <div className="header__appName">PWD</div>
      <div className="header__Options">
          <a>Central Govt. Schemes</a>
          <a>State Govt. Schemes</a>
          <a>Medical Help</a>
          <a>Financial Aid</a>
      </div>
       
      </div>
    </div>
  );
}

export default Header