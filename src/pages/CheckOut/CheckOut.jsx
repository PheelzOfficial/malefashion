// import React from 'react'

import Footer from "../../component/Footer/Footer"
import Header from "../../component/Header/Header"
import BreadCrumbs from "./BreadCrumbs"
import CheckOutBody from "./CheckOutBody"

const CheckOut = () => {
  return (
    <>
        <Header/>
        <BreadCrumbs/>
        <CheckOutBody/>
        <Footer/>
    </>
  )
}

export default CheckOut