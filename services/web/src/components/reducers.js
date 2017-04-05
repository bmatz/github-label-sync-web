import * as ACTIONS from './actions';

const repos = (state = { loading: false, repos: [] }, action) => {
	switch (action.type) {
		case ACTIONS.REQUEST_AFFILIATED_REPOSITORIES:
			return Object.assign({}, state, { loading: true });
		case ACTIONS.AFFILIATED_REPOSITORIES_RESULT:
			return Object.assign({}, state, { loading: false, repos: action.result });
		case ACTIONS.AFFILIATED_REPOSITORIES_ERROR:
			return Object.assing({}, state, { loading: false, repos: [], error: action.result });
		default:
			return state;
	}
};

const labels = (state = { loading: false, labels: [] }, action) => {
	switch (action.type) {
		case ACTIONS.REQUEST_LABELS:
			return Object.assign({}, state, { loading: true });
		default:
			return state;
	}
};

const labelsTarget = (state = { loading: false, labels: [] }, action) => {
	switch (action.type) {
		case ACTIONS.REQUEST_LABELS:
			return Object.assign({}, state, { loading: true });
		default:
			return state;
	}
};

const repoSource = (state = { repoName: '', labels: [] }, action) => {
	switch (action.type) {
		case ACTIONS.SELECT_REPO_SOURCE:
			return Object.assign({}, state, { repoName: action.repoName });
		case ACTIONS.LABELS_RESULT:
			return Object.assign({}, state, { labels: action.result });
		default:
			return state;
	}
};

const repoTarget = (state = { repoName: '', labels: [] }, action) => {
	switch (action.type) {
		case ACTIONS.SELECT_REPO_TARGET:
			return Object.assign({}, state, { repoName: action.repoName });
		case ACTIONS.TARGET_LABELS_RESULT:
			return Object.assign({}, state, { labels: action.result });
		default:
			return state;
	}
};

const saveToken = (state = { token: [] }, action) => {
	switch (action.type) {
		case ACTIONS.SAVE_TOKEN:
			return Object.assign({}, state, { token: action.token });
		default:
			return state;
	}
};


const reducers = {
	labels,
	labelsTarget,
	repos,
	repoSource,
	repoTarget,
	saveToken,
	// loadToken,
};

export default reducers;
