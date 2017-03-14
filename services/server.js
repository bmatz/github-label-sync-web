const Hapi = require('hapi');
const Good = require('good');
// const Path = require('path');
// const api = require('github-label-sync-api');
// const hanlebars = require('hanlebars');
const api = require('./api/api');

const server = new Hapi.Server();
server.connection({
	port: 3000,
});

// server.route({
// 	method: 'GET',
// 	path: '/',
// 	handler: (request, reply) => {
// 		reply('Hello, world!');
// 	},
// });

// server.route({
// 	method: 'GET',
// 	path: '/{name}',
// 	handler: (request, reply) => {
// 		reply(`Hello, ${encodeURIComponent(request.params.name)} !`);
// 	},
// });


// server.route({
// 	method: 'GET',
// 	path: '/hello/{user?}',
// 	handler: (request, reply) => {
// 		const user = request.params.user ? encodeURIComponent(request.params.user) : 'stranger';
// 		reply(`Hello ${user} !`);
// 	},
// });

server.route({
	method: 'GET',
	path: '/api',
	handler: (request, reply) => {
		reply({
			statusCode: 200,
			message: 'Das Repo',
			config: {
				tags: ['api'],
			},
		});
	},
});

server.register([
{
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
},
], (err) => {
	if (err) {
		throw err; // something bad happened loading the plugin
	}

	server.start((errServer) => {
		if (errServer) {
			throw err;
		}
		server.log('info', `Server running at: ${server.info.uri}`);
	});
});
