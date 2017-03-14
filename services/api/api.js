const api = require('github-label-sync-api');

// const token = '../../.githubtoken';
const token = 'HTqI4168jk540maMU37r';
// const repositoryName = 'bmatz/github-label-sync-web';

// document.write('Webpack is doing its thing.');
// get affiliated repositories

const getRepos = async () => {
	try {
		const repositories = await api.getAffiliated(token);
		console.log(repositories);
	} catch (e) {
		console.log(e);
	}
};
module.exports = getRepos;

// exports.register = function (server, options, next) {
// 
//     server.route({
//         method: 'GET',
//         path: '/test',
//         handler: function (request, reply) {
//             reply('test passed');
//         }
//     });
//
//     next();
// };
//
// exports.register.attributes = {
//     pkg: require('../../package.json')
// };
