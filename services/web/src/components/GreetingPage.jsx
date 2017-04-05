import React, { PropTypes } from 'react';

const { string, func } = PropTypes;
const propTypes = {
	token: string,
	saveToken: func.isRequired,
};
// loadToken: func.isRequired,
const defaultProps = {
	token: '',
	saveToken: () => {},
};

const GreetingPage = ({ token, saveToken }) => (
	<div>
		<h1>Willkommen</h1>
		<h2>Bitte geben sie Ihren Github Tocken ein</h2>
		<input
			type="text"
			onChange={(evt) => {
				const tokenName = evt.target.value;
				saveToken(tokenName);
			}}
		/>
		<p>{token}</p>
	</div>
	)
;

GreetingPage.propTypes = propTypes;
GreetingPage.defaultProps = defaultProps;

export default GreetingPage;
