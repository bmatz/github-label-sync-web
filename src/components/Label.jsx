import React, { PropTypes, Component } from 'react';

const { number, string, bool } = PropTypes;
const propTypes = {
	nr: number.isRequired,
	title: string.isRequired,
	description: string.isRequired,
	category: string.isRequired,
	watched: bool.isRequired,
};

const defaultProps = {
	title: 'Keinen Titel',
	description: 'Dieses Label hat keine Beschreibung',
	watched: false,
	category: 'warning',
};

export class Label extends Component {
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
				}}
				className="prod"
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

Label.propTypes = propTypes;
Label.defaultProps = defaultProps;
