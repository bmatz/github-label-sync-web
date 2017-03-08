import ReactDOM from 'react-dom';
import React from 'react';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { labelApp } from './components/reducers';
import { ReduxApp } from './components/ReduxApp';

const store = createStore(labelApp);

ReactDOM.render(
	<Provider store={store}>
		<ReduxApp />
	</Provider>,
	document.getElementById('app'));
