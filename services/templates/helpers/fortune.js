module.exports = () => {
	const fortunes = [
		'Heisenberg may have slept here...',
		'Wanna buy a duck?',
		'Say no, then negotiate.',
		'Time and tide wait for no man.',
		'To teach is to learn.',
		'Never ask the barber if you need a haircut.',
		'You will forget that you ever knew me.',
		'You will be run over by a beer truck.',
		'Fortune favors the lucky.',
		'Have a nice day!',
	];
	const x = Math.floor(Math.random() * fortunes.length);
	return fortunes[x];
};
const api = require('github-label-sync-api');

const repositoryName = 'bmatz/github-label-sync-web';
const token = 'bd0e0d0cb5516461030370631770a1d79f0fca52';

// module.exports = () => {
// 	return new Promise(async (resolve, reject) => {
// 		try {
// 			const repos = await api.getAffiliated(token);
// 			// console.log(repos);
// 			test(repos);
// 			resolve(spezrepos);
// 		} catch (err) {
// 			reject(err);
// 		}
// 	});
// };

// module.exports = () => {
// 	return new Promise(async (resolve, reject) => {
// 		try {
// 			const labels = await api.getLabels(token, repositoryName);
// 			console.log(labels);
// 			resolve(labels);
// 		} catch (err) {
// 			reject(err);
// 		}
// 	});
// };
