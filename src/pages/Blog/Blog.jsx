// import React from 'react'

import Footer from "../../component/Footer/Footer"
import Header from "../../component/Header/Header"
import Banner from "./Banner"
import BlogCards from "./BlogCards"

const Blog = () => {
  return (
    <>
     <Header active={"blog"}/>
     <Banner/>
     <BlogCards/>
     <Footer/> 
    </>
  )
}

export default Blog
