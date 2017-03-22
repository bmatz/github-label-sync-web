import React, { PropTypes } from 'react';
import uuid from 'uuid/v4';
import { connect } from 'react-redux';

import AddLabelForm from './AddLabelFormContainer';
import Label from './LabelContainer';
import { getRepos, removeLabel } from './actions';

const { func, array, bool } = PropTypes;
const propTypes = {
	labels: array.isRequired,
	dispatch: func.isRequired,
	repos: array.isRequired,
	loading: bool.isRequired,
};
const defaultProps = {
	repos: [],
};

const MainContainer = ({ labels, dispatch, repos, loading }) => (
	<div style={{ padding: '20px' }}>
		<h1>Die Labels</h1>
		<button onClick={() => { dispatch(getRepos()); }}>{ loading ? 'Bitte warten...' : 'Repos Laden'}</button>
		<ul>
			{repos.map(repo => <li key={uuid()}>{repo.full_name}</li>)}
		</ul>
		<AddLabelForm />
		<button onClick={() => dispatch(removeLabel(0))}>Lösche Erstes</button>
		{labels.map((l, i) => <Label key={uuid()} title={l.title} description={l.description} nr={i} />)}
	</div>
);


MainContainer.propTypes = propTypes;
MainContainer.defaultProps = defaultProps;

const mapStateToProps = (state) => {
	return {
		labels: state.labels,
		repos: state.repos.repos,
		loading: state.repos.loading,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		dispatch,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
