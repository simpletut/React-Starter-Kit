import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import reducers from './../client/reducers';
import webConfig from './../../webConfig';

export default (req) => {

    const axiosInstance = axios.create({
        baseURL: webConfig.axiosInstance_baseURL,
        headers: {
            cookie: req.get('cookie') || ''
        }
    });

    const store = createStore(
        reducers, 
        {}, 
        applyMiddleware(thunk.withExtraArgument(axiosInstance)
    ));
    return store;
};