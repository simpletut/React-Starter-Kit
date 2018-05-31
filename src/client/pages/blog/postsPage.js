import React, {Component} from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import InternalTextBanner from './../../components/banners/internalTextBanner';
import RenderHTML from './../../components/renderHTML';
import {fetchPosts} from './../../actions';
import { Helmet } from 'react-helmet';
import {Link} from 'react-router-dom';

class Posts extends Component {

    componentDidMount(){
        this.props.fetchPosts();
    }

    renderPosts(){
        if(this.props.pageData != false){
        return this.props.pageData.map((post, index) => {
            return (
                <div key={index} className="post">
                    <div className="wrap">
                        <div className="img">
                            <img src={post.imageURL} />
                        </div>
                        <div className="details">
                            <div className="headline">
                                <Link to={`/blog/${post.slug}`}>
                                    {post.postTitle}
                                </Link>
                            </div>
                            <div className="short_desc">
                                <RenderHTML wrapperClass="user_content" html={post.shortdescription} />
                            </div>
                            <Link className="readMore" to={`/blog/${post.slug}`}>
                                Read more
                            </Link>
                        </div>
                    </div>
                    
                </div>
            );
        })
        }
    }

    head(){
        return (
            <Helmet bodyAttributes={{class: "postsPage"}}>
                <title>{`Posts - React Starter Kit`}</title>
            </Helmet>
        );
    }

    render() {

        if(!this.props.pageData == false){
            return(
                <div>
                    {this.head()}
                    <InternalTextBanner Heading="Posts" wrapperClass="posts" />
                    <ReactCSSTransitionGroup transitionName="anim" transitionAppear={true}  transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
                    <div className="main anim-appear">
                        <div className="grid">
                            <div className="column column_12_12">
                                <div className="posts">
                                    {this.renderPosts()}
                                </div>
                            </div>
                        </div>
                    </div>
                    </ReactCSSTransitionGroup>
                </div>
            );
        }

        if(this.props.pageData == null){
            return (
                <div>
                    {this.head()}
                    <InternalTextBanner Heading="" wrapperClass="posts" />
                    <ReactCSSTransitionGroup transitionName="anim" transitionAppear={true}  transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
                    <div className="main anim-appear">
                        <div className="grid">
                            <div className="column column_8_12">
                                <div className="posts">
                                    
                                </div>
                            </div>
                            <div className="column column_4_12">
                                
                            </div>
                        </div>
                    </div>
                    </ReactCSSTransitionGroup>
                </div>
            );
        }

        if(this.props.pageData == false){
            return (
                <div>
                    {this.head()}
                    <InternalTextBanner Heading="404 Not found" wrapperClass="posts" />
                    <ReactCSSTransitionGroup transitionName="anim" transitionAppear={true}  transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
                    <div className="main anim-appear">
                        <div className="grid">
                            <div className="column column_8_12">
                                <div className="posts">
                                    
                                </div>
                            </div>
                            <div className="column column_4_12">
                                
                            </div>
                        </div>
                    </div>
                    </ReactCSSTransitionGroup>
                </div>
            );
        }

    }
  }

function mapStateToProps(state){
    return {
        pageData: state.posts.arr
    };
};

function loadData(store){
    return store.dispatch(fetchPosts());
}

export default {
    loadData,
    component: connect(mapStateToProps, { fetchPosts })(Posts)
};

