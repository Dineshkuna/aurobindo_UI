import React, {useState, useEffect} from 'react'; 
import PropTypes from 'prop-types';
 
const propTypes = {};

const defaultProps = {};
 
const Adverseeventreporting = ({locations}) => {

	const getCountryInitialState = () => {
		return "";
	};
	const getInitialLocationsState = () => {
		return locations;
	};
	const selectedLocationState = () => {
		return [];
	};
	

	const [country, setCountry] = useState(getCountryInitialState);
	const [allLocations, setAllLocations] = useState(getInitialLocationsState);
	const [selectedLocations, setSelectedLocations] = useState(selectedLocationState);

	const handleChange = (e) => {
		setCountry(e.target.value);
		const tempLocations = allLocations.filter(entry => {
			return entry.country === e.target.value;
		});
		setSelectedLocations(tempLocations)
	};


    return (
        <>
         <section id="content">
			<div className="content-wrap">
				<div className="container">

					<div className="row col-mb-50">
						<div className="col-12">
							<div className="head-title">
								<h2>Adverse Event Reporting</h2>
								<p>The safety of our products and health and well-being of our patients are our highest priority. If you would like to report an adverse eventinvolving a Aurobindo medicine, please contact our global pharmacovigilance team.</p>

								<form className="mb-0" id="" name="" action="" method="post" novalidate="novalidate">
								<div className="row"> 

										<div className="col-md-9 form-group"> 
											<select value={country} onChange={handleChange} id="template-contactform-service" name="template-contactform-service" className="sm-form-control valid">
											<option value="">Select Country</option> 
												<option value="Brazil">Brazil</option>
												<option value="Canada">Canada</option>
												<option value="China">China</option>
												<option value="Colombia">Colombia</option>
												<option value="Czech Republic">Czech Republic</option>
												<option value="Ethiopia">Ethiopia</option>
												<option value="France">France</option>
												<option value="Germany">Germany</option>
												<option value="Hong Kong">Hong Kong</option>
												<option value="India">India</option>
												<option value="Ireland">Ireland</option>
												<option value="Italy">Italy</option>
												<option value="Japan">Japan</option>
												<option value="Kenya">Kenya</option>
												<option value="Malta">Malta</option>
												<option value="Mexico">Mexico</option>
												<option value="Netherlands">Netherlands</option>
												<option value="Nigeria">Nigeria</option>
												<option value="Poland">Poland</option>
												<option value="Portugal">Portugal</option>
												<option value="Romania">Romania</option>
												<option value="Russia">Russia</option>
												<option value="South Africa">South Africa</option>
												<option value="Spain">Spain</option>
												<option value="Tanzania">Tanzania</option>
												<option value="Thailand">Thailand</option>
												<option value="USA">USA</option>
												<option value="Ukraine">Ukraine</option>
												<option value="United Kingdom">United Kingdom</option>
												<option value="Vietnam">Vietnam</option>

												</select>
											</div>  
									</div> 
								</form>
							</div> 
						</div>  
					</div> 

					{
						selectedLocations.length > 0 ?
							selectedLocations.map(location => {
								return (<>
										<h4 className="row">
												<b>{location.title}</b>
											</h4>
										<div className="row">
											<div className="col-md-6" dangerouslySetInnerHTML={{__html: location.contact_address}}></div>
										</div> <hr></hr></>);
							})
						: country != "" ? <><h4>No location present in {country}!!</h4></> : ""
					}
					

				</div>
			</div>
		</section>
        </>
    );
}


Adverseeventreporting.propTypes = propTypes;
Adverseeventreporting.defaultProps = defaultProps;
// #endregion
export async function getServerSideProps () {
	const res = await fetch('http://97.74.81.11:8080' + '/api/apiRoutersinternationalsusidiaries')
	const locations = await res.json()
	return { props: {locations} }
};

export default Adverseeventreporting;