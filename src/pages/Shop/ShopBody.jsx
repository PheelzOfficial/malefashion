// import React from 'react'

import ShopBodyOption from "./ShopBodyOption"
import ShopCards from "./ShopCards"
import SideBar from "./SideBar"

const ShopBody = () => {
  return (
      <section className="shop spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                   <SideBar/>
                </div>
                <div className="col-lg-9">
                   <ShopBodyOption/>
                    <ShopCards/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ShopBody
