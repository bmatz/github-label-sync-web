import React from 'react';

export class Label extends React.Component {
	static get defaultProps() {
		return {
			title: 'Keinen Titel',
			description: 'Dieses Label hat keine Beschreibung',
			watched: false,
			category: 'warning',
		};
	}
	constructor(props) {
		super(props);
		this.state = {
			watched: props.watched,
		};
		this.handleWatchClick = this.handleWatchClick.bind(this);
	}

	handleWatchClick() {
		this.setState({
			watched: !this.state.watched,
		});
	}

	render() {
		const watched = this.state.watched;
		return (
			<div
				style={{ border: '1px solid grey',
					padding: '20px',
					margin: '20px 0 20px 0',
				}} className="prod"
			>
				<h2>{this.props.nr + 1}. {this.props.title}</h2>
				<p>{this.props.description}</p>
				<p>Category: {this.props.category}</p>
				<p>
					<button onClick={this.handleWatchClick}>{watched ? 'Unwatched' : 'Watch!'}</button>
					{watched ? ' Du beobachtest das Label' : ''}
				</p>
			</div>
		);
	}
}

Label.propTypes = {
	nr: React.PropTypes.number.isRequired,
	title: React.PropTypes.string.isRequired,
	description: React.PropTypes.string.isRequired,
	category: React.PropTypes.string.isRequired,
	watched: React.PropTypes.bool.isRequired,
};
