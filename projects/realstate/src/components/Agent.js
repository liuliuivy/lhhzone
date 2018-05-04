import React, { Component } from 'react';
import "../common/css/bootstrap.css";
import "../common/css/jquery.fancybox.css";
import "../common/css/style.css";
const images = require.context('../common/images', true);

class Agent extends Component{
	render(){
		return(

<div class="col-md-3">
					<div class="blog_list2">
						<h3>Our Agents</h3>
						<ul class="blog-list3 list_1">
							<li class="blog-list3-img">
								<img src="images/pic12.jpg" class="img-responsive" alt="" />
							</li>
							<li class="blog-list3-desc">
								<h4>
									<a href="#">Adipisicing</a>
								</h4>
								<ul class="admin_desc">
									<li class="list_top">
										<i class="fa fa-phone-square ph"> </i>
										<p class="m_2">20-1257-2587</p>
									</li>
									<div class="clearfix"> </div>
									<li class="list_top">
										<i class="fa fa-envelope ph"> </i>
										<p class="m_2">
											<a href="malito:mail@demolink.org">mail(at)realist.com</a>
										</p>
									</li>
									<div class="clearfix"> </div>
								</ul>
							</li>
							<div class="clearfix"> </div>
						</ul>
						<ul class="blog-list3 list_1">
							<li class="blog-list3-img">
								<img src="images/pic13.jpg" class="img-responsive" alt="" />
							</li>
							<li class="blog-list3-desc">
								<h4>
									<a href="#">Incididunt</a>
								</h4>
								<ul class="admin_desc">
									<li class="list_top">
										<i class="fa fa-phone-square ph"> </i>
										<p class="m_2">20-1257-2587</p>
									</li>
									<div class="clearfix"> </div>
									<li class="list_top">
										<i class="fa fa-envelope ph"> </i>
										<p class="m_2">
											<a href="malito:mail@demolink.org">mail(at)realist.com</a>
										</p>
									</li>
									<div class="clearfix"> </div>
								</ul>
							</li>
							<div class="clearfix"> </div>
						</ul>
						<ul class="blog-list3">
							<li class="blog-list3-img">
								<img src="images/pic7.jpg" class="img-responsive" alt="" />
							</li>
							<li class="blog-list3-desc">
								<h4>
									<a href="#">Hampden-Sydney</a>
								</h4>
								<ul class="admin_desc">
									<li class="list_top">
										<i class="fa fa-phone-square ph"> </i>
										<p class="m_2">20-1257-2587</p>
									</li>
									<div class="clearfix"> </div>
									<li class="list_top">
										<i class="fa fa-envelope ph"> </i>
										<p class="m_2">
											<a href="malito:mail@demolink.org">mail(at)realist.com</a>
										</p>
									</li>
									<div class="clearfix"> </div>
								</ul>
							</li>
							<div class="clearfix"> </div>
						</ul>
					</div>
				</div>
		)
	}
}
export default Agent;