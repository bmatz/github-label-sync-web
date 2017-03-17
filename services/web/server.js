const Hapi = require('hapi');
const Good = require('good');
const Hoek = require('hoek');
const handlebars = require('handlebars');
const inert = require('inert');
const { version } = require('./package.json');

const server = new Hapi.Server();
server.connection({
	port: 3000,
	host: 'localhost',
});
server.register(inert, () => {});

server.register(require('vision'), (err) => {
	Hoek.assert(!err, err);
	server.views({
		engines: {
			html: handlebars,
		},
		relativeTo: __dirname,
	});
	server.route({
		method: 'GET',
		path: '/',
		handler: (request, reply) => {
			reply.view('src/index', { version });
		},
	});
	server.route({
		method: 'GET',
		path: '/{param*}',
		handler: {
			directory: {
				path: './dist',
				redirectToSlash: true,
				index: true,
			},
		},
	});
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
