import React from 'react'
import Header from "../script/Header";
import Newsletter from "../script/Newsletter";
import Footer from "../script/Footer"
import Aim from "../script/Aim"
import "../styles/app.css"
import Intro from "../script/Intro";
import Services from "../script/Services";
import Register from "../script/Register";

function Home() {
  return (
    <div><Header/>
        <Intro/>
        <Register/> 
        <Aim/>
        <Newsletter/>
        <Services/>
        <Footer/></div>
  )
}

export default Home