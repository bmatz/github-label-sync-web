import React from 'react';

class ButtonCounter extends React.Component {

	constructor() {
		super();
		this.add = console.log('add 1!');
	}

	render() {
		return <div><h1>Counter</h1> <button onClick={this.add}>+</button> </div>;
	}
}

export default ButtonCounter;
