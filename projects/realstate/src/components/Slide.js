import React, { Component } from 'react';
import "../common/css/bootstrap.css";
import "../common/css/jquery.fancybox.css";
import "../common/css/style.css";
import logo from "../common/images/logo.png";
const images = require.context('../common/images', true);

class Slide extends Component {
	render() {
		return (
			<div className="slider">
				<div className="callbacks_container">
					<ul className="rslides" id="slider">
						<li><img src="images/banner.jpg" className="img-responsive" alt="" />
							<div className="banner_desc">
								<div className="container">
									<h1>Est notare quam littera gothica, quam nunc.</h1>
									<h2>At wisi enim ad minim veniam, quis nostrud.</h2>
								</div>
								<div className="details">
									<div className="container">
										<div className="col-xs-10 dropdown-buttons">
											<div className="col-xs-4 dropdown-button">
												<div className="section_room">
													<select id="country" onchange="change_country(this.value)" className="frm-field required">
														<option value="null">All Locations</option>
														<option value="null">Business</option>
														<option value="AX">First Class</option>
														<option value="AX">Premium Economy</option>
													</select>
												</div>
											</div>
											<div className="col-xs-4 dropdown-button">
												<div className="section_room">
													<select id="country" onchange="change_country(this.value)" className="frm-field required">
														<option value="null">All Property types</option>
														<option value="null">House</option>
														<option value="AX">Apartment</option>
														<option value="AX">Premium Economy</option>
													</select>
												</div>
											</div>
											<div className="col-xs-4 dropdown-button">
												<div className="section_room">
													<select id="country" onchange="change_country(this.value)" className="frm-field required">
														<option value="null">All contracts</option>
														<option value="null">Sale</option>
														<option value="AX">Rent</option>
														<option value="AX">Sold</option>
													</select>
												</div>
											</div>
										</div>
										<div className="col-xs-2 submit_button">
											<form>
												<input type="submit" value="Search" />
											</form>
										</div>
										<div className="clearfix"> </div>
									</div>
								</div>
							</div>
						</li>
						<li><img src="images/banner1.jpg" className="img-responsive" alt="" />
							<div className="banner_desc">
								<div className="container">
									<h1>Est notare quam littera gothica, quam nunc.</h1>
									<h2>At wisi enim ad minim veniam, quis nostrud.</h2>
								</div>
								<div className="details">
									<div className="container">
										<div className="col-xs-10 dropdown-buttons">
											<div className="col-xs-4 dropdown-button">
												<div className="section_room">
													<select id="country" onchange="change_country(this.value)" className="frm-field required">
														<option value="null">All Locations</option>
														<option value="null">Business</option>
														<option value="AX">First Class</option>
														<option value="AX">Premium Economy</option>
													</select>
												</div>
											</div>
											<div className="col-xs-4 dropdown-button">
												<div className="section_room">
													<select id="country" onchange="change_country(this.value)" className="frm-field required">
														<option value="null">All Property types</option>
														<option value="null">House</option>
														<option value="AX">Apartment</option>
														<option value="AX">Premium Economy</option>
													</select>
												</div>
											</div>
											<div className="col-xs-4 dropdown-button">
												<div className="section_room">
													<select id="country" onchange="change_country(this.value)" className="frm-field required">
														<option value="null">All contracts</option>
														<option value="null">Sale</option>
														<option value="AX">Rent</option>
														<option value="AX">Sold</option>
													</select>
												</div>
											</div>
										</div>
										<div className="col-xs-2 submit_button">
											<form>
												<input type="submit" value="Search" />
											</form>
										</div>
										<div className="clearfix"> </div>
									</div>
								</div>
							</div>
						</li>
						<li><img src="images/banner2.jpg" className="img-responsive" alt="" />
							<div className="banner_desc">
								<div className="container">
									<h1>Est notare quam littera gothica, quam nunc.</h1>
									<h2>At wisi enim ad minim veniam, quis nostrud.</h2>
								</div>
								<div className="details">
									<div className="container">
										<div className="col-xs-10 dropdown-buttons">
											<div className="col-xs-4 dropdown-button">
												<div className="section_room">
													<select id="country" onchange="change_country(this.value)" className="frm-field required">
														<option value="null">All Locations</option>
														<option value="null">Business</option>
														<option value="AX">First Class</option>
														<option value="AX">Premium Economy</option>
													</select>
												</div>
											</div>
											<div className="col-xs-4 dropdown-button">
												<div className="section_room">
													<select id="country" onchange="change_country(this.value)" className="frm-field required">
														<option value="null">All Property types</option>
														<option value="null">House</option>
														<option value="AX">Apartment</option>
														<option value="AX">Premium Economy</option>
													</select>
												</div>
											</div>
											<div className="col-xs-4 dropdown-button">
												<div className="section_room">
													<select id="country" onchange="change_country(this.value)" className="frm-field required">
														<option value="null">All contracts</option>
														<option value="null">Sale</option>
														<option value="AX">Rent</option>
														<option value="AX">Sold</option>
													</select>
												</div>
											</div>
										</div>
										<div className="col-xs-2 submit_button">
											<form>
												<input type="submit" value="Search" />
											</form>
										</div>
										<div className="clearfix"> </div>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Slide;