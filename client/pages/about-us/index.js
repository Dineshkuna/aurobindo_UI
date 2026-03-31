import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const propTypes = {};

const defaultProps = {};

const index = () => {
    return (
        <>
		 <Head>
				  <title>Aurobindo Pharma | Trusted Global Generic Manufacturer</title>
				  <meta name="description" content="Discover Aurobindo Pharma’s commitment to quality, innovation, and affordability. Explore our global manufacturing excellence and trusted pharmaceutical products." /> 
				  <meta name="robots" content="index, follow" />
				  <link rel="canonical" href="https://products.aurobindo.com/about-us" /> 
				</Head>


           <section id="content">
			<div className="content-wrap">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="head-title">
								<h1>Aurobindo Overview</h1>
								<p>Founded in 1986 by Mr. P. V. Ramprasad Reddy, Mr. K. Nityananda Reddy and a small group of highly committed professionals, Aurobindo Pharma was born of a vision. The company commenced operations in 1988-89 with a single unit manufacturing Semi-Synthetic Penicillin (SSP) at Pondicherry.<br/><br/>

                                   Aurobindo Pharma became a public company in 1992 and listed its shares on the Indian stock exchanges in 1995. In addition to being the market leader in Semi-Synthetic Penicillins, it has a presence in key therapeutic segments such as neurosciences, cardiovascular, anti-retrovirals, anti-diabetics, gastroenterology and anti-biotics, among others.</p>
                        	</div>		 
						</div>  
					</div>

					<div className="row mrt-25">
						<div className="col-md-6 col-xs-12">
						  <div className="row">
						    <div className="col-12">
						    	<div className="commitment-con"> 
									<h3><a className="big-arrow-text" href="/about-us/business-units/rd/">Strengths and Leadership<i className="long-arrow">→</i></a></h3>
										<ul className="scales_lists">
											<li>Large manufacturing facilities approved by leading regulatory bodies</li>
											<li>Large diversified product portfolio</li>
											<li>Large R&amp;D facility in India for formulations and active ingredients</li>
										</ul>
										<p><a className="learn-more-text" href="/about-us/business-units/rd/">Learn More</a></p>
								</div>
						    </div>
						  </div>
						</div>

						<div className="col-md-6 col-xs-12">
							<div className="row">
						    <div className="col-12">
						    	<div className="commitment-con">
								<h3><a className="big-arrow-text" href="/about-us/at-a-glance/global-operations-map/">Operational Excellence<i className="long-arrow">→</i></a></h3>
									<ul className="scales_lists">
										<li>Vertical integration</li>
										<li>Proven regulatory expertise</li>
										<li>Technology and know-how for specialty formulations</li>
									</ul>
									<p><a className="learn-more-text" href="/about-us/at-a-glance/global-operations-map/">Learn More</a></p>

								</div>
						    </div>
						  </div>
						</div>
					</div> 
               </div>


				<div className="sustain-counter mrt-40">
					<div className="container">
					<div className="col-mb-50 mb-5 mrt-40">
						<div className="col-sm-6 col-lg-3 sustain-number">
							<div className="counter counter-small"><span data-from="1" data-to="24000" data-refresh-interval="100" data-speed="2000">24000 </span><i>+</i></div>
							<h5>Employees World Wide</h5>
						</div>

						<div className="col-sm-6 col-lg-3 sustain-number">
							<div className="counter counter-small"><span data-from="1" data-to="155" data-refresh-interval="200" data-comma="true" data-sep="+"  data-places="358" data-speed="2500">155 </span><i>+</i></div>
							<h5>Markets we are present</h5>
						</div>

						<div className="col-sm-6 col-lg-3 sustain-number">
							<div className="counter counter-small"><span data-from="1" data-to="27" data-refresh-interval="50"  data-comma="true" data-sep="+"  data-speed="3500">27 </span></div>
							<h5>State-of-the-art manufacturing and packaging facilities globally</h5>
						</div>

						<div className="col-sm-6 col-lg-3 sustain-number">
							<div className="counter counter-small"><span data-from="1" data-to="40" data-refresh-interval="150" data-comma="true" data-sep="+"  data-speed="2700">40</span><i>+ Billion</i></div>
							<h5>Dosage Forms </h5>
						</div>
					 </div>
					</div>
				</div>

			 
			 

			</div>
		</section>
       
        </>
    );
}

index.propTypes = propTypes;
index.defaultProps = defaultProps;
// #endregion

export default index;