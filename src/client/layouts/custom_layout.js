import React, {Component} from 'react';
import classNames from 'classnames';
import {renderRoutes} from 'react-router-config';
import Header from './../components/header';
import Footer from './../components/footer';

class CustomLayout extends Component {

    render() {
        return (
            <div>
                <Header />
                {renderRoutes(this.props.route.routes)}
                <Footer/>
            </div>
        );  
    }
};

export default {
    component: CustomLayout
};

