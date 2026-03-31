import React from 'react'; 
const propTypes = {};
const defaultProps = {};
const Commited = () => {
    return (
    <>
    <section id="content">
			<div className="content-wrap">
				<div className="container clearfix">
                     <div className="row align-items-center gutter-40 col-mb-50">
						<div className="col-md-6">
							<div className="row">
								<div className="col-md-8">
									<div className="apfimg">
									<img data-animate="fadeInLeftBig" src="img/committed-quality.jpg" alt="Imac" className="fadeInLeftBig animated"/>
								   </div>
								</div>
								<div className="col-md-4 pad-0">
									<div className="imgsidebox">
										<div className="apf-con"><span className="font-30">650 +</span><br/>
											ANDAs filed<br/>
											<span className="font-30">450 +</span><br/>
											Final approvals<br/><br/>
											Manufacturing facilities approved by US FDA, UK MHRA, TGA Australia, MCC-SA, EMA and ANVISA for both APIs and Formulations
										</div>
									</div>
								</div>
							</div>
							
						</div>

						<div className="col-md-6">
							<div className="heading-block">
								<h1>Committed to Quality and Safety</h1> 
							</div> 
							<p>A fully integrated pharma company, Aurobindo Pharma features among the top 2 companies in India in terms of consolidated revenues. Aurobindo exports to over 150 countries across the globe with more than 90% of its revenues derived from international operations.</p>

							<a href="/about-us" className="button button-border button-rounded button-large ms-0 topmargin-sm">Learn More</a>
						</div>
					</div> 
				</div>
				<div className="container clearfix flex-column-reverse">
                     <div className="row parent align-items-center gutter-40 mt-md-3 col-mb-50 flex-row-reverse">
                     	
						 <div className="col-md-6 text-right col-md-pull-6">
							<div className="heading-block">
								<h3>Robust Product Portfolio</h3> 
							</div> 
							<p>Leveraging India’s globally competitive cost base and talented team of scientists, we have successfully launched a range of affordable products which are accessible across the globe. From discovery to development to commercialization, our growth is aided by cost-effective drug development and substantial manufacturing.</p>

							<a href="/about-us/business-units/rd" className="button button-border button-rounded button-large ms-0 topmargin-sm btn_more ">Learn More</a>
						</div>	

						<div className="col-md-6 col-md-push-6 parent">
							<div className="row">
								<div className="col-md-4 pad-0">
									<div className="imgsidebox1"> 
										<div className="apf-con"><span className="font-30">1,700</span> <br/>
										Expert Scientists & Analysts Globally <br/><br/>
										Leveraging World-Class Talent in a Global Team across 7 R&D Centers, we successfully launch affordable products across multiple Therapeutic Areas and Delivery Technologies</div>
									</div>
								</div>
								<div className="col-md-8 push-6">
								  <div className="apfimg">
									  	<img data-animate="fadeInRightBig" src="img/robust-product-portfolio-1.jpg" alt="Imac" className="fadeInRightBig animated"/>
								   </div>
								</div>  

							</div>							
						</div> 

					</div> 
				</div>
     
			</div>
		</section>
    </>
        );
}

Commited.propTypes = propTypes;
Commited.defaultProps = defaultProps;


export default Commited;