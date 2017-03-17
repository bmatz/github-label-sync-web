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
};
