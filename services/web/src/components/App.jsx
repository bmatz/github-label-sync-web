import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { routeNodeSelector } from 'redux-router5';
import ContentContainer from './ContentContainer';
import Navigation from './Navigation';

const { object } = PropTypes;

const propTypes = {
	route: object.isRequired,
};

const App = ({ route }) => (
	<div>
		<Navigation />
		<ContentContainer route={route} />
	</div>
);

const mapStateToProps = (state) => {
	const selector = routeNodeSelector('');
	return {
		...selector(state),
	};
};
App.propTypes = propTypes;

export default connect(mapStateToProps)(App);
