import React from 'react'; 
import PropTypes from 'prop-types';
import Link from 'next/link'

const propTypes = {};
const defaultProps = {};

const NavBar = () => {
    return (
      <div>
         <header id="header" className="full-header">
			<div id="header-wrap">
				<div className="container">
					<div className="header-row">

					    <div id="logo">
							<a href="/" className="standard-logo" data-dark-logo="/img/aurobindo-logo.png">
								<img src="/img/aurobindo-logo.png" alt="Aurobindo Logo"/></a> 
						</div> 
						<div id="primary-menu-trigger">
							<svg className="svg-trigger" viewBox="0 0 100 100"><path d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"></path><path d="m 30,50 h 40"></path><path d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"></path></svg>
						</div>

						<nav className="primary-menu">
                           <ul className="menu-container">
							
							<li className="menu-item">
								<a className="menu-link" href="/product-list"><div>Products</div></a> 
							</li>
						 
						</ul>

						</nav>

					 

					</div>
				</div>
			</div>
			<div className="header-wrap-clone"></div>
		</header>
      </div>
    );
}

NavBar.propTypes = propTypes;
NavBar.defaultProps = defaultProps;


export default NavBar;