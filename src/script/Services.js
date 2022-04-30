import React from 'react'
import Imgtemplate from "./Imgtemplate"
import "../styles/services.css"
import finance from "../images/financialaid.jpg";
import scheme from "../images/govtscheme.jpg";
import program from "../images/orgprogram.jpg";

function Services() {
  return (
    <div className='services'>
    <div className="services__tag">Services</div>
    <div className="services__desc justify-content-between">
        <Imgtemplate image={scheme} tag=" Government Schemes" desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi corrupti cum at qui quos quo possimus sed dignissimos, dolorum repellendus."/>
        <Imgtemplate image={program} tag="Private Org. Programs" desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi corrupti cum at qui quos quo possimus sed dignissimos, dolorum repellendus."/>
        <Imgtemplate image={finance} tag=" Financial & Medical Aid" desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi corrupti cum at qui quos quo possimus sed dignissimos, dolorum repellendus." />
    </div>
    </div>
  )
}

export default Services
