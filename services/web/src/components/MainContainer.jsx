import React, { PropTypes } from 'react';
import uuid from 'uuid/v4';
import { connect } from 'react-redux';

import { getRepos, getLabels, selectRepo } from './actions';

const { func, array, bool, string } = PropTypes;
const propTypes = {
	dispatch: func.isRequired,
	repos: array.isRequired,
	loading: bool.isRequired,
	labels: array.isRequired,
	repositoryName: string,
};
const defaultProps = {
	repos: [],
	labels: [],
	repositoryName: '',
};

// {repos.map(repo => <option key={uuid()}>{repo.full_name}</option>)}
const MainContainer = ({ labels, dispatch, repos, loading, repositoryName }) => (
	<div style={{ padding: '20px', marginRight: '50%', border: '2px dashed rgba(27,31,35,0.5)' }}>
		<h1>Repo Auswahl 1</h1>
		<button onClick={() => { dispatch(getRepos()); }}>{ loading ? 'Bitte warten...' : 'Repos Laden'}</button>
		<select
			onChange={(evt) => {
				const repoName = evt.target.value;
				dispatch(selectRepo(repoName));
				dispatch(getLabels(repoName));
			}}
			value={repositoryName}
		>
			{repos.map(repo => <option key={uuid()} >{repo.full_name}</option>)}
		</select>
		<div>Selected Repository: {repositoryName}</div>
		<ul>
			{labels.map(label =>
				<li
					style={{
						position: 'relative',
						display: 'table-row',
						listStyle: 'none',
					}} key={uuid()}
				><a
					style={{
						border: '1px solid black',
						display: 'inline-block',
						padding: '0 10px',
						marginRight: '5px',
						fontSize: '16px',
						fontWeight: 600,
						lineHeight: 2,
						textAlign: 'center',
						borderRadius: '3px',
						backgroundColor: `#${label.color}`,
					}}
				>
					{label.name}
				</a>
				</li>)
			}
		</ul>
	</div>
);


MainContainer.propTypes = propTypes;
MainContainer.defaultProps = defaultProps;

const mapStateToProps = (state) => {
	return {
		repos: state.repos.repos,
		loading: state.repos.loading,
		labels: state.labels.labels,
		repositoryName: (state.repo || {}).repoName,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		dispatch,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
