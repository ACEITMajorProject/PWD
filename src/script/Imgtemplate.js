import React from 'react'
import "../styles/imgTemplate.css"

function Imgtemplate({image, tag, desc}) {
  return (
    <div className='imgTemplate'>
       <div className="imgTemplate__content">
        <div className="imgTemplate__img">
        <img src={image} className="imgTemplate__img--image"/></div>
        <div className="imgTemplate__text">
        <div className="imgTemplate__text--tag"><strong>{tag}</strong></div>
        <div className="imgTemplate__text--desc">{desc}</div>
     </div>
     </div>
     <div className="imgTemplate__learn">
         <button type="submit" className="imgTemplate__learn--btn" >Learn More</button>
     </div>
    </div>
  )
}

export default Imgtemplate 