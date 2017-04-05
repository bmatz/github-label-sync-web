import ReactDOM from 'react-dom';
import React from 'react';

// import { MainLayout, MissingPage, GreetingPage } from './components';
import App from './components/App';
import routes from './routes';
import reducers from './components/reducers';
import { ReactApplication } from './ReactApplication';

ReactDOM.render(
	<ReactApplication
		reducers={reducers}
		routes={routes}
		defaultRoute="greeting"
		name="labelSync"
	>
		<App />
	</ReactApplication>,
	document.getElementById('app'),
);

// <Route path="*" component={MissingPage} />
// <Route path="/listing" component={ReduxApp} />
// <Route path="/greeting/:lastname/:firstname" component={GreetingPage} />
