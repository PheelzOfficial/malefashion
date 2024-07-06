// import React from 'react'
import bg from "../../assets/img/breadcrumb-bg.jpg";

const Banner = () => {
  return (
    <>
      <section
        className="breadcrumb-blog set-bg"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Our Blog</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
