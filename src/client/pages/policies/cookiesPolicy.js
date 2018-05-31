import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import InternalTextBanner from './../../components/banners/internalTextBanner';
import { Helmet } from 'react-helmet';

class CookiesPolicy extends Component {
    
    head(){
        return (
            <Helmet bodyAttributes={{class: "cookiesPolicyPage"}}>
                <title>{`Cookies policy - React Starter Kit`}</title>
            </Helmet>
        );
    }

    render(){

        return (
        
            <div>
                {this.head()}
                <InternalTextBanner Heading="Cookies Policy" wrapperClass="cookiesPolicy_banner" />
                <ReactCSSTransitionGroup transitionName="anim" transitionAppear={true}  transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
                    <div className="main anim-appear">
                        <div className="grid">
                            <div className="column column_12_12">
                                <div className="content_block">
                                    <h2>
                                        Cookies policy notice
                                    </h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis dignissim ultrices. Suspendisse ut sollicitudin nisi. Fusce efficitur nec nunc nec bibendum. Praesent laoreet tortor quis velit facilisis faucibus. Maecenas sollicitudin lectus diam, non vehicula arcu ullamcorper ac. In pharetra, est vitae interdum tincidunt, urna ligula rutrum tellus, sit amet pharetra purus magna eu enim. Sed iaculis imperdiet nisi, et pulvinar mauris gravida maximus. Phasellus vitae lorem at sem mattis volutpat. In eget dictum dui. Quisque nec sapien at massa mattis semper. Ut ac malesuada turpis. Fusce eu nulla vehicula, tincidunt dui ultrices, fermentum felis. Aliquam lectus nisi, feugiat ut aliquet sed, posuere sed libero.</p>
                                    <p>Pellentesque consectetur massa nec nulla fermentum, at tincidunt elit volutpat. Duis vulputate placerat tortor, sit amet eleifend mauris tincidunt sit amet. Aliquam a maximus ligula. Phasellus nec sapien sed tellus tempor eleifend id a erat. Donec convallis bibendum posuere. Quisque mollis imperdiet malesuada. Suspendisse eget dictum massa.</p>
                                    <p>Phasellus ac posuere nibh, in finibus nulla. In diam arcu, luctus sit amet condimentum sit amet, tristique et leo. Sed tincidunt justo a porttitor tristique. Nulla eu metus tincidunt, ornare magna ullamcorper, semper lacus. Quisque vitae porttitor odio, id tincidunt tellus. Fusce a suscipit eros. Proin sit amet risus fermentum, lobortis quam sed, consequat velit. Quisque sit amet ultricies lorem. Phasellus scelerisque ipsum eget ipsum posuere suscipit. Proin id molestie mauris, a venenatis ipsum. Quisque efficitur, nibh a dapibus mollis, metus tortor fermentum ante, non pellentesque mi magna non leo. Integer quis sem hendrerit, euismod dolor id, dapibus nulla. Maecenas non ultrices lorem. Pellentesque lobortis, diam eget feugiat lacinia, ante augue ullamcorper tortor, vel ornare sapien lacus pharetra quam.</p>
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
  component: CookiesPolicy
};