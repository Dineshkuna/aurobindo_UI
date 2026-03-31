import { useCookies } from 'react-cookie';

import PropTypes from 'prop-types';
const propTypes = {};
const defaultProps = {};

const Footer = () => {

	const [cookies, setCookie, removeCookie] = useCookies(['cookie-consent']);
	const acceptCookie = (e) => {
		setCookie("cookie-consent", true);
	};

	return (
		<>
			<footer id="footer" className="dark">
				<div id="copyrights">
					<div className="container">

						<div className="row">

							<div className="col-lg-5">
								<div className="copyright-area-content">
									<p>© Copyright 2022 Aurobindo Pharma. All Rights Reserved.
					  </p>
								</div>
							</div>
							<div className="col-lg-3">
								<div className="d-flex justify-content-center">
									 

									<a href="https://x.com/aurobindoglobal" className="social-icon si-small si-twitter" target="_blank">
										<i className="icon-twitter"></i>
									</a>

									<a href="https://www.linkedin.com/company/aurobindopharma/" className="social-icon si-small si-gplus" target="_blank">
										<i className="icon-linkedin2"></i>
									</a>

									 
								</div>
							</div>
							<div className="col-lg-4">
								<div className="copyright-area-content">
									<p className="text-right">
										<a href="/privacy-policy">Privacy Policy</a>
										<span className="copyline">|</span>
										<a href="/site-map">Site Map</a></p>
								</div>
							</div>
						</div>

					</div>
				</div>
			</footer>
			

			<div id="gotoTop" className="icon-angle-up"></div>

			<div className="modal fade bs-example-modal-fs" tabIndex="-1" role="dialog" aria-labelledby="fsModalLabel" aria-hidden="true">
				<div className="modal-dialog modal-fullscreen">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="popup-close btn-sm" data-bs-dismiss="modal" aria-hidden="true"> <img src="/img/close.png" alt='Aurobindo close'/></button>
						</div>
						<div className="modal-body">
							<div className="search-overlay-form">
								<form action="/search" method="GET">
									<input type="text" className="input-search" id="searchText" name="searchText" placeholder="Enter text to search" />
									<button type="submit">
										<i className="icon-line-search"></i>
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			{
				(cookies.length === 0 || cookies['cookie-consent'] == undefined || cookies['cookie-consent'] != "true") ? (<div id="cookie-notice" className="text-center">
					<div className="cookie-notice-container" style={{ "color": "#fff" }}>
						<span id="cn-notice-text" className="cn-text-container">This site uses cookies. By continuing to browse the site you are agreeing to our use of cookies. </span>
						<span id="cn-notice-buttons" className="cn-buttons-container">
							<a href="#" onClick={acceptCookie} id="cn-accept-cookie" data-cookie-set="accept" className="cn-set-cookie cn-button bootstrap button" aria-label="I Accept">I Accept</a>
							<a href="http://3.232.144.124:8090/privacy-policy/#cookies" target="_blank" id="cn-more-info" className="cn-more-info cn-button bootstrap button" aria-label="Cookie policy">Cookie policy</a>
						</span>
						<a onClick={acceptCookie} id="cn-close-notice" data-cookie-set="accept" className="cn-close-icon button" aria-label="I Accept"></a>
					</div>
				</div>) : ""
			}
		</>


	);
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;


export default Footer;