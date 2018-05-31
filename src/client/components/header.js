import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import webConfig from './../../../webConfig';
import classNames from 'classnames';

class Header extends Component {

    constructor(props) {
        super();
        this.state = {
            vPos : 0,
            mobileToggle: false
        }
        this.listenScrollEvent = this.listenScrollEvent.bind(this);
    }

    listenScrollEvent(event) {
        this.setState({
            vPos: event.target.body.scrollTop
        });
    }

    toggleMobileNav(){
        this.setState({
            mobileToggle: !this.state.mobileToggle
        });
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenScrollEvent);
    }
    
    render() {

        return (
            
            <header onScroll={this.listenScrollEvent} className={classNames({'scrollActive': this.state.vPos > 0, 'mobileNavActive': this.state.mobileToggle })}>

                <div className="wrap">

                    <div className="logo_wrap">
                        <Link to="/">
                            <img src={`${webConfig.siteURL}/assets/graphics/logo.png`} alt="Logo" className="dark"/>
                            <img src={`${webConfig.siteURL}/assets/graphics/logo_white.png`} alt="Logo" className="white"/>
                        </Link>
                    </div>

                    <div className="mobile">
                        <span className={classNames({'icon': true, 'mobileNavActive': this.state.mobileToggle })} onClick={this.toggleMobileNav.bind(this)}>
                            <span></span>
                        </span>
                    </div>

                    <div className={classNames({'nav_wrap': true, 'mobile_active': this.state.mobileToggle })}>
                        <nav>
                            <ul>
                                <li className="first">
                                    <NavLink activeClassName="active" to="/blog">Blog</NavLink>
                                </li>
                                <li className="first">
                                    <NavLink activeClassName="active" to="/services">Services</NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName="active" to="/about">About</NavLink> 
                                </li>
                                <li className="last">
                                    <NavLink activeClassName="active" to="/contact">Contact</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>

                </div>
                
                
            
            
            
            </header>
            
        );
    }  
};

export default Header;