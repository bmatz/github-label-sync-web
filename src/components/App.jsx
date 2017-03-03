import React from 'react';
import { Label } from './Label';
import { AddLabelForm } from './AddLabelForm';

export class App extends React.Component {
	constructor(props) {
		super(props);
		this.handleRemove = this.handleRemove.bind(this);
		this.state = {
			labels: [
				{ id: '123', title: 'Label 1', description: 'Mein lieblings Laberl' },
				{ id: '124', title: 'Label 2', description: 'Ein Laberl halt' },
				{ id: '125' },
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
			labels: this.state.labels.concat(newLabel),
		});
	}
	render() {
		return (
			<div style={{ padding: '20px' }}>
				<h1>Die Labels</h1>
				<AddLabelForm onLabelAdd={this.handleLabelAdd} />
				<button onClick={this.handleRemove}>Lösche letztes</button>
				{this.state.labels.map((p, i) => <Label key={p.id} title={p.title} description={p.description} nr={i} />)}
			</div>
		);
	}
}

// <button onClick={this.handleRemove.bind(this)}>Lösche letztes</button>
// export default App;
