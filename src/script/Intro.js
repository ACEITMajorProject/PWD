import React from 'react'
import "../styles/intro.css"
import intro from "../images/intro.jpg"
import Dropdown from "./Dropdown"


function Intro() {
  return (
    <div className="introContainer">
    <div className='intro'>
      <div className="intro__search">
          <div className="intro__search-tag">
              <strong>Search flagship schemes</strong>
          </div>
          <div className="intro__search-list">
              <div className="intro__search-list--menu"><Dropdown/></div>
              <button type="submit" className="intro__search-list--btn">Search</button>
          </div>
      </div>
      <div className="intro__desc">
      <div className="intro__desc--left">
           <div className="intro__descText">
          <div className='intro__descText--heading'>Let us create a beautiful story by giving wings to the dreams of specially abled.</div><br/><br/>
          <div className='intro__descText--subheading'>Get regular update and notification for new schemes and plans launched by government to avail maximum benefit and utilize at its best.</div>
          </div>
            <div className="intro__descBtn">
             <button type="submit" className="intro__descBtn--login">Login</button>
             <button type="submit" className='intro__descBtn--register'>Register</button>
          </div></div>
          <div className="intro__descImage">
              <img src={intro} alt="" className='intro__descImage--img '/>
          </div>
      </div>
    </div></div>
  )
}

export default Intro