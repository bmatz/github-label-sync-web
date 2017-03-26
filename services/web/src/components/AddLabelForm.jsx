import React, { PropTypes } from 'react';
// import uuid from 'uuid/v4';
// import getrepo from '../helpers/getRepo';

const { string } = PropTypes;
const propTypes = {
	title: string.isRequired,
	description: string.isRequired,
	onLabelAdd: React.PropTypes.func.isRequired,
	onTitleChange: React.PropTypes.func.isRequired,
	onDescriptionChange: React.PropTypes.func.isRequired,
};

const defaultProps = {
	title: '',
	description: '',
	watched: false,
};
// console.log(getrepo);
const AddLabelForm = ({ title, description, onLabelAdd,
		onTitleChange, onDescriptionChange }) => {
	const addLabel = () => {
		onLabelAdd({ title, description });
	};

	return (
		<div
			style={{
				border: '1px solid grey',
				padding: '20px',
				margin: '20px 0 20px',
			}}
		>
			<h2>Hinzufügen eines Labels</h2>

			<p>Titel:</p>
			<input value={title} onChange={event => onTitleChange(event.target.value)} />

			<p>Beschreibung:</p>
			<input value={description} onChange={event => onDescriptionChange(event.target.value)} />

			<br />
			<button onClick={addLabel}>Label hinzufügen</button>
		</div>
	);
};

AddLabelForm.propTypes = propTypes;
AddLabelForm.defaultProps = defaultProps;

export default AddLabelForm;
