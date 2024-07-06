// import React from 'react'

import { useEffect, useState } from "react";
import Footer from "../../component/Footer/Footer";
import Header from "../../component/Header/Header";
// import Search from "../../component/Search/Search"
import Collections from "./Collections";
import HeroSection from "./HeroSection";
import News from "./News";
import Offers from "./Offers";
import ProductSection from "./ProductSection";
import Socials from "./Socials";
import Loader from "../../component/Loader/Loader";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Header active={"home"} />
          <HeroSection />
          <Collections />
          <ProductSection />
          <Offers />
          <Socials />
          <News />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;
