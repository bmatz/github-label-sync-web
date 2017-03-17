import React, { PropTypes } from 'react';
import uuid from 'uuid/v4';
import { ReduxAddLabelForm } from './ReduxAddLabelForm';
import { ReduxLabel } from './ReduxLabel';
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

const App = ({ labels, dispatch, repos, loading }) => (
	<div style={{ padding: '20px' }}>
		<h1>Die Labels</h1>
		<button onClick={() => { dispatch(getRepos()); }}>{ loading ? 'Bitte warten...' : 'Repos Laden'}</button>
		<ul>
			{repos.map(repo => <li key={uuid()}>{repo.full_name}</li>)}
		</ul>
		<ReduxAddLabelForm />
		<button onClick={() => dispatch(removeLabel(0))}>Lösche Erstes</button>
		{labels.map((l, i) => <ReduxLabel key={uuid()} title={l.title} description={l.description} nr={i} />)}
	</div>
);


App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
