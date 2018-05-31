import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

const Footer = () => {
    
    return (
        <footer>
            <div className="wrap">
                <div className="clearFloat">
                    <div className="left">
                        <div className="copyright">
                            &copy; 2018 React Starter Kit. All Rights Reserved.
                        </div>
                    </div>
                    <div className="right">
                        <div className="footer_nav">
                            <ul>
                                <li>    
                                    <Link to="/policies/terms">Terms and conditions</Link>
                                </li>
                                <li>    
                                    <Link to="/policies/privacy">Privacy policy</Link>
                                </li>
                                <li>    
                                    <Link to="/policies/cookies">Cookies policy</Link>
                                </li>
                                <li>    
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="social_icons">
                            <ul>
                                <li>    
                                    <a href="https://www.facebook.com/SimpleTut" target="_blank">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li>    
                                    <a href="https://github.com/reactjs-starter-kit" target="_blank">
                                        <i className="fab fa-github"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
        </footer>
    );  
};

export default Footer;