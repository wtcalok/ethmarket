import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const store = createStore(reducer, compose(applyMiddleware(thunk)));

ReactDOM.render(
	<Provider store={store} >
		<App />
	</Provider>, document.getElementById('root'));
