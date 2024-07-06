// import React from 'react'
import testimony1 from '../../assets/img/about/testimonial-author.jpg'
import testimonyPic from '../../assets/img/about/testimonial-pic.jpg'
// import testimony3 from '../../assets/img/about/testimonial-author.jpg'
// import testimony4 from '../../assets/img/about/testimonial-author.jpg'
// import testimony5 from '../../assets/img/about/testimonial-author.jpg'

const Testimonial = () => {
  return (
    <>
        <section className="testimonial">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6 p-0">
                    <div className="testimonial__text">
                        <span className="icon_quotations"></span>
                        <p>“Going out after work? Take your butane curling iron with you to the office, heat it up,
                            style your hair before you leave the office and you won’t have to make a trip back home.”
                        </p>
                        <div className="testimonial__author">
                            <div className="testimonial__author__pic">
                                <img src={testimony1} alt=""/>
                            </div>
                            <div className="testimonial__author__text">
                                <h5>Augusta Schultz</h5>
                                <p>Fashion Design</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 p-0">
                    <div className="testimonial__pic set-bg" style={{backgroundImage:`url(${testimonyPic})`}}></div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Testimonial
