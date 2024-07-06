// import React from 'react'
import { Link } from "react-router-dom";
// import cart1 from "../../assets/img/shopping-cart/cart-1.jpg";
// import cart2 from "../../assets/img/shopping-cart/cart-2.jpg";
// import cart3 from "../../assets/img/shopping-cart/cart-3.jpg";
// import cart4 from "../../assets/img/shopping-cart/cart-4.jpg";
import { ContextData } from "../../Context/useContext";

const CardBody = () => {
  const { cart, removeCart } = ContextData();

  if (cart.length === 0) {
    return (
      <>
        <section className="shopping-cart spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="shopping__cart__table">
                  <table>
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <div className="text-center">Cart is Empty</div>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="cart__discount">
                  <h6>Discount codes</h6>
                  <form action="#">
                    <input type="text" placeholder="Coupon code" />
                    <button type="submit">Apply</button>
                  </form>
                </div>
                <div className="cart__total">
                  <h6>Cart total</h6>
                  <ul>
                    <li>
                      Subtotal <span>$ 0</span>
                    </li>
                    <li>
                      Total <span>$0</span>
                    </li>
                  </ul>
                  <Link to="/checkout" className="primary-btn">
                    Proceed to checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
      <section className="shopping-cart spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="shopping__cart__table">
                <table>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item, index) => (
                      <tr key={index}>
                        <td className="product__cart__item">
                          <div className="product__cart__item__pic">
                            <img src={item.image} className="img-fluid" alt="" />
                          </div>
                          <div className="product__cart__item__text">
                            <h6>{item.title}</h6>
                            <h5>${item.price}</h5>
                          </div>
                        </td>
                        <td className="quantity__item">
                          <div className="quantity">
                            <div className="pro-qty-2">
                              <input type="text" value="1" />
                            </div>
                          </div>
                        </td>
                        <td className="cart__price">$ {item.price}</td>
                        <td className="cart__close">
                          <i className="fa fa-close" onClick={()=>{removeCart(index)}}></i>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="continue__btn">
                    <a href="#">Continue Shopping</a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="continue__btn update__btn">
                    <a href="#">
                      <i className="fa fa-spinner"></i> Update cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cart__discount">
                <h6>Discount codes</h6>
                <form action="#">
                  <input type="text" placeholder="Coupon code" />
                  <button type="submit">Apply</button>
                </form>
              </div>
              <div className="cart__total">
                <h6>Cart total</h6>
                <ul>
                  {/* <li>
                    Subtotal <span>$ 169.50</span>
                  </li> */}
                  <li>
                    Total <span>$ {totalPrice.toFixed(2)}</span>
                  </li>
                </ul>
                <Link to="/checkout" className="primary-btn">
                  Proceed to checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CardBody;
