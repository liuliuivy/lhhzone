import React, { Component } from 'react';
import "../common/css/bootstrap.css";
import "../common/css/jquery.fancybox.css";
import "../common/css/style.css";
import SaleRent from "./SaleRent";
import Agent from "./Agent" ;

class ContentBottom extends Component{
    render(){
        return(
        <div className="content_bottom">
            <SaleRent/>
            <Agent/>
            

            <div className="clearfix"> </div>
        </div>
        )
    }
}
export default ContentBottom;