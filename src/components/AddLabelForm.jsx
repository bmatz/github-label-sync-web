import React, { PropTypes, Component } from 'react';

const { string, bool } = PropTypes;
const propTypes = {
	title: string.isRequired,
	description: string.isRequired,
	category: string.isRequired,
	watched: bool.isRequired,
	onLabelAdd: React.PropTypes.func.isRequired,
	onTitleChange: React.PropTypes.func.isRequired,
	onDescriptionChange: React.PropTypes.func.isRequired,
	onCategoryChange: React.PropTypes.func.isRequired,
	onToggleWatched: React.PropTypes.func.isRequired,
};

export class AddLabelForm extends Component {
	// static get propTypes() {
	// 	return {
	// 		onLabelAdd: React.PropTypes.func.isRequired,
	// 		onTitleChange: React.PropTypes.func.isRequired,
	// 		onDescriptionChange: React.PropTypes.func.isRequired,
	// 		onCategoryChange: React.PropTypes.func.isRequired,
	// 		onToggleWatched: React.PropTypes.func.isRequired,
	// 	};
	// }

	render() {
		if (!this.props) {
			return null;
		}
		const addLabel = () => {
			const { title, description, category, watched } = this.props;
			this.props.onLabelAdd({ title, description, category, watched });
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
				<input value={this.props.title} onChange={event => this.props.onTitleChange(event.target.value)} />

				<p>Beschreibung:</p>
				<input value={this.props.description} onChange={event => this.props.onDescriptionChange(event.target.value)} />

				<p>Category:</p>
				<select value={this.props.category} onChange={event => this.props.onCategoryChange(event.target.value)}>
					<option value="Warning">Warning</option>
					<option value="Error">Error</option>
					<option value="Info">Info</option>
				</select>

				<br />
				<input
					type="checkbox" value={this.props.watched}
					onChange={event => this.props.onToggleWatched(event.target.checked)}
				/>
				Watched?

				<br />
				<button onClick={addLabel}>Label hinzufügen</button>
			</div>
		);
	}

}

AddLabelForm.propTypes = propTypes;
