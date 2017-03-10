import React, { PropTypes } from 'react';
import uuid from 'uuid/v4';

const { string, bool, arrayOf } = PropTypes;
const propTypes = {
	title: string.isRequired,
	description: string.isRequired,
	category: string.isRequired,
	watched: bool.isRequired,
	categories: arrayOf(string).isRequired,
	onLabelAdd: React.PropTypes.func.isRequired,
	onTitleChange: React.PropTypes.func.isRequired,
	onDescriptionChange: React.PropTypes.func.isRequired,
	onCategoryChange: React.PropTypes.func.isRequired,
	onToggleWatched: React.PropTypes.func.isRequired,
};

const defaultProps = {
	title: '',
	description: '',
	watched: false,
};

const AddLabelForm = ({ title, description, category, watched, categories, onLabelAdd,
		onTitleChange, onDescriptionChange, onCategoryChange, onToggleWatched }) => {
	const addLabel = () => {
		onLabelAdd({ title, description, category, watched });
	};
	const options = (categories.map(cat => <option key={uuid()} value={cat}>{cat}</option>));
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

			<p>Category:</p>
			<select value={category} onChange={event => onCategoryChange(event.target.value)}>
				{options}
			</select>

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
