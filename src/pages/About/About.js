import React from 'react';

const About = () => {
    return (
        <div>
             <div className="card  w-100" >
  <div className="row g-0">
    <div className="col-lg-5 col-sm-12">
      <img src="images/nipa.jpg" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-lg-7  col-sm-12  bg-warning">
      <div className="card-body text-center py-5">
        <h5 className="card-title">About Me</h5>
        <h2 className='fw-bolder text-white'>Hello, I'm Nipa.</h2>
        <div className="card-text text-secondary">
           I'm a photographer. I specialy shoot baby photos. I like to do it.
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default About;