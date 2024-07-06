// import React from 'react'
import heart from "../../assets/img/icon/heart.png";
import compare from "../../assets/img/icon/compare.png";
import search from "../../assets/img/icon/search.png";
// import product1 from "../../assets/img/product/product-1.jpg";
// import product2 from "../../assets/img/product/product-2.jpg";
// import product3 from "../../assets/img/product/product-3.jpg";
// import product4 from "../../assets/img/product/product-4.jpg";
// import product5 from "../../assets/img/product/product-5.jpg";
// import product6 from "../../assets/img/product/product-6.jpg";
// import product7 from "../../assets/img/product/product-7.jpg";
// import product8 from "../../assets/img/product/product-8.jpg";
// import product9 from "../../assets/img/product/product-9.jpg";
// import product10 from "../../assets/img/product/product-10.jpg";
// import product11 from "../../assets/img/product/product-11.jpg";
import { MdStar } from "react-icons/md";
import { Link } from "react-router-dom";
import AllProducts from "../../hooks/AllProducts";
import DataLoader from "../../component/Loader/DataLoader";
import { ContextData } from "../../Context/useContext";
// import product12 from '../../assets/img/product/product-12.jpg'

function clipSentence(sentence, length) {
  if (sentence.length <= length) {
    return sentence;
  }

  return `${sentence.substring(0, length)}...`;
}

function formatRate(rate){
  const formated = Math.ceil(rate)
  const multiply = Array.from({length: formated})
  return multiply;
}

const ShopCards = () => {
  const {addToCart} = ContextData()
  const { data, isLoading, error } = AllProducts();
  if(isLoading){
    // return <div className="d-flex justify-content-center align-items-center">
      return <DataLoader/>
    // </div>;
  }


  if (error) {
    return <div className="d-flex justify-content-center align-items-center" style={{height: "60vh"}}>
      <div>Error Occured</div>
    </div>;
  }

  if(!data || !data.data){
    return <div className="d-flex justify-content-center align-items-center" style={{height: "60vh"}}>
    <div>Product is unavaliable</div>
  </div>;
  }

  if(data.data.length === 0){
    return <div className="d-flex justify-content-center align-items-center" style={{height: "60vh"}}>
    <div>Product is empty</div>
  </div>;
  }


  const products = data.data




  
  return (
    <>
      <div className="row">
        {products.map((item)=>(
          <div className="col-lg-4 col-md-6 col-sm-6" key={item.id}>
          <div className="product__item">
            <div
              className="product__item__pic set-bg"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <ul className="product__hover">
                <li>
                  <a href="#">
                    <img src={heart} alt="" />
                  </a>
                </li>
                <li>
                  <Link to={`/product/details/${item.id}`}>
                    <img src={compare} alt="" /> <span>Compare</span>
                  </Link>
                </li>
                <li>
                  <a href="#">
                    <img src={search} alt="" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="product__item__text">
              <h6>{clipSentence(item.title, 30)}</h6>
              <span href="#" className="add-cart" 
              onClick={()=>{addToCart(item)}}
              >
                + Add To Cart
              </span>
              <div className="rating d-flex column-gap-2">
                {formatRate(item.rating.rate).map((_, index)=>(
                  <MdStar color="#f5450a" key={index}/>
                ))}
              </div>
              <h5>${item.price}</h5>
              <div className="product__color__select">
                <label htmlFor="pc-4">
                  <input type="radio" id="pc-4" />
                </label>
                <label className="active black" htmlFor="pc-5">
                  <input type="radio" id="pc-5" />
                </label>
                <label className="grey" htmlFor="pc-6">
                  <input type="radio" id="pc-6" />
                </label>
              </div>
            </div>
          </div>
        </div>
        ))}
        
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="product__pagination">
            <a className="active" href="#">
              1
            </a>
            <a href="#">2</a>
            <a href="#">3</a>
            <span>...</span>
            <a href="#">21</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopCards;
