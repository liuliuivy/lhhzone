import React, { Component } from 'react';
import $ from '../common/js/easyResponsiveTabs.js';
import "../common/css/bootstrap.css";
import "../common/css/jquery.fancybox.css";
import "../common/css/style.css";
const images = require.context('../common/images', true);

class Middle extends Component {
    render() {
        return (
            <div className="content_bottom">
                <div className="col-md-7">
                    <div className="sap_tabs">
                        <div id="horizontalTab" style={{ display: "block", width: "100%", margin: "0px" }}>
                            <div className="tab_grid">
                                <ul className="resp-tabs-list">
                                    <li className="resp-tab-item" aria-controls="tab_item-0" role="tab">
                                        <span>Apartment</span>
                                    </li>
                                    <li className="resp-tab-item" aria-controls="tab_item-1" role="tab">
                                        <span>Resort</span>
                                    </li>
                                    <li className="resp-tab-item" aria-controls="tab_item-2" role="tab">
                                        <span>Summer house</span>
                                    </li>
                                    <div className="clearfix"></div>
                                </ul>
                            </div>
                        <div className="tab-1 resp-tab-content" aria-labelledby="tab_item-0">
                                <ul className="tab_img tab_1">
                                    <li>
                                        <div className="client_box1">
                                            <img src={images("./" + "pic1" + ".jpg")} className="img-responsive" alt="" />
                                            <div className="box_type">$&nbsp;650</div>
                                            <h3 className="m_1">
                                                <a href="single.html">Dolor Sit</a>
                                            </h3>
                                            <div className="boxed_mini_details clearfix">
                                                <span className="area first">
                                                    <strong>Garage</strong>
                                                    <i className="fa fa-plane icon1"></i>
                                                    2</span>
                                                <span className="status">
                                                    <strong>Baths</strong>
                                                    <i className="fa fa-retweet icon1"> </i>
                                                    2</span>
                                                <span className="bedrooms last">
                                                    <strong>Beds</strong>
                                                    <i className="fa fa-building-o icon1"></i>
                                                    2</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="client_box1">
                                            <img src={images("./" + "pic2" + ".jpg")} className="img-responsive" alt="" />
                                            <div className="box_type">$&nbsp;450</div>
                                            <h3 className="m_1">
                                                <a href="single.html">Dolor Sit</a>
                                            </h3>
                                            <div className="boxed_mini_details clearfix">
                                                <span className="area first">
                                                    <strong>Garage</strong>
                                                    <i className="fa fa-plane icon1"></i>
                                                    2</span>
                                                <span className="status">
                                                    <strong>Baths</strong>
                                                    <i className="fa fa-retweet icon1"> </i>
                                                    2</span>
                                                <span className="bedrooms last">
                                                    <strong>Beds</strong>
                                                    <i className="fa fa-building-o icon1"></i>
                                                    2</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="last">
                                        <div className="client_box1">
                                            <img src={images("./" + "pic3" + ".jpg")} className="img-responsive" alt="" />
                                            <div className="box_type">$&nbsp;220</div>
                                            <h3 className="m_1">
                                                <a href="single.html">Dolor Sit</a>
                                            </h3>
                                            <div className="boxed_mini_details clearfix">
                                                <span className="area first">
                                                    <strong>Garage</strong>
                                                    <i className="fa fa-plane icon1"></i>
                                                    2</span>
                                                <span className="status">
                                                    <strong>Baths</strong>
                                                    <i className="fa fa-retweet icon1"> </i>
                                                    2</span>
                                                <span className="bedrooms last">
                                                    <strong>Beds</strong>
                                                    <i className="fa fa-building-o icon1"></i>
                                                    2</span>
                                            </div>
                                        </div>
                                    </li>
                                    <div className="clearfix"></div>
                                </ul>
                                <ul className="tab_img">
                                    <li>
                                        <div className="client_box1">
                                            <img src={images("./" + "pic4" + ".jpg")} className="img-responsive" alt="" />
                                            <div className="box_type">$&nbsp;650</div>
                                            <h3 className="m_1">
                                                <a href="single.html">Dolor Sit</a>
                                            </h3>
                                            <div className="boxed_mini_details clearfix">
                                                <span className="area first">
                                                    <strong>Garage</strong>
                                                    <i className="fa fa-plane icon1"></i>
                                                    2</span>
                                                <span className="status">
                                                    <strong>Baths</strong>
                                                    <i className="fa fa-retweet icon1"> </i>
                                                    2</span>
                                                <span className="bedrooms last">
                                                    <strong>Beds</strong>
                                                    <i className="fa fa-building-o icon1"></i>
                                                    2</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="client_box1">
                                            <img src={images("./" + "pic5" + ".jpg")} className="img-responsive" alt="" />
                                            <div className="box_type">$&nbsp;450</div>
                                            <h3 className="m_1">
                                                <a href="single.html">Dolor Sit</a>
                                            </h3>
                                            <div className="boxed_mini_details clearfix">
                                                <span className="area first">
                                                    <strong>Garage</strong>
                                                    <i className="fa fa-plane icon1"></i>
                                                    2</span>
                                                <span className="status">
                                                    <strong>Baths</strong>
                                                    <i className="fa fa-retweet icon1"> </i>
                                                    2</span>
                                                <span className="bedrooms last">
                                                    <strong>Beds</strong>
                                                    <i className="fa fa-building-o icon1"></i>
                                                    2</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="last">
                                        <div className="client_box1">
                                            <img src={images("./" + "pic6" + ".jpg")} className="img-responsive" alt="" />
                                            <div className="box_type">$&nbsp;500</div>
                                            <h3 className="m_1">
                                                <a href="single.html">Dolor Sit</a>
                                            </h3>
                                            <div className="boxed_mini_details clearfix">
                                                <span className="area first">
                                                    <strong>Garage</strong>
                                                    <i className="fa fa-plane icon1"></i>
                                                    2</span>
                                                <span className="status">
                                                    <strong>Baths</strong>
                                                    <i className="fa fa-retweet icon1"> </i>
                                                    2</span>
                                                <span className="bedrooms last">
                                                    <strong>Beds</strong>
                                                    <i className="fa fa-building-o icon1"></i>
                                                    2</span>
                                            </div>
                                        </div>
                                    </li>
                                    <div className="clearfix"></div>
                                </ul>
                            </div>
                            <div className="tab-1 resp-tab-content" aria-labelledby="tab_item-1">

                                <ul className="tab_img">
                                    <li>
                                        <div className="client_box1">
                                            <img src={images("./" + "pic4" + ".jpg")} className="img-responsive" alt="" />
                                            <div className="box_type">$&nbsp;650</div>
                                            <h3 className="m_1">
                                                <a href="single.html">Dolor Sit</a>
                                            </h3>
                                            <div className="boxed_mini_details clearfix">
                                                <span className="area first">
                                                    <strong>Garage</strong>
                                                    <i className="fa fa-plane icon1"></i>
                                                    2</span>
                                                <span className="status">
                                                    <strong>Baths</strong>
                                                    <i className="fa fa-retweet icon1"> </i>
                                                    2</span>
                                                <span className="bedrooms last">
                                                    <strong>Beds</strong>
                                                    <i className="fa fa-building-o icon1"></i>
                                                    2</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="client_box1">
                                            <img src={images("./" + "pic5" + ".jpg")} className="img-responsive" alt="" />
                                            <div className="box_type">$&nbsp;450</div>
                                            <h3 className="m_1">
                                                <a href="single.html">Dolor Sit</a>
                                            </h3>
                                            <div className="boxed_mini_details clearfix">
                                                <span className="area first">
                                                    <strong>Garage</strong>
                                                    <i className="fa fa-plane icon1"></i>
                                                    2</span>
                                                <span className="status">
                                                    <strong>Baths</strong>
                                                    <i className="fa fa-retweet icon1"> </i>
                                                    2</span>
                                                <span className="bedrooms last">
                                                    <strong>Beds</strong>
                                                    <i className="fa fa-building-o icon1"></i>
                                                    2</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="last">
                                        <div className="client_box1">
                                            <img src={images("./" + "pic6" + ".jpg")} className="img-responsive" alt="" />
                                            <div className="box_type">$&nbsp;500</div>
                                            <h3 className="m_1">
                                                <a href="single.html">Dolor Sit</a>
                                            </h3>
                                            <div className="boxed_mini_details clearfix">
                                                <span className="area first">
                                                    <strong>Garage</strong>
                                                    <i className="fa fa-plane icon1"></i>
                                                    2</span>
                                                <span className="status">
                                                    <strong>Baths</strong>
                                                    <i className="fa fa-retweet icon1"> </i>
                                                    2</span>
                                                <span className="bedrooms last">
                                                    <strong>Beds</strong>
                                                    <i className="fa fa-building-o icon1"></i>
                                                    2</span>
                                            </div>
                                        </div>
                                    </li>
                                    <div className="clearfix"></div>
                                </ul>
                            </div>
                            <div className="tab-1 resp-tab-content" aria-labelledby="tab_item-2">
                                <ul className="tab_img">
                                    <li>
                                        <div className="client_box1">
                                            <img src={images("./" + "pic5" + ".jpg")} className="img-responsive" alt="" />
                                            <div className="box_type">$&nbsp;450</div>
                                            <h3 className="m_1">
                                                <a href="single.html">Dolor Sit</a>
                                            </h3>
                                            <div className="boxed_mini_details clearfix">
                                                <span className="area first">
                                                    <strong>Garage</strong>
                                                    <i className="fa fa-plane icon1"></i>
                                                    2</span>
                                                <span className="status">
                                                    <strong>Baths</strong>
                                                    <i className="fa fa-retweet icon1"> </i>
                                                    2</span>
                                                <span className="bedrooms last">
                                                    <strong>Beds</strong>
                                                    <i className="fa fa-building-o icon1"></i>
                                                    2</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="last">
                                        <div className="client_box1">
                                            <img src={images("./" + "pic6" + ".jpg")} className="img-responsive" alt="" />
                                            <div className="box_type">$&nbsp;500</div>
                                            <h3 className="m_1">
                                                <a href="single.html">Dolor Sit</a>
                                            </h3>
                                            <div className="boxed_mini_details clearfix">
                                                <span className="area first">
                                                    <strong>Garage</strong>
                                                    <i className="fa fa-plane icon1"></i>
                                                    2</span>
                                                <span className="status">
                                                    <strong>Baths</strong>
                                                    <i className="fa fa-retweet icon1"> </i>
                                                    2</span>
                                                <span className="bedrooms last">
                                                    <strong>Beds</strong>
                                                    <i className="fa fa-building-o icon1"></i>
                                                    2</span>
                                            </div>
                                        </div>
                                    </li>
                                    <div className="clearfix"></div>
                                </ul>
                            </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        $('#horizontalTab').easyResponsiveTabs({
            type: 'default', //Types: default, vertical, accordion           
            width: 'auto', //auto or any width like 600px
            fit: true   // 100% fit in a container
        });
    }
}


export default Middle;