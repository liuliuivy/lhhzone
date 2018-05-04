import React, { Component } from 'react';
import "../common/css/bootstrap.css";
import "../common/css/jquery.fancybox.css";
import "../common/css/style.css";
const images = require.context('../common/images', true);

class Agent extends Component{
	render(){
		return(

<div className="col-md-3">
					<div className="blog_list2">
						<h3>Our Agents</h3>
						<ul className="blog-list3 list_1">
							<li className="blog-list3-img">
								<img src={images("./"+"pic12"+".jpg")} className="img-responsive" alt="" />
							</li>
							<li className="blog-list3-desc">
								<h4>
									<a href="#">Adipisicing</a>
								</h4>
								<ul className="admin_desc">
									<li className="list_top">
										<i className="fa fa-phone-square ph"> </i>
										<p className="m_2">20-1257-2587</p>
									</li>
									<div className="clearfix"> </div>
									<li className="list_top">
										<i className="fa fa-envelope ph"> </i>
										<p className="m_2">
											<a href="malito:mail@demolink.org">mail(at)realist.com</a>
										</p>
									</li>
									<div className="clearfix"> </div>
								</ul>
							</li>
							<div className="clearfix"> </div>
						</ul>
						<ul className="blog-list3 list_1">
							<li className="blog-list3-img">
								<img src={images("./"+"pic13"+".jpg")} className="img-responsive" alt="" />
							</li>
							<li className="blog-list3-desc">
								<h4>
									<a href="#">Incididunt</a>
								</h4>
								<ul className="admin_desc">
									<li className="list_top">
										<i className="fa fa-phone-square ph"> </i>
										<p className="m_2">20-1257-2587</p>
									</li>
									<div className="clearfix"> </div>
									<li className="list_top">
										<i className="fa fa-envelope ph"> </i>
										<p className="m_2">
											<a href="malito:mail@demolink.org">mail(at)realist.com</a>
										</p>
									</li>
									<div className="clearfix"> </div>
								</ul>
							</li>
							<div className="clearfix"> </div>
						</ul>
						<ul className="blog-list3">
							<li className="blog-list3-img">
								<img src={images("./"+"pic7"+".jpg")} className="img-responsive" alt="" />
							</li>
							<li className="blog-list3-desc">
								<h4>
									<a href="#">Hampden-Sydney</a>
								</h4>
								<ul className="admin_desc">
									<li className="list_top">
										<i className="fa fa-phone-square ph"> </i>
										<p className="m_2">20-1257-2587</p>
									</li>
									<div className="clearfix"> </div>
									<li className="list_top">
										<i className="fa fa-envelope ph"> </i>
										<p className="m_2">
											<a href="malito:mail@demolink.org">mail(at)realist.com</a>
										</p>
									</li>
									<div className="clearfix"> </div>
								</ul>
							</li>
							<div className="clearfix"> </div>
						</ul>
					</div>
				</div>
		)
	}
}
export default Agent;