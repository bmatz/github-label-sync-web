import React from 'react';
import { Label } from './Label';
import { AddLabelForm } from './AddLabelForm';

export class App extends React.Component {
	constructor(props) {
		super(props);
		this.handleRemove = this.handleRemove.bind(this);
		this.state = {
			labels: [
				{ title: 'Label 1', description: 'Mein lieblings Laberl' },
				{ title: 'Label 2', description: 'Ein Laberl halt' },
				{},
			],
		};
		this.handleLabelAdd = this.handleLabelAdd.bind(this);
	}
	handleRemove() {
		this.setState({
			labels: this.state.labels.splice(0, this.state.labels.length - 1),
		});
	}

	handleLabelAdd(newLabel) {
		this.setState({
			label: this.state.labels.concat(newLabel),
		});
	}
	render() {
		return (
			<div style={{ padding: '20px' }}>
				<h1>Die Labels</h1>
				<AddLabelForm onLabelAdd={this.handleLabelAdd} />
				<button onClick={this.handleRemove}>Lösche letztes</button>
				{this.state.labels.map((p, i) => <Label title={p.title} description={p.description} nr={i} />)}
			</div>
		);
	}
}

// <button onClick={this.handleRemove.bind(this)}>Lösche letztes</button>
// export default App;
