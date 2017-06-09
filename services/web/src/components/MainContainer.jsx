import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Repo from './Repo';
import TokenComponent from './TokenComponent';
import { selectRepoSource, selectRepoTarget, getLabels, getRepos as loadRepos, moveLabel as movingLabel } from './actions';
import Flex from './Flex';

const { object, func, array, bool } = PropTypes;
const propTypes = {
	repoSource: object.isRequired,
	repoTarget: object,
	onSelectSource: func,
	onSelectTarget: func,
	repos: array.isRequired,
	loading: bool.isRequired,
	getRepos: func.isRequired,
	moveLabel: func.isRequired,
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
	moveLabel: () => {},
};

const Wrapper = styled(Flex)`
	flex-direction: row;
`;

const MainContainer = ({ repoSource, repoTarget, onSelectSource, onSelectTarget, repos, loading, getRepos, moveLabel }) => (
	<div>
		<TokenComponent />
		<Wrapper>
			<Repo
				repo={repoSource}
				onSelect={onSelectSource}
				repos={repos}
				loading={loading}
				getRepos={getRepos}
				moveLabel={moveLabel}
				repoTarget={repoTarget.repoName}
			/>
			<Repo
				repo={repoTarget}
				onSelect={onSelectTarget}
				repos={repos}
				loading={loading}
				getRepos={getRepos}
				moveLabel={moveLabel}
			/>
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
		moveLabel: (repoTarget, label) => {
			dispatch(movingLabel(repoTarget, label));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
