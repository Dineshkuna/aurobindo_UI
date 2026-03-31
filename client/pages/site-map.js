import React from 'react'; 
import PropTypes from 'prop-types';
import Head from 'next/head'; 

const propTypes = {};

const defaultProps = {}; 
const sitemap = () => {
    return (
        <>
		 <Head>
						  <title>Aurobindo Pharma Products | Complete Product Catalogue</title>
						  <meta name="description" content="Explore Aurobindo Pharma’s full range of pharmaceutical products across therapeutic segments. Find detailed product info, formulations, and global availability." /> 
						  <meta name="robots" content="index, follow" />
						  <link rel="canonical" href="https://products.aurobindo.com/site-map" /> 
						</Head>
         <section id="content">
			<div className="content-wrap">
				<div className="container clearfix">
					<div className="row align-sitemaps-center">
						<div className="col-lg-6 sitemap-sec">
							<h1>Products</h1>
							<div className="sitemap">
								<ul>
									<li><a href="/product-list">Product List</a>
									</li> 
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

sitemap.propTypes = propTypes;
sitemap.defaultProps = defaultProps;
// #endregion

export default sitemap;