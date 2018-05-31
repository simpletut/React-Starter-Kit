import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import InternalTextBanner from './../components/banners/internalTextBanner';
import { Helmet } from 'react-helmet';


class NotFoundPage extends Component {

    head(){
        return (
            <Helmet bodyAttributes={{class: "notFound"}}>
            <title>{`404 not found - React Starter Kit`}</title>
            </Helmet>
        );
    }

    render(){
        return (
                <div>
                    {this.head()}
                    <InternalTextBanner Heading="404 Not Found" wrapperClass="posts" />
                    <ReactCSSTransitionGroup transitionName="anim" transitionAppear={true}  transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
                    <div className="main anim-appear">
                        <div className="grid">
                            <div className="column column_12_12">
                                <div className="posts">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    </ReactCSSTransitionGroup>
                </div>
        );
    }
    
}

export default {
  component: NotFoundPage
};