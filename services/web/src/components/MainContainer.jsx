import React, { PropTypes } from 'react';
// import uuid from 'uuid/v4';
import { connect } from 'react-redux';
// import styled from 'styled-components';
import Repo from './Repo';
import { selectRepoSource, selectRepoTarget, getLabels } from './actions';
// import Flex from './Flex';

// import Label from './Label';
// import { getRepos, getLabels, selectRepo } from './actions';

const { object, func } = PropTypes;
const propTypes = {
	repoSource: object.isRequired,
	repoTarget: object.isRequired,
	onSelectSource: func,
	onSelectTarget: func,
};
const defaultProps = {
	repoSource: {
		labels: [],
	},
	repoTarget: {
		labels: [],
	},
	onSelectSource: () => {},
	onSelectTarget: () => {},
};
// console.log('REPOOOOSOURCEEEEE: ', repoSource);
const MainContainer = ({ repoSource, repoTarget, onSelectSource, onSelectTarget }) => (
	<div>
		<Repo repo={repoSource} type="source" onSelect={onSelectSource} />
		<Repo repo={repoTarget} type="target" onSelect={onSelectTarget} />
	</div>
	);

MainContainer.propTypes = propTypes;
MainContainer.defaultProps = defaultProps;

// console.log('STAAAAAAAAAAATE: ', state);
const mapStateToProps = (state) => {
	return {
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
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
