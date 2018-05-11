import React, { Component } from 'react';
import { connect } from 'react-redux';
import "../common/css/bootstrap.css";
import "../common/css/jquery.fancybox.css";
import "../common/css/style.css";
import AgentBox from "./AgentBox";
const images = require.context('../common/images', true);

class Agent extends Component{
	render(){
		const {agents} = this.props;
		return(

				<div className="col-md-3">
					<div className="blog_list2">
						<h3>Our Agents</h3>
						 {agents.map((agent) =>(
							 <li >
								<AgentBox {...agent}/>
							 </li>))
						 }
						
					</div>
				</div>
		)
	}
}

const mapStateToProps = state => ({
    agents: state.agents,
})

export default connect(
    mapStateToProps,
    null
)(Agent);
