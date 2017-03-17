const Hapi = require('hapi');
const Good = require('good');
const Hoek = require('hoek');
const pug = require('pug');
// const Path = require('path');
// const api = require('github-label-sync-api');
// const handlebars = require('handlebars');
// const api = require('./api/api');

const server = new Hapi.Server();
server.connection({
	port: 3000,
	host: 'localhost',
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
// 		reply(`Hello, ${encodeURIComponent(request.params.name)}!`);
// 	},
// });

// server.register(require('vision'), (err) => {
// 	Hoek.assert(!err, err);
//
// 	server.views({
// 		engines: {
// 			html: handlebars,
// 		},
// 		relativeTo: __dirname,
// 		path: 'templates',
// 		helpersPath: 'templates/helpers',
// 	});
//
// 	server.route({
// 		method: 'GET',
// 		path: '/hit',
// 		handler: function (request, reply) {
// 			reply.view('index.html');
// 		},
// 	});
// });

server.register(require('vision'), (err) => {
	Hoek.assert(!err, err);

	server.views({
		engines: {
			pug: {
				module: pug,
			},
		},
		relativeTo: __dirname,
		path: 'templates',
		helpersPath: 'templates/helpers',
	});

	server.route({
		method: 'GET',
		path: '/hit',
		handler: (request, reply) => {
			reply.view('index.pug');
		},
	});
});

// server.start();

// server.register(require('inert'), (err) => {
// 	if (err) {
// 		throw err;
// 	}
// 	server.route({
// 		method: 'GET',
// 		path: '/hello',
// 		handler: (request, reply) => {
// 			reply.file('./api/test.html');
// 		},
// 	});
// });
//
// server.route({
// 	method: 'GET',
// 	path: '/lol',
// 	handler: {
// 		file: {
// 			path: './api/lol.js',
// 		},
// 	},
// });
//
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
