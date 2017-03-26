import * as ACTIONS from './actions';

const addLabelForm = (state = {}, action) => {
	switch (action.type) {
		case ACTIONS.CHANGE_TITLE_FORM:
			return Object.assign({}, state, { title: action.text });
		case ACTIONS.CHANGE_DESCRIPTION_FORM:
			return Object.assign({}, state, { description: action.text });
		case ACTIONS.TOGGLE_WATCHED_FORM:
			return Object.assign({}, state, { watched: !state.watched });
		case ACTIONS.CLEAR_FORM:
			return Object.assign({}, state, { title: '', description: '', watched: false });
		default:
			return state;
	}
};

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
	addLabelForm,
	labels,
	repos,
	repo,
};

export default reducers;
