import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Flex from './Flex';

const { object } = PropTypes;
const propTypes = {
	label: object.isRequired,
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

const Label = ({ label }) => (
	<Wrapper>
		<GitHubLabel color={label.color}>{label.name}</GitHubLabel>
	</Wrapper>
);
Label.propTypes = propTypes;
export default Label;
