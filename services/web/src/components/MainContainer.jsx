import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Repo from './Repo';
import TokenComponent from './TokenComponent';
import { selectRepoSource, selectRepoTarget, getLabels, getRepos as loadRepos } from './actions';
import Flex from './Flex';

const { object, func, array, bool } = PropTypes;
const propTypes = {
	repoSource: object.isRequired,
	repoTarget: object.isRequired,
	onSelectSource: func,
	onSelectTarget: func,
	repos: array.isRequired,
	loading: bool.isRequired,
	getRepos: func.isRequired,
};
const defaultProps = {
	repos: [],
	repoSource: {
		labels: [],
	},
	repoTarget: {
		labels: [],
	},
	onSelectSource: () => {},
	onSelectTarget: () => {},
	getRepos: () => {},
};

const Wrapper = styled(Flex)`
	flex-direction: row;
`;

const MainContainer = ({ repoSource, repoTarget, onSelectSource, onSelectTarget, repos, loading, getRepos }) => (
	<div>
		<TokenComponent />
		<Wrapper>
			<Repo repo={repoSource} onSelect={onSelectSource} repos={repos} loading={loading} getRepos={getRepos} />
			<Repo repo={repoTarget} onSelect={onSelectTarget} repos={repos} loading={loading} getRepos={getRepos} />
		</Wrapper>
	</div>
	);

MainContainer.propTypes = propTypes;
MainContainer.defaultProps = defaultProps;

const mapStateToProps = (state) => {
	return {
		repos: state.repos.repos,
		loading: state.repos.loading,
		repoSource: state.repoSource,
		repoTarget: state.repoTarget,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		dispatch,
		onSelectSource: (source) => {
			dispatch(selectRepoSource(source));
			dispatch(getLabels(source, 'source'));
		},
		onSelectTarget: (target) => {
			dispatch(selectRepoTarget(target));
			dispatch(getLabels(target, 'target'));
		},
		getRepos: () => {
			dispatch(loadRepos());
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
