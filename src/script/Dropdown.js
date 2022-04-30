import React from 'react'
import { useState } from 'react';
import "../styles/Dropdown.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';


function Dropdown(){  
  const [isActive, setisActive] = useState(false);
  return (
    <div className='dropdown'>
        <div className="dropdown__btn" onClick={(e)=>
            setisActive(!isActive)}
        >Select<FontAwesomeIcon icon={faChevronDown} className="dropdown__btn--icon"/></div>
        {isActive &&(
        <div className="dropdown__content">
            <div className="dropdown__content-item">
                  Deaf
            </div>
            <div className="dropdown__content-item">
                   Dumb
            </div>
            <div className="dropdown__content-item">
                  Physically Challenged
            </div>
            <div className="dropdown__content-item">
                  Blindness
            </div>
        </div>)}
    </div>
  )
}

export default Dropdown