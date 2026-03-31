import React from 'react'
import Head from 'next/head'

function productlist({productsData}) {
  return (
    <>
     <Head>
            <title>Product List | Aurobindo Pharma APIs, Formulations & Portfolio</title>
            <meta name="description" content="Browse the complete list of Aurobindo Pharma products including APIs, formulations, and therapeutic solutions available across global markets." />
            <meta name="keywords" content="Aurobindo Pharma product list, pharmaceutical APIs, drug formulations, therapeutic portfolio, Aurobindo Pharma catalog, healthcare solutions" />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href="https://products.aurobindo.com/product-list" />
          </Head>
          
    	<section id="page-title" className="page-title-parallax page-title-dark" style={{"background-image":"url(/img/banners/aboutbanner.png);"}}>
			<div className="container clearfix">
				{/* <h1 className="pdb-60">AUROBINDO IMPACTING LIVES AND <br/> LIVELIHOODS</h1>   */}
				<ol className="breadcrumb">
					<li className="breadcrumb-item"><a href="#">Home</a></li> 
					<li className="breadcrumb-item active" aria-current="page">Products</li>
				</ol>  
			</div> 
		</section>
     <section id="content">
			<div className="content-wrap">
				<div className="container">
					<div className="head-title mrb-40">
								<h1>Pharmaceutical Products</h1>
								<p>{/* This general product information is intended only for residents of Canada and are available by prescription only. Consult your healthcare practitioner for any questions you may have.<br/> */}
                                <span className="spancolor">Please click the product title for more information.</span>
								</p>
								</div>
      <div className="table-responsive">
        <table className="table table-bordered">
            <thead>
            <tr>  
                <th>Product Name</th>
                <th>Item Code</th>
                <th>Strength</th>
                <th>Dosage Form</th>
                <th>Market</th>
                <th>GTIN</th>
                <th>Pack Insert (SmPC+PIL)</th> 
            </tr>
            </thead>
            <tbody>
                {
                    productsData.result.map(product => {
                        return (<tr> 
                            <td>{product.product_name}</td>
                            <td>{product.version}</td>
                            <td>{product.strength}</td>
                            <td>{product.dosage}</td>
                            <td>{product.market}</td>
                            <td>{product.gtin}</td>
                            <td><a href={"https://products.aurobindo.com/api/uploads/" + product.file_name} target="_blank" style={{color: '#017eb6', 'text-align': 'center'}}>View/Download</a></td> 
            
                        </tr>)
                    })
                }
            
            </tbody>
        </table>
     </div>
     </div>
     </div>
     </section>

     <style jsx>{` 
        .breadcrumb { 
          top: 45%! important; 
      }
      `}</style>

    </>
  )
}

export async function getServerSideProps () {
	const response1 = await fetch('http://3.232.144.124:8090' + '/api_read/products/active/list')
	const productsData = await response1.json()
	return { props: {productsData }};
  }
export default productlist
