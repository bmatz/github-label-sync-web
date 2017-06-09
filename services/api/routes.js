const api = require('github-label-sync-api');
const config = require('./config');

module.exports = (server) => {
	server.route({
		method: 'GET',
		path: '/repos',
		handler: async (request, reply) => {
			try {
				const repositories = await api.getAffiliated(config.token);
				reply(repositories);
			} catch (err) {
				console.error(err);
				reply(err.toString()).code(500);
			}
		},
	});
	server.route({
		method: 'GET',
		path: '/repos/{repositoryName}/labels',
		handler: async (request, reply) => {
			try {
				const label = await api.getLabels(config.token, request.params.repositoryName);
				reply(label);
			} catch (err) {
				console.error(err);
				reply(err.toString()).code(500);
			}
		},
	});

	server.route({
		method: 'POST',
		path: '/repos/{repositoryName}/labels',
		handler: async (request, reply) => {
			try {
				const moveLabel = await api.createLabel(config.token, request.params.repositoryName, {
					name: request.payload.name,
					color: request.payload.color,
				});
				reply(moveLabel);
			} catch (err) {
				console.error(err);
				reply(err.toString()).code(500);
			}
		},
	});
};

// async function createLabel() {
// 	try {
// 		await api.createLabel(config.token, repositoryName, {
// 			name: 'TestLabel',
// 			color: 'ff0011',
// 		});
// 	} catch (e) {
// 		console.log(e);
// 	}
// }
