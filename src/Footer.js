import React from 'react'
import "./styles/footer.css"


function Footer() {
  return (
    <div class="footer">
       <div className="footer__info">
         <div className="footer__info-tag">PWD</div>
          <div className="footer__info-desc">We are a team of technocrats looking at the world to make it a better place by building a purposeful project aim to do something good for the society.
          Join and connect with us to take this initiative at higher heights</div>
          <div className="footer__info-icons">
          </div>
       </div>
       <div className="footer__misc">
       <div className="footer__links">
       <div className="footer__links-tag">Quick links</div>
       <div className="footer__links-list">
           <a>Home</a>
           <a>About us</a>
           <a>Aim</a>
           <a>Services</a>
       </div>
       </div>
       <div className="footer__services">
           <div className="footer__Services-tag">Our Services</div>
           <div className="footer__services-list">
               <a>Government Schemes</a>
               <a>Private Org. Programs</a>
               <a>Medical Help</a>
               <a>Financial Aid</a>
           </div>
       </div>
       <div className="footer__ques">
           <div className="footer__ques-tag">Questions ?</div>
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