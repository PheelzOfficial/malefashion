// import React from 'react'

import Footer from "../../component/Footer/Footer"
import Header from "../../component/Header/Header"
import ContactForm from "./ContactForm"
import Map from "./Map"

const Contact = () => {
  return (
    <>
     <Header active={"contact"}/>
     <Map/>
     <ContactForm/>
     <Footer/> 
    </>
  )
}

export default Contact
