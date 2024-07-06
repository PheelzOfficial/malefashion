// import React from 'react'

import { useState } from "react"
import Search from "../Search/Search"
import BottomHeader from "./BottomHeader"
// import TopHeader from "./TopHeader"

// eslint-disable-next-line react/prop-types
const Header = ({active}) => {
  const [showSearch, setShowSearch] = useState(false);
  const openSearch = ()=>{
    setShowSearch(true);
  }
  const closeSearch = ()=>{
    setShowSearch(false);
  }
  return (
    <div>
      {/* <TopHeader/> */}
      <BottomHeader openSearch={openSearch} active={active}/>
      <Search closeSearch={closeSearch}  showSearch={showSearch}/>

    </div>
  )
}

export default Header
