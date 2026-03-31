import React from 'react';

import PropTypes from 'prop-types';

 
const propTypes = {}; 
const defaultProps = {};
 
const Banner = () => {
    return (
    <>
              <div id="carouselExampleCaptions" className="carousel carousel-fade slide" data-interval="2000" data-bs-ride="carousel">
				<div className="carousel-indicators">
					<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
					<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button> 
					<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button> 
				</div>
				<div className="carousel-inner">
					<div className="carousel-item active">
					<img src="/img/aurobindo-home-banner-1.jpg" className="d-block w-100" alt="Product Aurobindo"/> 
					</div>
					<div className="carousel-item">
					<img src="/img/SmartIndiaHackathon2.jpg" className="d-block w-100" alt="Product Aurobindo"/> 
					</div>
					<div className="carousel-item">
					<img src="/img/Aurobindo-Report1360-final.jpg" className="d-block w-100" alt="Product Aurobindo"/> 
					<div className='landscape'>
						<a href="/img/Aurobindo-Pharma_Sustainability-Report_Final_LowRes_Double-spread_For-upload.pdf" target>Landscape Mode</a>
					</div>
					<div className='potrait'>
						<a href="/img/Aurobindo-Pharma_Sustainability-Report_Final_LowRes_Single-spread.pdf" target>Potrait Mode</a>
					</div>
					</div>
				</div>				 
		</div>
    </>
    );
}

Banner.propTypes = propTypes;
Banner.defaultProps = defaultProps;
export default Banner;