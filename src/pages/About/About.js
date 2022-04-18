import React from 'react';

const About = () => {
    return (
        <div>
          <h2 className='text-warning text-center'>About Me</h2>
             <div className="card  w-100" >
  <div className="row g-0">
    <div className="col-lg-5 col-sm-12">
      <img src="images/nipa.jpg" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-lg-7  col-sm-12  bg-warning">
      <div className="card-body text-center py-5">
        <h5 className="card-title">Name: Nipa Akter</h5>
        <h2 className='fw-bolder text-white'></h2>
        <div className="card-text text-secondary">
           
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default About;