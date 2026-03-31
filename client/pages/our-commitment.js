import React from 'react';  
import Innerbanner from '../components/Layout/Innerbanner';
const propTypes = {};
const defaultProps = {};

 
const ourcommitment = () => {
	var bannerdetails={
		bimage :"img/banners/Investors-Banner-Img.jpg",
		bTitle :"Shaping holistic community well-being-swapna",
		bcontent :"We are diligently and sustainably achieving <br/> excellence in all that we do",
	}

    return (
        <>
          <Innerbanner {...bannerdetails} ></Innerbanner>
          {/* <!-- Content --> */}
		<section id="content">
			<div className="content-wrap">
				<div className="container">

					<div className="row col-mb-50">
						<div className="col-12">
							<div className="head-title">
								<h2>Our Commitment</h2>
									<p>Our commitment towards sustained excellence includes our efforts to benefit the communities we work with. We operate through charitable donations, volunteering and by building a responsible business that abides by an essential set of social and environmental policies.</p>
									<p>We collaborate with community groups to support public policies that promote economic and societal development, while respecting local cultures.</p>
									<p>Aurobindo’s sustainability charter covers the following intervention areas:</p>
									<ul className="listitems">
										<li>Promoting education</li>
										<li>Supporting preventive healthcare</li>
										<li>Eradicating hunger, poverty and malnutrition</li>
										<li>Making safe drinking water available</li>
										<li>Encouraging environment sustainability</li>
										<li>Sustaining ecological balance and conservation of natural resources</li>
										<li>Encouraging rural sports</li>
										<li>Setting up old-age homes</li>
									</ul>
									<p>As part of our societal commitment, we support neighbourhoods with educational aids for school children and construct toilets and facilities for the provision of safe drinking water. Our primary focus is to promote education, encourage good health, provide safe drinking water and support sanitation.</p>

										<h4>CSR Policy</h4>
										<ul className="govrce_plcy">
											<li><a href="" target="_blank" rel="noopener">CSR Report<span className="pull-right">Download <i className="fa fa-file-pdf-o"></i></span></a></li>
											<li><a href="" target="_blank" rel="noopener">CSR Policy<span className="pull-right">Download <i className="fa fa-file-pdf-o"></i></span></a></li>
										</ul>	  
							</div> 
						</div>  
					</div>

				</div>
			</div>
		</section>
		{/* <!-- #content end --> */}
        </>
    );
}

ourcommitment.propTypes = propTypes;
ourcommitment.defaultProps = defaultProps;
 
export default ourcommitment;