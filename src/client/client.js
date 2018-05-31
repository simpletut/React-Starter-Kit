// Start up point for client side app
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import axios from 'axios';
import webConfig from './../../webConfig';
import Routes from './routes';
import reducers from './reducers';

const axiosInstance = axios.create({
    baseURL: webConfig.axiosInstance_baseURL
});

const store = createStore(
    reducers, 
    window.INITIAL_STATE, 
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
);

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <div>{renderRoutes(Routes)}</div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('#root'));

