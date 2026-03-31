import React from 'react';

import PropTypes from 'prop-types';


const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const Notfound = () => {
    return <>
    <section id="content">
			<div className="content-wrap">
				<div className="container clearfix">

					<div className="row align-items-center col-mb-80" style={{"background": "#f7f7f7","padding": "30px 20px 30px;"}}>
						<div className="col-lg-12 text-center">
							<img src="/img/404.png" alt=""/> 
						</div>

						<div className="col-lg-12">
							<div className="heading-block text-lg-start border-bottom-0">
								<p style={{"font-size": "20px;"}} className="text-center">Sorry!! The page you are looking for does not exist.</p> 
							</div> 
							<form method="get" action="" className="search-form venkat" novalidate="novalidate"> <div className="input-group"> <input type="text" name="s" className="form-control valid" placeholder="Search" aria-invalid="false"/> <span className="input-group-btn"> <button style={{"background-color":"#345395", "color": "#fff;"}} className="btn" type="submit">Go</button> </span> </div></form>  
						</div>

					</div>

				</div>
			</div>
		</section>
    </>;
}
Notfound.propTypes = propTypes;
Notfound.defaultProps = defaultProps;
// #endregion

export default Notfound;