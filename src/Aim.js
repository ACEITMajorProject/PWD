import React from 'react'
import Imgtemplate from './Imgtemplate'
import "./styles/aim.css"
import happy from "./images/happiness-modified.png";
import support from "./images/support-modified.png";
import opportunity from "./images/opportunity-modified.png";
import guidance from "./images/guidance-modified.png";

function Aim() {
  return (
    <div className='aim'>
        <div className='aim__tag'> Our AIM</div>
        <div className='aim__desc'> We aim to provide every specially abled person with a chance to believe in the beauty of their dreams and to maximize the benefit of available programs and schemes to make best out of it.</div>
        <div className = 'aim__icons' >
            <div className="aim__icons-happy">
            <div className="aim__icons-happy--pic">
             <img src={happy} alt="" className=' aim__icons--img'/>
            </div>
            <div className="aim__icons-happy--tag"><span>H</span><span>appines</span>
            </div>
            </div>
            <div className="aim__icons-support">
                <div className="aim__icons-support--pic aim__icons--img"> <img src={support} alt="" className=' aim__icons--img'/></div>
                <div className="aim__icons-support--tag"><span>s</span><span>upport</span></div>
            </div>
            <div className="aim__icons-opportunity">
                <div className="aim__icons-opportunity--pic aim__icons--img"> <img src={opportunity} alt="" className=' aim__icons--img'/></div>
                <div className="aim__icons-opportunity--tag"><span>O</span><span>pportunity</span></div>
            </div>
            <div className="aim__icons-guidance">
                <div className="aim__icons-guidance--pic aim__icons--img"><img src={guidance} alt="" className=' aim__icons--img'/></div>
                <div className="aim__icons-guidance--tag"><span>G</span><span>uidance</span></div>
            </div>
        </div>
    </div>
  )
}

export default Aim