// import React, { PropTypes } from 'react';
import React from 'react';
import { ReduxAddLabelForm } from './ReduxAddLabelForm';
import { ReduxLabel } from './ReduxLabel';

// const { string } = PropTypes;
// const propTypes = {
// 	onLabelRemove: string.isRequired,
// 	labels: string.isRequired,
// };

export class App extends React.Component {

	static get propTypes() {
		return {
			onLabelRemove: React.PropTypes.func.isRequired,
			labels: React.PropTypes.func.isRequired,
		};
	}

	render() {
		if (!this.props) {
			return null;
		}
		return (
			<div style={{ padding: '20px' }}>
				<h1>Die Labels</h1>
				<ReduxAddLabelForm />
				<button onClick={() => this.props.onLabelRemove(0)}>Lösche letztes</button>
				{this.props.labels.map((p, i) => <ReduxLabel key={p.id} title={p.title} description={p.description} nr={i} />)}
			</div>
		);
	}
}

// App.propTypes = propTypes;
