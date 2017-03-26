const Hapi = require('hapi');
const corsHeaders = require('hapi-cors-headers');
const Good = require('good');
const Hoek = require('hoek');
const registerRoutes = require('./routes');

const server = new Hapi.Server();
server.connection({
	port: 3010,
	host: 'localhost',
	routes: {
		cors: true,
	},
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
	server.ext('onPreResponse', corsHeaders);
	server.start((errServer) => {
		if (errServer) {
			throw errServer;
		}
		server.log('info', `Server running at: ${server.info.uri}`);
	});
});
