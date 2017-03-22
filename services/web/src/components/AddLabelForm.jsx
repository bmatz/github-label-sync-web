import React, { PropTypes } from 'react';
// import uuid from 'uuid/v4';
// import getrepo from '../helpers/getRepo';

const { string, bool } = PropTypes;
const propTypes = {
	title: string.isRequired,
	description: string.isRequired,
	watched: bool.isRequired,
	onLabelAdd: React.PropTypes.func.isRequired,
	onTitleChange: React.PropTypes.func.isRequired,
	onDescriptionChange: React.PropTypes.func.isRequired,
	onToggleWatched: React.PropTypes.func.isRequired,
};

const defaultProps = {
	title: '',
	description: '',
	watched: false,
};
// console.log(getrepo);
const AddLabelForm = ({ title, description, watched, onLabelAdd,
		onTitleChange, onDescriptionChange, onToggleWatched }) => {
	const addLabel = () => {
		onLabelAdd({ title, description, watched });
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
			<input
				type="checkbox" value={watched}
				onChange={event => onToggleWatched(event.target.checked)}
			/>
				Watched?

				<br />
			<button onClick={addLabel}>Label hinzufügen</button>
		</div>
	);
};

AddLabelForm.propTypes = propTypes;
AddLabelForm.defaultProps = defaultProps;

export default AddLabelForm;
