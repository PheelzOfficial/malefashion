// import React from 'react'
import calender from "../../assets/img/icon/calendar.png";
// import blog1 from "../../assets/img/blog/blog-1.jpg";
// import blog2 from "../../assets/img/blog/blog-2.jpg";
// import blog3 from "../../assets/img/blog/blog-3.jpg";
import DataLoader from "../../component/Loader/DataLoader";
import AllBlogs from "../../hooks/AllBlogs";

function formatDate(date){
    const option = {year: "numeric", month: "long", day: "numeric"};
    const format = new Date(date)
    return format.toLocaleDateString('en-GB', option);
}

const News = () => {
  const { data, isLoading, error } = AllBlogs();
  if (isLoading) {
    // return <div className="d-flex justify-content-center align-items-center">
    <DataLoader />;
    // </div>;
  }

  if (error) {
    return (
      <section className="latest spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <span>Latest News</span>
                <h2>Fashion New Trends</h2>
              </div>
            </div>
          </div>
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "30vh" }}
          >
            <div>Error Occured</div>
          </div>
          ;
        </div>
      </section>
    );
  }

  console.log(data);


  if (!data || !data.data || !data.data.articles) {
    return (
      <section className="latest spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <span>Latest News</span>
                <h2>Fashion New Trends</h2>
              </div>
            </div>
          </div>
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "30vh" }}
          >
            <div>No news Available</div>
          </div>
        </div>
      </section>
    );
  }

  if (data.data.articles.length === 0) {
    return (
      <section className="latest spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <span>Latest News</span>
                <h2>Fashion New Trends</h2>
              </div>
            </div>
          </div>
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "30vh" }}
          >
            <div>Blog unavailable</div>
          </div>
          ;
        </div>
      </section>
    );
  }
  const blogs = data.data.articles;
  const fewBlogs = blogs.splice(0, 3)
  console.log(fewBlogs)
  return (
    <>
      <section className="latest spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <span>Latest News</span>
                <h2>Fashion New Trends</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {fewBlogs.map((item, index) => (
              <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                <div className="blog__item">
                  <div
                    className="blog__item__pic set-bg"
                    style={{ backgroundImage: `url(${item.urlToImage})` }}
                  ></div>
                  <div className="blog__item__text">
                    <span>
                      <img src={calender} alt="" /> {formatDate(item.publishedAt)}
                    </span>
                    <h5>{item.title}</h5>
                    <a href="/blog/details">Read More</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
