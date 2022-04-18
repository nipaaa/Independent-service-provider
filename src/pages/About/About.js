import React from 'react';

const About = () => {
    return (
        <div className='my-5'>
          <h2 className='text-warning text-center mb-5'>About Me</h2>
             <div className="card  w-100" >
  <div className="row g-0">
    <div className="col-lg-5 col-sm-12">
      <img src="images/nipa.jpg" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-lg-7  col-sm-12  bg-warning">
      <div className="card-body text-center py-5">
        <h5 className="card-title">Name: Nipa Akter</h5>
        <div className="card-text text-white p-lg-5">
           Hello, i'm Nipa Akter from Gazipur. I've just completed Bsc. in computer science and engineering. I want to be a web developer. For that i'm doing web development course in 'programming hero'. And i'm preparing myself by doing regular practice in coding and creating project. I do experiment on project and like to take challenge to solve different new problems.I also give extra time for reading documentation of many web development learning site.
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default About;