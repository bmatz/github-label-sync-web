import fetch from '../utils/fetch';

export const REQUEST_AFFILIATED_REPOSITORIES = 'REQUEST_AFFILIATED_REPOSITORIES';
export const AFFILIATED_REPOSITORIES_RESULT = 'AFFILIATED_REPOSITORIES_RESULT';
export const AFFILIATED_REPOSITORIES_ERROR = 'AFFILIATED_REPOSITORIES_ERROR';

export const REQUEST_LABELS = 'REQUEST_LABELS';
export const LABELS_RESULT = 'LABELS_RESULT';
export const TARGET_LABELS_RESULT = 'TARGET_LABELS_RESULT';

export const REQUEST_LABELS_TARGET = 'REQUEST_LABELS_TARGET';
export const LABELS_RESULT_TARGET = 'LABELS_RESULT_TARGET';

export const SELECT_REPO_SOURCE = 'SELECT_REPO_SOURCE';
export const SELECT_REPO_TARGET = 'SELECT_REPO_TARGET';

export const SAVE_TOKEN = 'SAVE_TOKEN';
export const LOAD_TOKEN = 'LOAD_TOKEN';

export const MOVE_LABEL_BEFOR = 'MOVE_LABEL_BEFOR';
export const MOVE_LABEL_AFTER = 'MOVE_LABEL_AFTER';

// export function moveLabel(label) {
// 	return { type: MOVE_LABEL, label };
// }

export function moveLabelBefor() {
	return { type: MOVE_LABEL_BEFOR };
}

export function moveLabelAfter(result) {
	return { type: MOVE_LABEL_AFTER, result };
}

export const moveLabel = (repositoryName, label) => async (dispatch) => {
	console.log(repositoryName);
	try {
		dispatch(moveLabelBefor());
		await fetch(`repos/${encodeURIComponent(repositoryName)}/labels`, { method: 'POST', body: JSON.stringify(label) });
		dispatch(moveLabelAfter(label));
	} catch (err) {
		dispatch(moveLabelAfter(err));
	}
};


// TOKEN als cookie
export function saveToken(token) {
	return { type: SAVE_TOKEN, token };
}

export function loadToken(token) {
	return { type: LOAD_TOKEN, token };
}

export function selectRepoSource(repoName) {
	return { type: SELECT_REPO_SOURCE, repoName };
}

export function selectRepoTarget(repoName) {
	return { type: SELECT_REPO_TARGET, repoName };
}


export function requestLabels(request) {
	return { type: REQUEST_LABELS, request };
}

export function labelsResponse(result) {
	return { type: LABELS_RESULT, result };
}

export function targetLabelsResponse(result) {
	return { type: TARGET_LABELS_RESULT, result };
}


export function requestLabelsTarget(request) {
	return { type: REQUEST_LABELS_TARGET, request };
}

export function labelsResponseTarget(result) {
	return { type: LABELS_RESULT_TARGET, result };
}

export const getLabels = (repositoryName, repoType) => async (dispatch) => {
	try {
		dispatch(requestLabels());
		const labels = await fetch(`repos/${encodeURIComponent(repositoryName)}/labels`);
		if (repoType === 'source') {
			dispatch(labelsResponse(labels));
		} else {
			dispatch(targetLabelsResponse(labels));
		}
	} catch (err) {
		dispatch(labelsResponse(err));
	}
};

export function requestAffiliatedRepositories() {
	return { type: REQUEST_AFFILIATED_REPOSITORIES };
}

export function onReposResponse(result) {
	return { type: AFFILIATED_REPOSITORIES_RESULT, result };
}

// export const getRepos = (token) => async (dispatch) => {
export const getRepos = () => async (dispatch) => {
	try {
		dispatch(requestAffiliatedRepositories());
		const repos = await fetch('repos');
		dispatch(onReposResponse(repos));
	} catch (err) {
		dispatch(onReposResponse(err));
	}
};
