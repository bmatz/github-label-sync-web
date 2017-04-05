import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import TokenComponent from './TokenComponent';


const TokenContainer = () => (
	<div>
		<TokenComponent />
	</div>
);

const mapStateToProps = (state) => {
	return {

	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		dispatch,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TokenContainer);
