import React, { PropTypes } from 'react';
import uuid from 'uuid/v4';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Flex from './Flex';

import Label from './Label';
import { getRepos } from './actions';

const { func, array, bool, object } = PropTypes;
const propTypes = {
	dispatch: func.isRequired,
	repos: array.isRequired,
	loading: bool.isRequired,
	// labels: array.isRequired,
	// repositoryName: string,
	repo: object.isRequired,
	// type: string,
	onSelect: func.isRequired,
};

const defaultProps = {
	repos: [],
	labels: [],
	repositoryName: '',
	type: 'none',
};

const LabelWrapper = styled(Flex)`
	flex-direction: column;
`;
const Wrapper = styled.div`
	padding: 20px;
	margin-right: 50%;
	border: 2px dashed rgba(27,31,35,0.5);
`;
// {repos.map(repo => <option key={uuid()}>{repo.full_name}</option>)}
// console.log(`!!!!!!!!!!!!!!!!!!!!!!! ${type}`, repo);
const Repo = ({ dispatch, repos, loading, repo, onSelect }) => (
	<Wrapper>
		<h1>Repo Auswahl 1</h1>
		<button onClick={() => { dispatch(getRepos()); }}>{ loading ? 'Bitte warten...' : 'Repos Laden'}</button>
		<select
			onChange={(evt) => {
				const repoName = evt.target.value;
				onSelect(repoName);
			}}
			value={repo.full_name}
		>
			{repos.map(item => <option key={uuid()} >{item.full_name}</option>)}
		</select>
		<div>Selected Repository: {repo.full_name}</div>
		<LabelWrapper>
			{repo.labels.map(label => <Label key={uuid()} label={label} />)}
		</LabelWrapper>
	</Wrapper>
	);


Repo.propTypes = propTypes;
Repo.defaultProps = defaultProps;

const mapStateToProps = (state) => {
	return {
		repos: state.repos.repos,
		loading: state.repos.loading,
		// labels: state.labels.labels,
		// repositoryName: (state.repo || {}).repoName,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		dispatch,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Repo);
