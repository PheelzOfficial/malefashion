// import React from 'react'
import calender from "../../assets/img/icon/calendar.png";
import blog1 from "../../assets/img/blog/blog-1.jpg";
import blog2 from "../../assets/img/blog/blog-2.jpg";
import blog3 from "../../assets/img/blog/blog-3.jpg";
import blog4 from "../../assets/img/blog/blog-4.jpg";
import blog5 from "../../assets/img/blog/blog-5.jpg";
import blog6 from "../../assets/img/blog/blog-6.jpg";
import blog7 from "../../assets/img/blog/blog-7.jpg";
import blog8 from "../../assets/img/blog/blog-8.jpg";
import blog9 from "../../assets/img/blog/blog-9.jpg";
import { Link } from "react-router-dom";

const BlogCards = () => {
  return (
    <>
      <section className="blog spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="blog__item">
                <div
                  className="blog__item__pic set-bg"
                  style={{ backgroundImage: `url(${blog1})` }}
                ></div>
                <div className="blog__item__text">
                  <span>
                    <img src={calender} alt="" /> 16 February 2020
                  </span>
                  <h5>What Curling Irons Are The Best Ones</h5>
                  <Link to="/blog/details">Read More</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="blog__item">
                <div
                  className="blog__item__pic set-bg"
                  style={{ backgroundImage: `url(${blog2})` }}
                ></div>
                <div className="blog__item__text">
                  <span>
                    <img src={calender} alt="" /> 21 February 2020
                  </span>
                  <h5>Eternity Bands Do Last Forever</h5>
                  <Link to="/blog/details">Read More</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="blog__item">
                <div
                  className="blog__item__pic set-bg"
                  style={{ backgroundImage: `url(${blog3})` }}
                ></div>
                <div className="blog__item__text">
                  <span>
                    <img src={calender} alt="" /> 28 February 2020
                  </span>
                  <h5>The Health Benefits Of Sunglasses</h5>
                  <Link to="/blog/details">Read More</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="blog__item">
                <div
                  className="blog__item__pic set-bg"
                  style={{ backgroundImage: `url(${blog4})` }}
                ></div>
                <div className="blog__item__text">
                  <span>
                    <img src={calender} alt="" /> 16 February 2020
                  </span>
                  <h5>Aiming For Higher The Mastopexy</h5>
                  <Link to="/blog/details">Read More</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="blog__item">
                <div
                  className="blog__item__pic set-bg"
                  style={{ backgroundImage: `url(${blog5})` }}
                ></div>
                <div className="blog__item__text">
                  <span>
                    <img src={calender} alt="" /> 21 February 2020
                  </span>
                  <h5>Wedding Rings A Gift For A Lifetime</h5>
                  <Link to="/blog/details">Read More</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="blog__item">
                <div
                  className="blog__item__pic set-bg"
                  style={{ backgroundImage: `url(${blog6})` }}
                ></div>
                <div className="blog__item__text">
                  <span>
                    <img src={calender} alt="" /> 28 February 2020
                  </span>
                  <h5>The Different Methods Of Hair Removal</h5>
                  <Link to="/blog/details">Read More</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="blog__item">
                <div
                  className="blog__item__pic set-bg"
                  style={{ backgroundImage: `url(${blog7})` }}
                ></div>
                <div className="blog__item__text">
                  <span>
                    <img src={calender} alt="" /> 16 February 2020
                  </span>
                  <h5>Hoop Earrings A Style From History</h5>
                  <Link to="/blog/details">Read More</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="blog__item">
                <div
                  className="blog__item__pic set-bg"
                  style={{ backgroundImage: `url(${blog8})` }}
                ></div>
                <div className="blog__item__text">
                  <span>
                    <img src={calender} alt="" /> 21 February 2020
                  </span>
                  <h5>Lasik Eye Surgery Are You Ready</h5>
                  <Link to="/blog/details">Read More</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="blog__item">
                <div
                  className="blog__item__pic set-bg"
                  style={{ backgroundImage: `url(${blog9})` }}
                ></div>
                <div className="blog__item__text">
                  <span>
                    <img src={calender} alt="" /> 28 February 2020
                  </span>
                  <h5>Lasik Eye Surgery Are You Ready</h5>
                  <Link to="/blog/details">Read More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogCards;
