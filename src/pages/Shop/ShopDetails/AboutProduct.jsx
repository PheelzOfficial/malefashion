// import React from 'react'

import DataLoader from "../../../component/Loader/DataLoader";
import Description from "./Description";
import DetailsGallery from "./DetailsGallery";
import AllProducts from '../../../hooks/AllProducts'
import {useParams} from "react-router-dom";
import { MdStar } from "react-icons/md";

function formatRate(rate){
  const formated = Math.ceil(rate)
  const multiply = Array.from({length: formated})
  return multiply;
}

const AboutProduct = () => {
  const {productId} = useParams()
  console.log(productId)
  const { data, isLoading, error } = AllProducts();
  if(isLoading){
    // return <div className="d-flex justify-content-center align-items-center">
      <DataLoader/>
    // </div>;
  }


  if (error) {
    return <div className="d-flex justify-content-center align-items-center" style={{height: "60vh"}}>
      <div>Error Occured</div>
    </div>;
  }

  if(!data || !data.data){
    return <div className="d-flex justify-content-center align-items-center" style={{height: "60vh"}}>
    <div>Product not found</div>
  </div>;
  }

  if(data.data.length === 0){
    return <div className="d-flex justify-content-center align-items-center" style={{height: "60vh"}}>
    <div>Product is empty</div>
  </div>;
  }

  const products = data.data
  const currentProduct = products.find((item)=>{
    return item.id == productId;
  })

  console.log(currentProduct)
  return (
    <>
      <section className="shop-details">
        <DetailsGallery currentProduct={currentProduct} />
        <div className="product__details__content">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <div className="product__details__text">
                  <h4>{currentProduct.title}</h4>
                  <div className="rating">
                  {formatRate(currentProduct.rating.rate).map((_, index)=>(
                  <MdStar color="#f5450a" key={index}/>
                ))}
                    <span> - {currentProduct.rating.count} Reviews</span>
                  </div>
                  <h3>
                    ${currentProduct.price}
                  </h3>
                  <p>
                    {currentProduct.description}
                  </p>
                  {/* <div className="product__details__option">
                    <div className="product__details__option__size">
                      <span>Size:</span>
                      <label htmlFor="xxl">
                        xxl
                        <input type="radio" id="xxl" />
                      </label>
                      <label className="active" htmlFor="xl">
                        xl
                        <input type="radio" id="xl" />
                      </label>
                      <label htmlFor="l">
                        <input type="radio" id="l" />
                      </label>
                      <label htmlFor="sm">
                        s
                        <input type="radio" id="sm" />
                      </label>
                    </div>
                    <div className="product__details__option__color">
                      <span>Color:</span>
                      <label className="c-1" htmlFor="sp-1">
                        <input type="radio" id="sp-1" />
                      </label>
                      <label className="c-2" htmlFor="sp-2">
                        <input type="radio" id="sp-2" />
                      </label>
                      <label className="c-3" htmlFor="sp-3">
                        <input type="radio" id="sp-3" />
                      </label>
                      <label className="c-4" htmlFor="sp-4">
                        <input type="radio" id="sp-4" />
                      </label>
                      <label className="c-9" htmlFor="sp-9">
                        <input type="radio" id="sp-9" />
                      </label>
                    </div>
                  </div> */}
                  <div className="product__details__cart__option">
                    <div className="quantity">
                      <div className="pro-qty">
                        <input type="text" value="1" />
                      </div>
                    </div>
                    <span className="primary-btn">
                      add to cart
                    </span>
                  </div>
                  <div className="product__details__btns__option">
                    <a href="#">
                      <i className="fa fa-heart"></i> add to wishlist
                    </a>
                    <a href="#">
                      <i className="fa fa-exchange"></i> Add To Compare
                    </a>
                  </div>
                  <div className="product__details__last__option">
                    <h5>
                      <span>Guaranteed Safe Checkout</span>
                    </h5>
                    <img src="img/shop-details/details-payment.png" alt="" />
                    <ul>
                      <li>
                        <span>SKU:</span> {currentProduct.id}
                      </li>
                      <li>
                        <span>Categories:</span> {currentProduct.category}
                      </li>
                      {/* <li>
                        <span>Tag:</span> Clothes, Skin, Body
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <Description currentProduct={currentProduct}/>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutProduct;
