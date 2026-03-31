import React from 'react'

function search() {
  return (
    <>
      <section id="content">
	<div className="content-wrap">

    <div className="container stretched search-overlay">
    <h4>New Search</h4> 
    <p>If you didn't find what you were looking for, try another search</p>
	<form role="search" method="get" id="searchform" className="revtp-searchform" action="">
	<input type="text" value="" name="q" id="q" placeholder="Search here..."/>
	<input type="submit" id="searchsubmit" value="Go"/>
</form>
	 </div>


		<div className="container clearfix">
			<div className="row gutter-40 col-mb-80">
				<div className="postcontent col-lg-12">
					<h3>About Us</h3>
					  <div>
                          <a href="http://3.232.144.124:8090/about-us">About Us <i className="icon-line-chevron-right"></i></a>
                      </div>                    
                    <div className="divider divider-border divider-right"></div>

					<h3>Code Of Conduct</h3>
                    <div>
                          <a href="http://3.232.144.124:8090/investors/corporate-governance/code-of-conduct">Code Of Conduct <i className="icon-line-chevron-right"></i></a>
                      </div>                    
                    <div className="divider divider-border divider-right"></div>

                    <h3>Corporate Governance</h3>
					<div>
                          <a href="http://3.232.144.124:8090/about-us/corporate-governance">Corporate Governance<i className="icon-line-chevron-right"></i></a>
                      </div>                      
                    <div className="divider divider-border divider-right"></div>

                    <h3>API</h3>
					<div>
                          <a href="http://3.232.144.124:8090/about-us/business-units/api">API<i className="icon-line-chevron-right"></i></a>
                      </div>                    
                    <div className="divider divider-border divider-right"></div>

                    <h3>Privacy Policy</h3> 
					<div>
                          <a href="http://3.232.144.124:8090/privacy-policy">Privacy Policy <i className="icon-line-chevron-right"></i></a>
                      </div>  
                    <div className="divider divider-border divider-right"></div>

                    <h3>Contact Us</h3>
                      <div>
                          <a href="http://3.232.144.124:8090/contact-us">Contact Us <i className="icon-line-chevron-right"></i></a>
                      </div>  <br/>
					  <a href="http://3.232.144.124:8090/contact-us/group-division-offices"><h4>Group / Division Offices →</h4></a>
                   

                      <a href="http://3.232.144.124:8090/contact-us/general-inquiries"><h4>General Inquiries →</h4></a>
                     
                     
                      <a href="http://3.232.144.124:8090/contact-us/adverse-event-reporting"> <h4>Adverse Event Reporting  →</h4></a>
                      
                   <div className="divider divider-center"><a href="#" data-scrollto="#header"><i className="icon-chevron-up"></i></a></div>
				</div>
				 
			</div>
		</div>
	</div>
</section>
    </>
  )
}

export default search