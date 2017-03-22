export default [
	{
		name: 'dashboard',
		path: '/labels/add',
	}, {
		name: 'greeting',
		path: '/greeting/:firstname/:lastname',
	}, {
		name: 'fu',
		path: '/fu',
		children: [{
			name: 'bar',
			path: '/bar',
		}, {
			name: 'specialbar',
			path: '/:barId',
		}],
	},
];
