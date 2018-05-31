import React, {Component} from 'react';
import {renderRoutes} from 'react-router-config';
import Header from './components/header';
import Footer from './components/footer';

class App extends Component {

    render() {
        return (
            <div className="default_layout">
                <Header />
                {renderRoutes(this.props.route.routes)}
                <Footer/>
            </div>
        );  
    }

};

export default {
    component: App
};