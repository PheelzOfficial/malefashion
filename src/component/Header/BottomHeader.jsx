// import React from 'react'
import logo from "../../assets/img/logo.png";
import heart from "../../assets/img/icon/heart.png";
import cartIcon from "../../assets/img/icon/cart.png";
import search from "../../assets/img/icon/search.png";
import { Link } from "react-router-dom";
import { ContextData } from "../../Context/useContext";
import "./BottomHeader.css";

// eslint-disable-next-line react/prop-types
const BottomHeader = ({ openSearch, active }) => {
  const { cart, user, token, logout } = ContextData();
  const cartLength = cart.length;
  return (
    <>
      <header className="header">
        <div className="header__top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-7">
                <div className="header__top__left">
                  <p>Free shipping, 30-day return or refund guarantee.</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-5">
                <div className="header__top__right">
                  <div className="header__top__links">
                    {!user && !token ? <Link to="/login">Sign in</Link> : ""}
                    {!user && !token ? <Link to="/register">Sign up</Link> : ""}

                    {!user && !token ? (
                      ""
                    ) : (
                      <span className="whenlogin">
                        <span style={{ marginLeft: "15px" }}>
                          Welcome {user.firstName} {user.lastName},{" "}
                        </span>
                        <span className="logout" onClick={logout}>Logout</span>
                      </span>
                    )}

                    <Link to="/faq">FAQs</Link>
                  </div>
                  <div className="header__top__hover">
                    <span>
                      Usd <i className="arrow_carrot-down"></i>
                    </span>
                    <ul>
                      <li>USD</li>
                      <li>EUR</li>
                      <li>USD</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3">
              <div className="header__logo">
                <Link to="/">
                  <img src={logo} alt="" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <nav className="header__menu mobile-menu">
                <ul>
                  <li className={active === "home" ? "active" : ""}>
                    <Link to="/">Home</Link>
                  </li>
                  <li className={active === "shop" ? "active" : ""}>
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li className={active === "about" ? "active" : ""}>
                    <Link to="/about">About</Link>
                  </li>
                  {/* <li>
                    <Link to="/">Pages</Link>
                    <ul className="dropdown">
                      <li>
                        <Link to="//about.html">About Us</Link>
                      </li>
                      <li>
                        <Link to="//shop-details.html">Shop Details</Link>
                      </li>
                      <li>
                        <Link to="//shopping-cart.html">Shopping Cart</Link>
                      </li>
                      <li>
                        <Link to="//checkout.html">Check Out</Link>
                      </li>
                      <li>
                        <Link to="//blog-details.html">Blog Details</Link>
                      </li>
                    </ul>
                  </li> */}
                  <li className={active === "blog" ? "active" : ""}>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li className={active === "contact" ? "active" : ""}>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className="header__nav__option">
                <a href="#" className="search-switch" onClick={openSearch}>
                  <img src={search} alt="" />
                </a>
                <Link href="#">
                  <img src={heart} alt="" />
                </Link>
                <Link to="/cart">
                  <a href="#">
                    <img src={cartIcon} alt="" className="cartimage" />{" "}
                    <span>{cartLength < 10 ? cartLength : "9+"}</span>
                  </a>
                  <div className="price">$0.00</div>
                </Link>
              </div>
            </div>
          </div>
          <div className="canvas__open">
            <i className="fa fa-bars"></i>
          </div>
        </div>
      </header>
    </>
  );
};

export default BottomHeader;
