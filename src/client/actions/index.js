import {landingPageAPI} from './../endpoints';

export const fetchPost = (postID) => async (dispatch, getState, api) => {

    const _query = {
        query: `{
            Blog(slug: "${postID}"){
                postTitle
                post
                imageURL
            }
        }`
    };

    await api.post(landingPageAPI, _query).then(response => {
        dispatch({
            type: 'FETCH_POST',
            payload: response.data
        })
    }).catch((err) => {
        console.log('error', err);
    })
    
};

export const fetchPosts = () => async (dispatch, getState, api) => {

    const _query = {
        query: `{
            allBlogs {
                postTitle
                shortdescription
                slug
                imageURL
              }
        }`
    };

    await api.post(landingPageAPI, _query).then(response => {
        dispatch({
            type: 'FETCH_POSTS',
            payload: response.data
        })
    }).catch((err) => {
        console.log('error', err);
    })
    
};

export const clearPostData = () => (dispatch) => {
    dispatch({
        type: 'CLEAR_POST_DATA'
    })
};


