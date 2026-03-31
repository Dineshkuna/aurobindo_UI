import React, {useState, useEffect} from 'react'; 
const propTypes = {};

import Googlemap from './google-map';

// API key of the google map
const GOOGLE_MAP_API_KEY = 'AIzaSyDL1Xs264nIq1NoVhqtdBThrBa9da3f52k';

// load google map script
const loadGoogleMapScript = (callback) => {
  if (
    typeof window.google === 'object' &&
    typeof window.google.maps === 'object'
  ) {
    callback();
  } else {
    const googleMapScript = document.createElement('script');
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}`;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener('load', callback);
  }
};

const defaultProps = {}; 
const Globaloperationsmap = ({locations}) => {

        const getCountryInitialState = () => {
            return "";
        };
        const getInitialLocationsState = () => {
            return locations;
        };
        const selectedLocationState = () => {
            return locations;
        }

        const [country, setCountry] = useState(getCountryInitialState);
        const [allLocations, setAllLocations] = useState(getInitialLocationsState);
        const [selectedLocations, setSelectedLocations] = useState(selectedLocationState);

        const handleSectionClick = (e) => {
            console.log(e);
            const tempLocations = allLocations.filter(entry => {
                console.log(entry);
                console.log(e.target.innerText);
                return entry.section.toLowerCase() === e.target.innerText.toLowerCase();
            });
            setLoadMap(false);
            setTimeout(() => { setSelectedLocations(tempLocations) }, 500);
        };
	
	    const handleChange = (e) => {
            setCountry(e.target.value);
            const tempLocations = allLocations.filter(entry => {
                return entry.country === e.target.value;
            });
            setLoadMap(false);
            setTimeout(() => { setSelectedLocations(tempLocations) }, 500);
        };

        const [loadMap, setLoadMap] = useState(false);
        useEffect(() => {
            loadGoogleMapScript(() => {
                if (selectedLocations.length > 0) {
                    setLoadMap(true);
                }
            });
        }, [selectedLocations]);
        
        return (
            <> 
            <div className="container">
                <div className="row">
                    <div className="col-12">
                    <div className="card1 mt-3 tab-card">
                    <div className="tab-content" id="myTabContent">
                        {!loadMap ? selectedLocations.length === 0 ? <h3>No locations present...</h3>  : <div>Loading...</div> : <Googlemap locations={selectedLocations} />}
                        </div>
                        <div className="card-header tab-card-header">
                            <div className="row">
                            <div className="col-md-8">
                        <ul className="nav" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link" onClick={handleSectionClick} id="one-tab" data-toggle="tab" href="#one" role="tab" aria-controls="One" aria-selected="true"><img src="/img/blue-map.png" alt=""></img>Internationals Subsidiaries</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={handleSectionClick} id="two-tab" data-toggle="tab" href="#two" role="tab" aria-controls="Two" aria-selected="false"><img src="/img/green-map.png" alt=""></img>Representive Offices</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={handleSectionClick}i id="three-tab" data-toggle="tab" href="#three" role="tab" aria-controls="Three" aria-selected="false"><img src="/img/hq-map.png" alt=""></img>Global Head Quarters</a>
                            </li>
                        </ul>
                        </div>
                        <div className="col-md-4 form-group"> 
                        <div id="listing" className="locationicons">
                                <select value={country} onChange={handleChange} name="countries" id="countries" className="sm-form-control" onchange="search2()">
                <option value="">Select Countries</option>
                <option value="Brazil"> Brazil</option>
                <option value="Canada"> Canada</option>
                <option value="China"> China</option>
                <option value="Colombia"> Colombia</option>
                <option value="Czech Republic"> Czech Republic</option>
                <option value="Ethiopia"> Ethiopia</option>
                <option value="France"> France</option>
                <option value="Germany"> Germany</option>
                <option value="Hong Kong"> Hong Kong</option>
                <option value="India"> India</option>
                <option value="Ireland"> Ireland</option>
                <option value="Italy"> Italy</option>
                <option value="Japan"> Japan</option>
                <option value="Kenya"> Kenya</option>
                <option value="Malta"> Malta</option>
                <option value="Mexico"> Mexico</option>
                <option value="Netherlands"> Netherlands</option>
                <option value="Nigeria"> Nigeria</option>
                <option value="Poland"> Poland</option>
                <option value="Portugal"> Portugal</option>
                <option value="Romania"> Romania</option>
                <option value="Russia"> Russia</option>
                <option value="South Africa"> South Africa</option>
                <option value="Spain"> Spain</option>
                <option value="Tanzania"> Tanzania</option>
                <option value="Thailand"> Thailand</option>
                <option value="Ukraine"> Ukraine</option>
                <option value="United Kingdom"> United Kingdom</option>
                <option value="USA"> USA</option>
                <option value="Vietnam"> Vietnam</option>
            </select>
                        </div> 
                        </div>
                        </div>
                        </div> 
                    </div>
                    </div>
                </div>
                </div>


            </>
        );
}

Globaloperationsmap.propTypes = propTypes;
Globaloperationsmap.defaultProps = defaultProps;
// #endregion
export async function getServerSideProps () {
	const res = await fetch('http://97.74.81.11:8080' + '/api/apiRoutersinternationalsusidiaries')
	const locations = await res.json()
	return { props: {locations} }
};
export default Globaloperationsmap;