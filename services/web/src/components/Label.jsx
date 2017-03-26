import React, { PropTypes, Component } from 'react';

const { number, string } = PropTypes;
const propTypes = {
	nr: number.isRequired,
	title: string.isRequired,
	description: string.isRequired,
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
			</div>
		);
	}
}

Label.propTypes = propTypes;
Label.defaultProps = defaultProps;
