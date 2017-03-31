import React, { PropTypes } from 'react';
import uuid from 'uuid/v4';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Flex from './Flex';

import Label from './Label';
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

const LabelWrapper = styled(Flex)`
	flex-direction: column;
`;
const Wrapper = styled.div`
	padding: 20px;
	margin-right: 50%;
	border: 2px dashed rgba(27,31,35,0.5);
`;
// {repos.map(repo => <option key={uuid()}>{repo.full_name}</option>)}
const MainContainer = ({ labels, dispatch, repos, loading, repositoryName }) => (
	<Wrapper>
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
		<LabelWrapper>
			{labels.map(label => <Label key={uuid()} label={label} />)}
		</LabelWrapper>
	</Wrapper>
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
