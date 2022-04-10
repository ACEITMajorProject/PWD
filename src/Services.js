import React from 'react'
import Imgtemplate from './Imgtemplate'
import './styles/services.css'

function Services() {
  return (
    <div className='services'>
    <div className="services__tag">Services</div>
    <div className="services__desc">
        <Imgtemplate image="" tag=" Schemes" desc="government schemes"/>
        <Imgtemplate image="" tag=" Schemes" desc="government schemes"/>
        <Imgtemplate image="" tag=" Schemes" desc="government schemes"/>
    </div>
    </div>
  )
}

export default Services
