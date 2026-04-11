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

					{productsData?.error && (
						<div style={{padding: '15px', background: '#ffe0e0', color: '#d23c3c', borderRadius: '4px', marginBottom: '20px'}}>
							<strong>Error loading products:</strong> {productsData.error}
						</div>
					)}

      <div className="table-responsive">
        <table className="table table-bordered">
            <thead>
            <tr >  
                <th>Product Name</th>
                <th>Item Code</th>
                <th>Strength</th>
                <th>Dosage Form</th>
                <th>Market</th>
                <th>GTIN</th>
                <th>Pack Insert (SmPC+PIL)</th> 
            </tr>
            </thead>
            <tbody >
                {productsData?.data && productsData.data.length > 0 ? (
                    productsData.data.map(product => {
                        return (
                        <tr key={product._id}>
                            <td>{product.productName}</td>
                            <td>{product.itemCode}</td>
                            <td>{product.strength}</td>
                            <td>{product.dosageForm}</td>
                            <td>{product.market}</td>
                            <td>{product.gtin}</td>
                            <td>
                              {product.packInsertUrl ? (
                                <a href={product.packInsertUrl} target="_blank" style={{color: '#017eb6', 'text-align': 'center'}}>View/Download</a>
                              ) : (
                                <span>N/A</span>
                              )}
                            </td>
                        </tr>)
                    })
                ) : (
                    <tr>
                        <td colSpan="7" style={{textAlign: 'center', padding: '20px'}}>
                            No products available
                        </td>
                    </tr>
                )}
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
	try {
		console.log('Fetching products from admin-server...');

		const response1 = await fetch(`http://localhost:8081/api/products/public/all`, {
			headers: {
				'Content-Type': 'application/json'
			}
		});

		console.log('Response status:', response1.status);

		if (!response1.ok) {
			throw new Error(`Failed to fetch: ${response1.status} ${response1.statusText}`);
		}

		const productsData = await response1.json();
		console.log('Fetched products:', productsData);

		// Transform admin product data to match client format
		const transformedData = {
			success: true,
			data: productsData.data || []
		}

		return {
			props: { productsData: transformedData }
		};
	} catch (error) {
		console.error('Error fetching products:', error.message);

		// Fallback to empty data if fetch fails
		return {
			props: {
				productsData: { success: false, data: [], error: error.message }
			}
		};
	}
  }


export default productlist
