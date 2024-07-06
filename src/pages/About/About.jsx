// import React from 'react'

import Footer from "../../component/Footer/Footer"
import Header from "../../component/Header/Header"
import AboutUs from "./AboutUs"
import Achievement from "./Achievement"
import BreadCrumb from "./BreadCrumb"
import Partner from "./Partner"
import Team from "./Team"
import Testimonial from "./Testimonial"

const About = () => {
  return (
    <>
     <Header active={"about"}/>
     <BreadCrumb/>
     <AboutUs/>
     <Testimonial/>
     <Achievement/>
     <Team/>
     <Partner/>
     <Footer/> 
    </>
  )
}

export default About
