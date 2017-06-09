import React, { PropTypes } from 'react';
import uuid from 'uuid/v4';
import styled from 'styled-components';
import Flex from './Flex';

import Label from './Label';

const { func, array, bool, object } = PropTypes;
const propTypes = {
	repos: array.isRequired,
	loading: bool.isRequired,
	repo: object.isRequired,
	onSelect: func.isRequired,
	getRepos: func.isRequired,
	moveLabel: func.isRequired,
	repoTarget: object,
};

const defaultProps = {
	repos: [],
	repositoryName: '',
	repoTarget: undefined,
};

const LabelWrapper = styled(Flex)`
	flex-direction: column;
`;
const Wrapper = styled.div`
	padding: 20px;
	border: 2px dashed rgba(27,31,35,0.5);
`;


const Repo = ({ repos, loading, repo, onSelect, getRepos, moveLabel, repoTarget }) => (
	<Wrapper>
		<h1>Repo Auswahl</h1>
		<button onClick={() => { getRepos(); }}>{ loading ? 'Bitte warten...' : 'Repos Laden'}</button>
		<select
			onChange={(evt) => {
				const repoName = evt.target.value;
				onSelect(repoName);
			}}
			value={repo.repoName}
		>
			<option>Bitte Wählen</option>
			{repos.map(item => <option key={uuid()} value={item.full_name} >{item.full_name}</option>)}
		</select>
		<div>Selected Repository: {repo.repoName}</div>
		<LabelWrapper>
			{repo.labels.map(label => <Label key={uuid()} label={label} moveLabel={moveLabel} repoTarget={repoTarget} />) }
		</LabelWrapper>
	</Wrapper>
	);


Repo.propTypes = propTypes;
Repo.defaultProps = defaultProps;

export default Repo;
