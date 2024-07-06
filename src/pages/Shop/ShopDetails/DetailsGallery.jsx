/* eslint-disable react/prop-types */
// import React from 'react'

import { Link } from "react-router-dom";
import product1 from '../../../assets/img/shop-details/product-big.png'
// import product2 from '../../../assets/img/shop-details/product-big-2.png'
import product3 from '../../../assets/img/shop-details/product-big-3.png'
import product4 from '../../../assets/img/shop-details/product-big-4.png'
// import thumb1 from '../../../assets/img/shop-details/thumb-1.png'
import thumb2 from '../../../assets/img/shop-details/thumb-2.png'
import thumb3 from '../../../assets/img/shop-details/thumb-3.png'
import thumb4 from '../../../assets/img/shop-details/thumb-4.png'

// eslint-disable-next-line react/prop-types
const DetailsGallery = ({currentProduct}) => {
  return (
    <>
      <div className="product__details__pic">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="product__details__breadcrumb">
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <span>Product Details</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-3">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#tabs-1"
                    role="tab"
                  >
                    <div
                      className="product__thumb__pic set-bg"
                      style={{backgroundImage:`url(${currentProduct.image})`}}
                    ></div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#tabs-2"
                    role="tab"
                  >
                    <div
                      className="product__thumb__pic set-bg"
                      style={{backgroundImage:`url(${thumb2})`}}
                    ></div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#tabs-3"
                    role="tab"
                  >
                    <div
                      className="product__thumb__pic set-bg"
                      style={{backgroundImage:`url(${thumb3})`}}
                    ></div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#tabs-4"
                    role="tab"
                  >
                    <div
                      className="product__thumb__pic set-bg"
                      style={{backgroundImage:`url(${thumb4})`}}
                    >
                      <i className="fa fa-play"></i>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-9">
              <div className="tab-content">
                <div className="tab-pane active" id="tabs-1" role="tabpanel">
                  <div className="product__details__pic__item">
                    <img src={currentProduct.image} alt="" />
                  </div>
                </div>
                <div className="tab-pane" id="tabs-2" role="tabpanel">
                  <div className="product__details__pic__item">
                    <img src={product3} alt="" />
                  </div>
                </div>
                <div className="tab-pane" id="tabs-3" role="tabpanel">
                  <div className="product__details__pic__item">
                    <img src={product1} alt="" />
                  </div>
                </div>
                <div className="tab-pane" id="tabs-4" role="tabpanel">
                  <div className="product__details__pic__item">
                    <img src={product4} alt="" />
                    <a
                      href="https://www.youtube.com/watch?v=8PJ3_p7VqHw&list=RD8PJ3_p7VqHw&start_radio=1"
                      className="video-popup"
                    >
                      <i className="fa fa-play"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsGallery;
