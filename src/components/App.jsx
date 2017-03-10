import React, { PropTypes } from 'react';
import { ReduxAddLabelForm } from './ReduxAddLabelForm';
import { ReduxLabel } from './ReduxLabel';

const { func, array } = PropTypes;
const propTypes = {
	onLabelRemove: func.isRequired,
	labels: array.isRequired,
};

export class App extends React.Component {

	render() {
		if (!this.props) {
			return null;
		}
		return (
			<div style={{ padding: '20px' }}>
				<h1>Die Labels</h1>
				<ReduxAddLabelForm />
				<button onClick={() => this.props.onLabelRemove(0)}>Lösche Erstes</button>
				{this.props.labels.map((p, i) => <ReduxLabel key={p.id} title={p.title} description={p.description} nr={i} />)}
			</div>
		);
	}
}

App.propTypes = propTypes;
