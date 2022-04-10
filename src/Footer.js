import React from 'react'
import "./styles/footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faTwitter, faYoutube, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons"



function Footer() {
  return (
    <div class="footer">
       <div className="footer__info">
         <div className="footer__info-tag">PWD</div>
          <div className="footer__info-desc">We are a team of technocrats looking at the world to make it a better place by building a purposeful project aim to do something good for the society.
          Join and connect with us to take this initiative at higher heights</div>
          <div className="footer__info-icons">
          <div className='footer__icons--div'>
           <FontAwesomeIcon icon={faFacebookF} className="footer__info-icons--social"/></div>
           <div className='footer__icons--div'>
           <FontAwesomeIcon icon={faInstagram}  className="footer__info-icons--social" /></div>
           <div className='footer__icons--div'><FontAwesomeIcon icon={faTwitter}  className="footer__info-icons--social"/></div>
           <div className='footer__icons--div'><FontAwesomeIcon icon={faWhatsapp}  className="footer__info-icons--social"/></div>
           <div className="footer__icons--div"><FontAwesomeIcon icon={faYoutube}  className="footer__info-icons--social"/></div>
          </div>
       </div>
       <div className="footer__misc">
       <div className="footer__links">
       <div className="footer__links-tag footer__miscTags">Quick links</div>
       <div className="footer__links-list">
           <a>Home</a>
           <a>About us</a>
           <a>Aim</a>
           <a>Services</a>
       </div>
       </div>
       <div className="footer__services">
           <div className="footer__Services-tag footer__miscTags">Our Services</div>
           <div className="footer__services-list">
               <a>Government Schemes</a>
               <a>Private Org. Programs</a>
               <a>Medical Help</a>
               <a>Financial Aid</a>
           </div>
       </div>
       <div className="footer__ques">
           <div className="footer__ques-tag footer__miscTags">Questions ?</div>
           <div className="footer__ques-contact">
               <p>Get in touch</p>
               <button className='footer__questions-contactbtn'>Contact us</button>
           </div>
       </div>
    </div>
    </div>
  )
}

export default Footer