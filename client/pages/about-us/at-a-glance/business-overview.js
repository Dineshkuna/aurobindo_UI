import React from 'react'; 
import Innerbanner from '../../../components/Layout/Innerbanner';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
 
const propTypes = {};

const defaultProps = {}; 
const BusinessOverview = () => {

    const router=useRouter();
    const {parms=[]}=router.query;
    console.log(router.pathname);
    return (
<>

<section id="content">
			<div className="content-wrap">
				<div className="container">

					<div className="row col-mb-50">
						<div className="col-12">
							<div className="head-title">
								<h2>Mission and Vision Statement</h2>
								<p>Aurobindo’s mission is to become the most valued Pharma partner to the World Pharma fraternity by continuously researching, developing and manufacturing a wide range of pharmaceutical products that comply with the highest regulatory standards.</p>
								<div className="mission_blockstitles">“ To become a leading and an admired global pharma company, ranked in the top 25 by 2030”</div>
							</div>
						

						<div className=""> 
							<h2>Business Overview</h2>
							<p>Founded in 1986 by Mr. P.V. Ramprasad Reddy, Mr. K. Nityananda Reddy and a small group of highly committed professionals, Aurobindo Pharma was born of a vision. The company commenced operations in 1988-89 with a single unit manufacturing Semi-Synthetic Penicillin (SSP) at Pondicherry.</p>
							<p>Aurobindo Pharma became a public company in 1992 and listed its shares on the Indian stock exchanges in 1995. In addition to being the market leader in Semi-Synthetic Penicillin’s, Aurobindo Pharma has a presence in key therapeutic segments such as neurosciences (CNS), cardiovascular (CVS), anti-retroviral, anti-diabetics, gastroenterology and Anti-biotics</p>
							<p>Through cost effective manufacturing capabilities and a few loyal customers, the company also entered the high margin specialty generic formulations segment. Today Aurobindo Pharma has evolved into a knowledge driven company manufacturing active pharmaceutical ingredients and formulation products. It is R&amp;D focused and has a multi-product portfolio with manufacturing facilities in several countries.</p>
							<p>The formulation business is systematically organized with a divisional structure, and has a focused team for key international markets. Leveraging its large manufacturing infrastructure for APIs and formulations, wide and diversified basket of products and confidence of its customers, Aurobindo achieved revenue of USD 2.6 billion in FY2017-18. Aurobindo’s 11 units for APIs / intermediates and 15 units (10 in India, 3 in USA, 1 in Brazil and 1 in Portugal) for formulations are designed to meet the requirements of both advanced as well as emerging market opportunities.</p>
							<p>A well-integrated pharma company, Aurobindo Pharma features among the top 2 Pharmaceutical companies in India in terms of consolidated revenues. Aurobindo exports to over 150 countries across the globe with around 90% of revenues derived from international operations. Our customers include premium multi-national companies. With multiple facilities approved by leading regulatory agencies such as USFDA, EU GMP, UK MHRA, South Africa-MCC, Health Canada, WHO and Brazil ANVISA, Aurobindo makes use of in-house R&amp;D for rapid filing of patents, Drug Master Files (DMFs), Abbreviated New Drug Applications (ANDAs) and formulation dossiers across the world. Aurobindo Pharma is among the largest filers of DMFs and ANDAs in India.</p> 
						</div>
						</div>


						 

						<div className="w-100"></div>

						<div className="col-md-4">
							<div className="h4-title">
								<h4>Our Evolution</h4>
								<ul className="listitems">
									<li>Successful innovation in process chemistry</li>
									<li>Cost competitive manufacturing</li>
									<li>Large diversified product portfolio</li>
									<li>Global leadership in anti-infective</li>
									<li>Largest generic portfolio in Antiretroviral drugs(ARVs)</li>
								</ul>
						    </div>
						</div>

						<div className="col-md-4">
							<div className="h4-title">
								<h4>Core Strengths</h4>
								<ul className="listitems">
									<li>Scale, Diversity and Leadership</li>
									<li>Operational Excellence</li>
									<li>Service Delivery</li>
									<li>Patient Focus</li>
								</ul>
						    </div>
						</div>
						<div className="col-md-4">
							<div className="h4-title">
								<h4>Robust R & D</h4>
								<p>One of the largest R&amp;D facilities in India, Aurobindo Pharma has five research centres spread over 16,000 square meters. It also has 2 R&amp;D centres in USA. The company employs over 1560 scientists &amp; analysts in- house expertise in product development ensuring a quick turnaround time in areas such as:</p>
								<ul className="listitems">
									<li>Project / product identification</li>
									<li>Literature evaluation / patent study</li>
									<li>API process development</li>
									<li>Formulation development</li>
									<li>Pilot BA / BE</li>
									<li>Exhibiting batches for dossier submission</li>
									<li>Stability studies for global requirements</li>
									<li>Dossier submission</li>
								</ul> 
						    </div>
						</div>

						<div className="w-100"></div>
 
 
					</div>

				</div>
			</div>
		</section>
</>
    );
}

BusinessOverview.propTypes = propTypes;
BusinessOverview.defaultProps = defaultProps;
// #endregion

export default BusinessOverview;