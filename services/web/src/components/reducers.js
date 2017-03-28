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
		case ACTIONS.LABELS_RESULT:
			return Object.assign({}, state, { loading: false, labels: action.result });
		default:
			return state;
	}
};

const repo = (state = { repoName: '' }, action) => {
	switch (action.type) {
		case ACTIONS.SELECT_REPO:
			return Object.assign({}, state, { repoName: action.repoName });
		default:
			return state;
	}
};

const reducers = {
	labels,
	repos,
	repo,
};

export default reducers;
