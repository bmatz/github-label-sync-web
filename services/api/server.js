const Hapi = require('hapi');
const Good = require('good');
const Hoek = require('hoek');
const registerRoutes = require('./routes');

const server = new Hapi.Server();
server.connection({
	port: 3000,
	host: 'localhost',
});

server.register(require('vision'), (err) => {
	Hoek.assert(!err, err);
	registerRoutes(server);
});

server.register({
	register: Good,
	options: {
		reporters: {
			console: [{
				module: 'good-squeeze',
				name: 'Squeeze',
				args: [{
					response: '*',
					log: '*',
				}],
			}, {
				module: 'good-console',
			}, 'stdout'],
		},
	},
}, (err) => {
	if (err) {
		throw err;
	}
	server.start((errServer) => {
		if (errServer) {
			throw errServer;
		}
		server.log('info', `Server running at: ${server.info.uri}`);
	});
});
