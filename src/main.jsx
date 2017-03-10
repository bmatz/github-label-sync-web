import ReactDOM from 'react-dom';
import React from 'react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from './components/reducers';
import { ReduxApp } from './components/ReduxApp';

const loggerMiddleware = createLogger();
const categories = ['Warning', 'Error', 'Info'];
const [warning] = categories;

const state = {
	addLabelForm: {
		categories,
		category: warning,
	},
};
const store = createStore(
	reducers,
	state,
	compose(
		applyMiddleware(thunk, loggerMiddleware),
		window.devToolsExtension ? window.devToolsExtension() : f => f,
	),
);

ReactDOM.render(
	<Provider store={store}>
		<ReduxApp />
	</Provider>,
	document.getElementById('app'),
);
