import React from 'react';

class ButtonCounter extends React.Component {

	constructor(props) {
		super(props);
		this.state = { message: 'Hallo' };
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		alert(this.state.message);
	}

	render() {
		return (
			<div>
				<button onClick={this.handleClick}>
					Sag Hallo
				</button>
			</div>
		);
	}
}

export default ButtonCounter;
