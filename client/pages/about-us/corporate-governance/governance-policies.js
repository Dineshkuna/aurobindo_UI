import React from 'react'; 
import PropTypes from 'prop-types';
 
const propTypes = {};

const defaultProps = {};
 
const Governancepolicies = ( {gpolicies}) => {
    return (
        <>
        <section id="content">
			<div className="content-wrap">
				<div className="container">

					<div className="row">
						<div className="col-12">
							<div className="head-title">
								<h2>Governance Policies</h2>
									<p>The Board has a good mix of pharmaceutical experience and professional management. Decision-making is decentralized, with accountability and freedom to operate.Under the leadership and supervision of the Board of Directors assisted by a qualified and experienced team of professionals in the fields of production, research and development, marketing, HR, finance, purchase and administration, Aurobindo Pharma has successfully integrated its operations. All projects have been implemented with no cost or time overruns.All major decisions are made globally after consultation with experienced professionals in their specific areas of activity. Decisions and execution are targeted to derive value addition in everything that the company does.Operations are conducted with utmost financial discipline. The management follows up to ensure that trust in employees is reciprocated with fairness in all dealings.All decisions are taken in the interest of shareholders. The Board and management are aware and conscious of the interests of minority shareholders and do everything to enhance shareholder value in totality.The company is keen to share its gains and has a decent dividend record. The company has also been issuing bonus shares from time to time. Value creation for shareowners is a cornerstone and is consistently managed.Committees of directors are appointed to focus on specific areas. Aurobindo Pharma is undergoing a process of transformation in a professional environment.The Board of Directors meets as often as business demands, and all meetings are well attended.</p>

							</div> 
						</div> 
						<div className="w-100"></div>
 

						<div className="w-100"></div>
						<div className="col-12">
							<div className="head-title top-pdf">
								<ul className="govrce_plcy">
								{gpolicies.map((gpolicie) => {
									  return (
									<li><a href={'http://97.74.81.11:8080' + '/uploads/'+gpolicie.pdf} target="_blank" rel="noopener">{gpolicie.title}<span className="pull-right">Download <i className="fa fa-file-pdf-o"></i></span></a></li>
									);
								})}	
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

Governancepolicies.propTypes = propTypes;
Governancepolicies.defaultProps = defaultProps;
// #endregion
export async function getServerSideProps () {
	const res = await fetch('http://97.74.81.11:8080' + '/api/apiRoutergovernancepolicies')
	const policies = await res.json()
	return { props: {gpolicies: policies }};
  }
export default Governancepolicies;