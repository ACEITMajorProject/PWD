import React from 'react'
import "./styles/imgTemplate.css"

function Imgtemplate({image, tag, desc}) {
  return (
    <div className='imgTemplate'>
        <div className="image">
            <img src={image}/>
        </div>
        <div className="tag">{tag}</div>
        <div className="desc">{desc}</div>
    </div>
  )
}

export default Imgtemplate 