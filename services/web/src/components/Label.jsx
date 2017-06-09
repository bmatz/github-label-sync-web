import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Flex from './Flex';

const { object, func } = PropTypes;
const propTypes = {
	label: object.isRequired,
	moveLabel: func.isRequired,
	repoTarget: object,
};
const defaultProps = {
	repoTarget: undefined,
};
const Wrapper = styled(Flex)`
	padding-bottom: 0.5rem;
`;

const GitHubLabel = styled(Flex)`
	width: 16rem;
	border: 0.05rem solid rgba(0,0,0,0.15);
	display: inline-block;
	font-weight: bold;
	line-height: 2;
	text-align: center;
	border-radius: 3px;
	background-color: ${props => `#${props.color}`};
`;

const Label = ({ label, moveLabel, repoTarget }) => {
	console.log(repoTarget);
	return (
		<Wrapper>
			<GitHubLabel color={label.color}>{label.name}</GitHubLabel>
			{repoTarget && <button onClick={() => { moveLabel(repoTarget, label); }}>Label verschieben</button>}
		</Wrapper>
	);
};
Label.propTypes = propTypes;
Label.defaultProps = defaultProps;

export default Label;
