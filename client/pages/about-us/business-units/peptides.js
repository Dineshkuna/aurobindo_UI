import React from 'react'; 
import Innerbanner from '../../../components/Layout/Innerbanner';
import PropTypes from 'prop-types';
 
const propTypes = {};

const defaultProps = {};
 
const peptides = () => {
    
    return (
      <>
     
      <section id="content">
			<div className="content-wrap">
				<div className="container">

					<div className="row">
						<div className="col-12">
							<div className="head-title">
								<h2>Peptides</h2>
								<h4>Overview</h4>
								<p>Auro Peptides Ltd. is the subsidiary division of Aurobindo Pharma that delivers innovative solutions from discovery to development and commercialization through to cost-effective drug development and manufacturing.<br/><br/>
								Auro Peptide’s aims “to deliver cGMP material in a timely, transparent, reliable manner and in a facilitative environment, through streamlined processes and talented workforce.”
								Located approximately 40km from Hyderabad, the facility is supported by state-of-the-art infrastructure which enables end-to-end GMP services so as to deliver the services in line with customer expectations and regulatory requirements. The facility houses a highly experienced team of scientists who develop chemical synthesis processes for peptides which are commercially viable and eco-friendly. The entire manufacturing facility is HVAC controlled.
							   </p> 
							</div> 
						</div> 
						<div className="w-100"></div>

						<div className="col-md-4">
							<div className="h4-title">
								 <h4>Analytical Capabilities</h4>
								<p>Quality control is equipped with advanced instruments of 21 CFR compliance.</p>
								<p><strong>List of Equipment’s/instruments:</strong></p>
								<ul className="listitems">
									<li>HPLCs/UPLC.</li>
									<li>Gas Chromatography</li>
									<li>Potentiometer</li>
									<li>Coulometer</li>
									<li>Spectrophotometer</li>
									<li>Polari meter</li>
									<li>TOC</li>
									<li>Ultra Micro Balance (Comparator)</li>
									<li>pH/Conductivity meter</li>
								</ul>
						    </div>
						</div>

						<div className="col-md-4">
							<div className="h4-title">
								<h4>List of Peptide Links</h4>
									<ul className="listitems">
										<li>Desmopressin</li>
										<li>Glatiramer</li>
										<li>Leuprolide</li>
										<li>Cetrorelix</li>
										<li>Linaclotide</li>
										<li>Bivalirudin</li>
										<li>ACTH (1-39)</li>
										<li>Octreotide</li>
										<li>Eptifibatide</li>
										<li>Buserelin</li>
									</ul>
						    </div>
						</div>
						<div className="col-md-4">
							<div className="h4-title">
								 <ul className="listitems">
									<li>Somatostatin</li>
									<li>Teriparatide (HPTH 1-34)</li>
									<li>Goserelin</li>
									<li>Vasopressin</li>
									<li>ACTH 1-39 (Human)</li>
									<li>Degarelix</li>
									<li>Sal GNRH</li>
								</ul>
						    </div>
						</div>

						<div className="w-100"></div>
						<div className="col-12">
							<div className="head-title">
									<h4>Facility Approval</h4>
										<p><strong>Work with Us-</strong>We are driven to build working relationships with our clients and offer them an evolving and personalized service that matches their ongoing and changing requirements. We are Peptide manufacturing professionals, meeting or exceeding the quality required by CGMP regulations.We manufacture peptides from short to long chain peptide molecules,anywhere from milligrams to kilograms in scale.
											<br/><strong>Trust-</strong>We build long-lasting business relationships and develop partnerships based on trust. We view each GMP campaign as one step on the road to approval and commercial manufacture, and plan accordingly.
											<br/><strong>GMP Services-</strong>GMP manufacturing/ requires considerable documentation and regulatory support. All GMP peptide projects at Auro Peptides include a comprehensive “price included” service package. This covers all services needed to secure approval of your API</p>
										<ul className="govrce_plcy">
											<li><a href="/img/facility-approval.pdf" target="_blank" rel="noopener">Facility Approval
												<span className="pull-right">Download <i className="fa fa-file-pdf-o"></i></span></a></li>
										</ul>
								 
							</div> 
						</div> 
 
 
					</div>

				</div>
			</div>
		</section>
      </>
    );
}

peptides.propTypes = propTypes;
peptides.defaultProps = defaultProps;
// #endregion

export default peptides;