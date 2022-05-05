import React from 'react'
import "../styles/header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
<nav class="navbar navbar-expand-lg navbar-light d-flex header">
  <div class="container-fluid">
    <a class="navbar-brand header__appName" href="#">HELPING HANDS<FontAwesomeIcon icon={faHandHoldingHeart}  className="HeaderWebsite__logo"/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
      <span class="navbar-toggler-icon  header__menu"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item ">
          <a class="nav-link " aria-current="page" href="#">Central Govt. Schemes
        </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">  State Govt. Schemes</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"> Medical Help</a>
        </li>
         <li class="nav-item">
          <a class="nav-link" href="#">Financial Aid</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}



export default Header