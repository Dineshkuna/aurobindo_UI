import React from 'react'; 
import PropTypes from 'prop-types'; 
const propTypes = {};

const defaultProps = {};
 
const Boardofdirectors = ( { bddata }) => {

	bddata = bddata.map(entry => {
		let name = entry.name;
		name = name.toLowerCase();
		name = name.split('.').join('');
		name = name.split(' ').join('-');
		entry.alias = name;
		return entry;
	});
    return (
        <>
           <section id="content">
			<div className="content-wrap">
				<div className="container">

					<div className="row col-mb-50">
						<div className="col-12">
							<div className="head-title">
								<h2>Board of Directors</h2> 
							</div>
							<div className="row col-mb-50 mb-0">
                                    
									
									
									
								
									 
									
							{bddata.map((bdidata) => {
        return (	
									
								 
									<div className="col-lg-3 col-md-6">
										<div className="team board-team">
											<a href={'http://3.232.144.124:8090' + '/team/member?member=' + bdidata.alias} style={{"cursor": "pointer"}}>
											<div className="team-image">
												<img src={'http://97.74.81.11:8080' + '/uploads/boardofdirectors/'+bdidata.image} alt={bdidata.name}/>
											</div>
											<div className="team-desc">
												<a href={'http://3.232.144.124:8090' + '/team/member?member=' + bdidata.alias} style={{"cursor": "pointer"}}>
													<div className="team-title">
														<h4>{bdidata.name}</h4>
														<span>{bdidata.designation}</span>
													</div> 
												</a>
											</div>
											</a>
										</div> 
									</div> 
);
})}
					      </div>   
						</div>  
					</div> 
				</div>
			</div>
		</section>
        </>
    );
}

Boardofdirectors.propTypes = propTypes;
Boardofdirectors.defaultProps = defaultProps;
// #endregion
export async function getServerSideProps () {
	const res = await fetch('http://97.74.81.11:8080' + '/api/apiRouterboard')
	const bdirectors = await res.json()
	return { props: {bddata: bdirectors }}
  }
export default Boardofdirectors;