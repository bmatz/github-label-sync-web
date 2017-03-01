import React from 'react';
import { Product } from './Product';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.products = [
			{ title: 'Holz Stuhl', description: 'Mein lieblings Stuhl' },
			{ title: 'Plastik Stuhl', description: 'Ein Stuhl halt' },
		];
	}
	render() {
		return (
			<div style={{ padding: '20px' }}>
				<h1>Die Produkte</h1>
				{this.products.map((p, i) => <Product title={p.title} description={p.description} nr={i} />)}
			</div>
		);
	}
}

export default App;
