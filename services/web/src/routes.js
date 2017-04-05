export default [
	{
		name: 'dashboard',
		path: '/labels/add',
	}, {
		name: 'greeting',
		path: '/greeting/',
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
