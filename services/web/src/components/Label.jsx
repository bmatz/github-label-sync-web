import React, { PropTypes, Component } from 'react';

const { number, string, bool, func } = PropTypes;
const propTypes = {
	nr: number.isRequired,
	title: string.isRequired,
	description: string.isRequired,
	watched: bool.isRequired,
	onToggleWatched: func.isRequired,
};

const defaultProps = {
	title: 'Keinen Titel',
	description: 'Dieses Label hat keine Beschreibung',
	watched: false,
};

export class Label extends Component {

	render() {
		if (!this.props) {
			return null;
		}
		const watched = this.props.watched;
		const toggleWatch = () => {
			this.props.onToggleWatched(this.props.nr);
		};
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
				<p>
					<button onClick={toggleWatch}>{watched ? 'Unwatched' : 'Watch!'}</button>
					{watched ? ' Du beobachtest das Label' : ''}
				</p>
			</div>
		);
	}
}

Label.propTypes = propTypes;
Label.defaultProps = defaultProps;
