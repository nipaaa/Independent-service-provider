import React from 'react';

const Footer = () => {
    return (
        <div className='row g-0 py-5 bg-dark text-white'>
            <div className="col-lg-3 col-sm-6 text-center">
                <img height={100} src="images/footer.png" alt="" />
            </div>
            <div className="col-lg-3 col-sm-6 text-center">
                <h5 className='text-warning'>Links</h5>
                <p>About Us</p>
                <p>Services</p>
                <p>Credit</p>   
            </div>
            <div className="col-lg-3 col-sm-6 text-center">
            <h5 className='text-warning'>Services</h5>
                <p>Outdoor Photography</p>
                <p>Vedio Photography</p>
                <p>Pregnency Photography</p>  
            </div>
            <div className="col-lg-3 col-sm-6 text-center">
            <h5 className='text-warning'>Contact Us</h5>
                <p><i className="fa-solid fa-phone"></i> +088-586556</p>
                <p><i className="fa-solid fa-envelope"></i> nipa@gmail.com</p>
                <p><i className="fa-solid fa-location-dot"></i> Konabari,Gazipur</p>  
            </div>
            
        </div>
    );
};

export default Footer;