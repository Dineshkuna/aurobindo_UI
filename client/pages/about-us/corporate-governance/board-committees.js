import React from 'react'; 
import PropTypes from 'prop-types';
 
const propTypes = {};
const defaultProps = {};
 
const Boardcommittees = () => {
    return (
        <>
        <section id="content">
			<div class="content-wrap">
				<div class="container">

					<div class="row col-mb-50">
						<div class="col-12">
							<div class="head-title">
								<h2>Board Committees</h2>
								</div> 
								 <div class="col-sm-12">
                                   <div class="accordion accordion-bg">
										<div class="accordion-header accordion-active">
											<div class="accordion-icon">
												<i class="accordion-closed icon-plus"></i>
												<i class="accordion-open icon-minus"></i>
											</div>
											<div class="accordion-title">
												Audit Committee
											</div>
										</div>
										<div class="accordion-content" style={{"display":"none;"}}>
											<div class="table-responsive">
												<table class="table table-bordered">
													<tbody>
														<tr class="success">
															<td>S.No.</td>
															<td>Name of Member</td>
															<td>Nature of membership</td>
														</tr>
														<tr>
															<td>1</td>
															<td>Mr. Girish Paman Vanvari</td>
															<td>Chairperson</td>
														</tr>
														<tr>
															<td>2</td>
															<td>Mr. K. Ragunathan</td>
															<td>Member</td>
														</tr>
														<tr>
															<td>3</td>
															<td>Mrs. Savita Mahajan</td>
															<td>Member</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>

										<div class="accordion-header">
											<div class="accordion-icon">
												<i class="accordion-closed icon-plus"></i>
												<i class="accordion-open icon-minus"></i>
											</div>
											<div class="accordion-title">
												Nomination & Remuneration /Compensation Committee
											</div>
										</div>
										<div class="accordion-content" style={{"display":"none;"}}>
											<div class="table-responsive">
												<table class="table table-bordered">
													<tbody>
														<tr class="success">
															<td>S.No.</td>
															<td>Name of Member</td>
															<td>Nature of membership</td>
														</tr>
														<tr>
															<td>1</td>
															<td>Dr. (Mrs.) Avnit Bimal Singh</td>
															<td>Chairperson</td>
														</tr>
														<tr>
															<td>2</td>
															<td>Mr. K. Ragunathan</td>
															<td>Member</td>
														</tr>
														<tr>
															<td>3</td>
															<td>Mr. Girish Paman Vanvari</td>
															<td>Member</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>

										<div class="accordion-header">
											<div class="accordion-icon">
												<i class="accordion-closed icon-plus"></i>
												<i class="accordion-open icon-minus"></i>
											</div>
											<div class="accordion-title">
											   Stakeholders Relationship Committee
											</div>
										</div>
										<div class="accordion-content" style={{"display": "block;"}}>
											<div class="table-responsive">
											<table class="table table-bordered">
												<tbody>
													<tr class="success">
														<td>S.No.</td>
														<td>Name of Member</td>
														<td>Nature of membership</td>
													</tr>
													<tr>
														<td>1</td>
														<td>Dr. (Mrs.) Avnit Bimal Singh</td>
														<td>Chairperson</td>
													</tr>
													<tr>
														<td>2</td>
														<td>Mr. K. Nithyananda Reddy</td>
														<td>Member</td>
													</tr>
													<tr>
														<td>3</td>
														<td>Mr.K.Ragunathan</td>
														<td>Member</td>
													</tr>
													<tr>
														<td>4</td>
														<td>Mrs.Savita Mahajan</td>
														<td>Member</td>
													</tr>
													<tr>
														<td>5</td>
														<td>Mr. Girish Paman Vanvari</td>
														<td>Member</td>
													</tr>
												</tbody>
											</table>
										</div>
										</div>

										<div class="accordion-header">
											<div class="accordion-icon">
												<i class="accordion-closed icon-plus"></i>
												<i class="accordion-open icon-minus"></i>
											</div>
											<div class="accordion-title">
												Corporate Social Responsibility Committee
											</div>
										</div>
										<div class="accordion-content" style={{"display":"none;"}}>
											<div class="table-responsive">
												<table class="table table-bordered">
													<tbody>
														<tr class="success">
															<td>S.No.</td>
															<td>Name of Member</td>
															<td>Nature of membership</td>
														</tr>
														<tr>
															<td>1</td>
															<td>Mr. K. Nithyananda Reddy</td>
															<td>Chairperson</td>
														</tr>
														<tr>
															<td>2</td>
															<td>Mr. K. Ragunathan</td>
															<td>Member</td>
														</tr>
														<tr>
															<td>3</td>
															<td>Dr. M. Sivakumaran</td>
															<td>Member</td>
														</tr>
														<tr>
															<td>4</td>
															<td>Mr. P. Sarath Chandra Reddy</td>
															<td>Member</td>
														</tr>
														<tr>
															<td>5</td>
															<td>Mrs. Savita Mahajan</td>
															<td>Member</td>
														</tr>
														<tr>
															<td>6</td>
															<td>Mrs.Avnit Bimal Singh</td>
															<td>Member</td>
														</tr>
														<tr>
															<td>7</td>
															<td>Mr. Girish Paman Vanvari</td>
															<td>Member</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>

										<div class="accordion-header">
											<div class="accordion-icon">
												<i class="accordion-closed icon-plus"></i>
												<i class="accordion-open icon-minus"></i>
											</div>
											<div class="accordion-title">
												Risk Management Committee
											</div>
										</div>
										<div class="accordion-content" style={{"display": "none;"}}>
											<div class="table-responsive">
												<table class="table table-bordered">
													<tbody>
														<tr class="success">
															<td>S.No.</td>
															<td>Name of Member</td>
															<td>Nature of membership</td>
														</tr>
														<tr>
															<td>1</td>
															<td>Mr. Girish Paman Vanvari</td>
															<td>Chairperson</td>
														</tr>
													    {/* <tr>
															<td>2</td>
															<td>Mr. N. Govindarajan</td>
															<td>Member</td>
														</tr>  */}
														<tr>
															<td>2</td>
															<td>Mr. P. Sarath Chandra Reddy</td>
															<td>Member</td>
														</tr>
														<tr>
															<td>3</td>
															<td>Mr.K.Ragunathan</td>
															<td>Member</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>  

									</div>
						        </div>
 	 	 	  
							
						</div>  
					</div> 
				</div>
			</div>
		</section>
        </>
    );
}

Boardcommittees.propTypes = propTypes;
Boardcommittees.defaultProps = defaultProps;
// #endregion

export default Boardcommittees;