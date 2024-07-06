// import React from 'react'

import Footer from "../../component/Footer/Footer"
import Header from "../../component/Header/Header"
import BreadCrumb from "./BreadCrumb"
import ShopBody from "./ShopBody"

const Shop = () => {
  return (
    <>
     <Header active={"shop"}/>
     <BreadCrumb/>
     <ShopBody/>
     <Footer/> 
    </>
  )
}

export default Shop
