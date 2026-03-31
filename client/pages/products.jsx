import React from 'react'

function products({productsData, productsData2}) {
  return (
    <>
     <section id="content">
			<div className="content-wrap">
				<div className="container">
					<div className="head-title mrb-40">
								<h2>Products</h2>
								<p>{/* This general product information is intended only for residents of Canada and are available by prescription only. Consult your healthcare practitioner for any questions you may have.<br/> */}
                                <span className="spancolor">Please click the product title for more information.</span>
								</p>
								</div>
					<div className="table-responsive">
					<table className="fold-table"> 
					{
						productsData.map(product => {
							return (
							<tbody> 
							  <tr className="view title-bold">
								<td style={{color: '#017eb6', 'text-align': 'center'}}> {product.product_name} <br/><span className="font-12" style={{color: 'black'}}>{product.product_description}</span></td>
								<td className="width-90" style={{color: '#017eb6', 'text-align': 'center'}}>Strength</td>
								<td className="width-90" style={{color: '#017eb6', 'text-align': 'center'}}>Dosage Form</td>
								<td className="width-90" style={{color: '#017eb6', 'text-align': 'center'}}>GTIN</td>
								<td className="width-90" style={{color: '#017eb6', 'text-align': 'center'}}>Pack Insert (SmPC+PIL)</td>
							  </tr> 
							   <tr className="fold">
								<td colspan="7">
								  <div className="fold-content">
									<table className="fold-table"> 
									  <tbody>
										  {
											  product.variants.map(variant => {
												return (
													<tr className="view">
													<td></td>
													<td className="width-90" style={{'text-align': 'center'}}>{variant.strength}</td>
													<td className="width-90" style={{'text-align': 'center'}}>{variant.format}</td>
													<td className="width-90" style={{'text-align': 'center'}}>{variant.gtin}</td>
													<td className="width-90" style={{'text-align': 'center'}}><a href={"http://3.232.144.124:8090" + variant.product_file} target="_blank" style={{color: '#017eb6', 'text-align': 'center'}}>View / Download</a></td>
											  	</tr> );
											  })
										  }   
									  </tbody>
									</table>
								  </div>
								</td>
							  </tr>
							</tbody>
							)
						})
					}
					</table>
					</div>
	                
				</div>

				<div className="container">
					<div className="head-title mrt-40">
								<h2>New Releases</h2>
								<p>{/* This general product information is intended only for residents of Canada and are available by prescription only. Consult your healthcare practitioner for any questions you may have.<br/> */}
                                <span className="spancolor">Please click the product title for more information.</span>
								</p>
								</div>
								<div className="table-responsive">
									<table className="fold-table">
								{
									
						productsData2.map(product => {
							return ( 
							<tbody> 
							  <tr className="view title-bold">
								<td style={{color: '#017eb6', 'text-align': 'center'}}> {product.product_name} <br/><span className="font-12" style={{color: 'black'}}>{product.product_description}</span></td>
								<td className="width-90" style={{color: '#017eb6', 'text-align': 'center'}}>Strength</td>
								<td className="width-90" style={{color: '#017eb6', 'text-align': 'center'}}>Format</td>
								<td className="width-90" style={{color: '#017eb6', 'text-align': 'center'}}>GTIN</td>
								<td className="width-90" style={{color: '#017eb6', 'text-align': 'center'}}>Pack Insert (SmPC+PIL)</td>
							  </tr> 
							   <tr className="fold">
								<td colspan="7">
								  <div className="fold-content">
									<table className="fold-table"> 
									  <tbody>
										  {
											  product.variants.map(variant => {
												return (
													<tr className="view">
													<td></td>
													<td className="width-90" style={{'text-align': 'center'}}>{variant.strength}</td>
													<td className="width-90" style={{'text-align': 'center'}}>{variant.format}</td>
													<td className="width-90" style={{'text-align': 'center'}}>{variant.gtin}</td>
													<td className="width-90" style={{'text-align': 'center'}}><a href={"http://3.232.144.124:8090" + variant.product_file} target="_blank" style={{color: '#017eb6'}}>View / Download</a></td>
											  	</tr> );
											  })
										  }   
									  </tbody>
									</table>
								  </div>
								</td>
							  </tr>
							</tbody>
						  )
						})
					}
					</table>
					</div>
 
 
				</div>
			</div>
		</section>
    </>
  )
}

products.propTypes = {};
products.defaultProps = {};

// #endregion

export async function getServerSideProps () {
	const response1 = await fetch('http://3.232.144.124:8090' + '/api/products/get')
	const response2 = await fetch('http://3.232.144.124:8090' + '/api/products/new-releases/get')
	const productsData = await response1.json()
	const productsData2 = await response2.json()
	return { props: {productsData, productsData2 }};
  }

export default products