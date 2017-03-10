import React, { PropTypes } from 'react';
import uuid from 'uuid/v4';
import { ReduxAddLabelForm } from './ReduxAddLabelForm';
import { ReduxLabel } from './ReduxLabel';

const { func, array } = PropTypes;
const propTypes = {
	onLabelRemove: func.isRequired,
	labels: array.isRequired,
};

const App = ({ labels, onLabelRemove }) => (
	<div style={{ padding: '20px' }}>
		<h1>Die Labels</h1>
		<ReduxAddLabelForm />
		<button onClick={() => onLabelRemove(0)}>Lösche Erstes</button>
		{labels.map((l, i) => <ReduxLabel key={uuid()} title={l.title} description={l.description} nr={i} />)}
	</div>
);


App.propTypes = propTypes;
export default App;
