const api = require('github-label-sync-api');

// const dummytoken = 'dummytoken';
const repositoryName = 'bmatz/github-label-sync-web';

document.write("Webpack is doing its thing.");
// // get affiliated repositories

// async function getRepos() {
// 	try {
// 		const repositories = await api.getAffiliated(token);
// 		console.log(repositories);
// 	} catch (e) {
// 		console.log(e);
// 	}
// }
// getRepos();

// async function getRepo() {
// 	try {
// 		const labels = await api.getLabels(token, repositoryName);
// 		console.log(labels);
// 	} catch (e) {
// 		console.log(e);
// 	}
// }
// getRepo();

// async function createLabel() {
// 	try {
// 		await api.createLabel(token, repositoryName, {
// 			name: 'TestLabel',
// 			color: 'ff0011',
// 		});
// 	} catch (e) {
// 		console.log(e);
// 	}
// }
// createLabel();

// async function createMultibleLabels() {
// 	try {
// 		await api.createLabels(token, repositoryName, [{
// 			name: 'TestLabel',
// 			color: 'ff0011',
// 		}, {
// 			name: 'TestLabel2',
// 			color: 'ff1111',
// 		}]);
// 	} catch (e) {
// 		console.log(e);
// 	}
// }
// createMultibleLabels();

// async function updateLabels() {
// 	try {
// 		await api.updateLabel(token, repositoryName, {
// 			name: 'TestLabel',
// 			color: 'aa2222',
// 		});
// 	} catch (e) {
// 		console.log(e);
// 	}
// }
// updateLabels();

// async function updateMultibleLabels() {
// 	try {
// 		await api.updateLabels(token, repositoryName, [{
// 			name: 'TestLabel',
// 			color: 'aaffff',
// 		}, {
// 			name: 'TestLabel2',
// 			color: 'aaffff',
// 		}]);
// 	} catch (e) {
// 		console.log(e);
// 	}
// }
// updateMultibleLabels();
// async function deleteTheLabel() {
// 	try {
// 		await api.deleteLabel(token, repositoryName, 'TestLabel');
// 	} catch (e) {
// 		console.log(e);
// 	}
// }
// deleteTheLabel();

// async function deleteTheLabels() {
// 	try {
// 		await api.deleteLabels(token, repositoryName, ['TestLabel', 'TestLabel2']);
// 	} catch (e) {
// 		console.log(e);
// 	}
// }
// deleteTheLabels();

//
// // get specific repository (public or one of your affiliated repositories)
// const repository = await api.getRepository(token, repositoryName);
//
// // get a repositories issue labels
// const labels = await api.getLabels(token, repositoryName);
//
// // create a single label
// await api.createLabel(token, repositoryName, {
//   name: 'TestLabel',
//   color: 'ff0011'
// });
//
// // create multiple labels
// await api.createLabels(token, repositoryName, {
//   name: 'TestLabel',
//   color: 'ff0011'
// }, {
//   name: 'TestLabel2',
//   color: 'ff1111'
// });
//
//
// // update a single label
// await api.updateLabel(token, repositoryName, {
//   name: 'TestLabel',
//   color: 'ff0022'
// });
//
// // update multiple labels
// await api.updateLabels(token, repositoryName, {
//   name: 'TestLabel',
//   color: 'ff0022'
// }, {
//   name: 'TestLabel2',
//   color: 'ff1122'
// });
//
//
// // delete a single label
// await api.deleteLabel(token, repositoryName, 'TestLabel');
//
// // delete multiple labels
// await api.deleteLabels(token, repositoryName, ['TestLabel', 'TestLabel2']);
