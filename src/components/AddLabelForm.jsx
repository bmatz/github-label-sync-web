import React from 'react';

export class AddLabelForm extends React.Component {

	static get propTypes() {
		return {
			onLabelAdd: React.PropTypes.func.isRequired,
		};
	}
	constructor(props) {
		super(props);
		this.state = {};

		this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.handleWachedChange = this.handleWachedChange.bind(this);
		this.handleCategoryChange = this.handleCategoryChange.bind(this);
		this.handleLabelAdd = this.handleLabelAdd.bind(this);
	}

	handleDescriptionChange(event) {
		this.setState({
			description: event.target.value,
		});
	}

	handleTitleChange(event) {
		this.setState({
			title: event.target.value,
		});
	}

	handleWachedChange(event) {
		this.setState({
			watched: event.target.checked,
		});
	}

	handleCategoryChange(event) {
		this.setState({
			category: event.target.value,
		});
	}

	handleLabelAdd() {
		this.props.onLabelAdd(this.state);
		this.setState({
			title: undefined,
			state: undefined,
			watched: false,
			category: 'Warning',
		});
	}

	render() {
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
				<input value={this.state.title} onChange={this.handleTitleChange} />

				<p>Beschreibung:</p>
				<input value={this.state.description} onChange={this.handleDescriptionChange} />

				<p>Category:</p>
				<select value={this.state.category} onChange={this.handleCategoryChange}>
					<option value="Warning">Warning</option>
					<option value="Error">Error</option>
					<option value="Info">Info</option>
				</select>

				<br />
				<input type="checkbox" value={this.state.watched} onChange={this.handleWachedChange} />
				Watched?

				<br />
				<button onClick={this.handleLabelAdd}>Label hinzufügen</button>
			</div>
		);
	}

}
