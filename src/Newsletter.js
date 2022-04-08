import React from 'react'
import "./styles/newsletter.css"

function Newsletter() {
  return (
    <div className='newsletter'>
       <div className='newsletter__signUp'>
           <div className="newsletter__signUp-heading">
               sign up for our newsletter
           </div>
           <div className="newsletter__signUp-subHeading">
               Get updated to the latest information and updates
           </div>
       </div>
       <div className="newsletter__details">
           <input type="text" placeholder="Name" className='newsletter__details-name'/>
           <input type="email" placeholder='email' className="newsletter__details-email" />
           <button type="submit" className='newsletter-btn'>sign up</button>
       </div>
    </div>
  )
}

export default Newsletter
