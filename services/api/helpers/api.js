// const api = require('github-label-sync-api');
//
// const token = '3d8b9b8f78cadf7e2d99816b5df7c09f91d7498a';


// const repositoryName = 'bmatz/github-label-sync-web';


// const getRepos = async () => {
// 	try {
// 		const repositories = await api.getAffiliated(token);
// 		console.log(repositories);
// 		return repositories;
// 	} catch (e) {
// 		console.log(e);
// 		return e;
// 	}
// };
// module.exports = getRepos;

// module.exports = () => {
// 	return new Promise(async (resolve, reject) => {
// 		try {
// 			const repos = await api.getAffiliated(token);
// 			console.log(repos);
// 			resolve(repos);
// 		} catch (err) {
// 			reject(err);
// 		}
// 	});
// };


// module.exports = () => {
// 	const fortunes = [
// 		'Heisenberg may have slept here...',
// 		'Wanna buy a duck?',
// 		'Say no, then negotiate.',
// 		'Time and tide wait for no man.',
// 		'To teach is to learn.',
// 		'Never ask the barber if you need a haircut.',
// 		'You will forget that you ever knew me.',
// 		'You will be run over by a beer truck.',
// 		'Fortune favors the lucky.',
// 		'Have a nice day!',
// 	];
// 	const x = Math.floor(Math.random() * fortunes.length);
// 	return fortunes[x];
// };


// module.exports = () => {
// 	const getRepos = async () => {
// 		try {
// 			const repositories = await api.getAffiliated(token);
// 			console.log(repositories);
// 			return repositories;
// 		} catch (e) {
// 			console.log(e);
// 			return e;
// 		}
// 	};
// 	return getRepos;
// };

// async function getRepos() {
// 	try {
// 		const repositories = await api.getAffiliated(token);
// 		console.log(repositories);
// 	} catch (e) {
// 		console.log(e);
// 	}
// }
// getRepos();
