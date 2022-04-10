import React from 'react'
import "./styles/imgTemplate.css"

function Imgtemplate({image, tag, desc}) {
  return (
    <div className='imgTemplate'>
        {/* <div className="imgTemplate__img"> */}
            <img src={image} className="imgTemplate__img--image"/>
        <div className="imgTemplate__text">
        <div className="imgTemplate__text--tag">{tag}</div>
        <div className="imgTemplate__text--desc">{desc}</div>
      </div>
    </div>
  )
}

export default Imgtemplate 