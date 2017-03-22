import React from 'react';
import { Link } from 'react-router5';

const divStyle = { border: '1px solid grey', padding: '20px', margin: '20px 0 20px 0' };
const LinkStyle = { activeStyle: { color: 'red' } };

const Navigation = () => (
	<div>
		<div style={divStyle}>
			<h1>Das ist die Hauptseite</h1>
			<p>mit Navigation</p>
			<ul>
				<li><Link routeName="greeting" routeParams={{ firstname: 'hans', lastname: 'predony' }} {...LinkStyle}>Willkommen</Link></li>
				<li><Link routeName="dashboard" {...LinkStyle}>Verfügbare Labels</Link></li>
			</ul>
		</div>
	</div>
);

export default Navigation;
