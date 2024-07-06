// import React from 'react'

import Footer from "../../component/Footer/Footer"
import Header from "../../component/Header/Header"
import BreadCrumbs from "./BreadCrumbs"
import CardBody from "./CardBody"

const Cart = () => {
  return (
    <>
     <Header active={"home"}/>
     <BreadCrumbs/>
     <CardBody/>
     <Footer/> 
    </>
  )
}

export default Cart
