import fetch from '../utils/fetch';

export const REQUEST_AFFILIATED_REPOSITORIES = 'REQUEST_AFFILIATED_REPOSITORIES';
export const AFFILIATED_REPOSITORIES_RESULT = 'AFFILIATED_REPOSITORIES_RESULT';
export const AFFILIATED_REPOSITORIES_ERROR = 'AFFILIATED_REPOSITORIES_ERROR';

export const REQUEST_LABELS = 'REQUEST_LABELS';
export const LABELS_RESULT = 'LABELS_RESULT';

export const SELECT_REPO = 'SELECT_REPO';

export function selectRepo(repoName) {
	return { type: SELECT_REPO, repoName };
}

export function requestLabels(request) {
	return { type: REQUEST_LABELS, request };
}

export function labelsResponse(result) {
	return { type: LABELS_RESULT, result };
}

export const getLabels = repositoryName => async (dispatch) => {
	try {
		dispatch(requestLabels());
		const labels = await fetch(`repos/${encodeURIComponent(repositoryName)}/labels`);
		dispatch(labelsResponse(labels));
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
