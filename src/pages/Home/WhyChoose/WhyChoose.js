import React from 'react';

const WhyChoose = () => {
    return (
        <div id="whyChoose">
            <div className="card mt-5 w-100" >
  <div className="row g-0">
    <div className="col-lg-6 col-sm-12">
      <img src="images/choose.jpg" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-lg-6  col-sm-12  bg-warning">
      <div className="card-body text-center py-5">
        <h5 className="card-title">Why Choose Us!!</h5>
        <h2 className='fw-bolder text-white'>Our Achievements</h2>
        <div className="card-text mt-5 container d-flex justify-content-between align-items-center">
            <div>
                <h2><i className="fa-solid fa-star"></i></h2>
                <h1>500</h1>
                <h4>CUSTOMERS</h4>
            </div>
            <div>
                <h2><i className="fa-solid fa-heart"></i></h2>
                <h1>170</h1>
                <h4>PHOTOSHOOTS</h4>
            </div>
            <div>
                <h2><i className="fa-solid fa-images"></i></h2>
                <h1>2,570<sup>+</sup></h1>
                <h4>PHOTOS</h4>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default WhyChoose;