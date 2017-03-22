import React, { PropTypes } from 'react';

const { object } = PropTypes;
const propTypes = {
	route: object.isRequired,
};

const GreetingPage = (props) => {
	const { firstname, lastname } = props.route.params;
	return (
		<div>
			<h1>Willkommen</h1>
			Hallo, { firstname } { lastname } !
		</div>
	);
};

GreetingPage.propTypes = propTypes;

export default GreetingPage;
