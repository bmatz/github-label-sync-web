import React, { PropTypes } from 'react';
import { startsWithSegment } from 'router5.helpers';

import GreetingPage from './GreetingPage';
import NotFound from './MissingPage';

import MainContainer from './MainContainer';

const propTypes = {
	route: PropTypes.object.isRequired,
};

const ContentContainer = ({ route }) => {
	const { name } = route;
	const testRoute = startsWithSegment(name);

	if (testRoute('dashboard')) {
		return <MainContainer />;
	}

	if (testRoute('greeting')) {
		return <GreetingPage route={route} />;
	}

	return <NotFound />;
};

ContentContainer.propTypes = propTypes;

export default ContentContainer;
