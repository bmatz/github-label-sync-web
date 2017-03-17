import { combineReducers } from 'redux';
import * as ACTIONS from './actions';

const addLabelForm = (state = {}, action) => {
	switch (action.type) {
		case ACTIONS.CHANGE_TITLE_FORM:
			return Object.assign({}, state, { title: action.text });
		case ACTIONS.CHANGE_DESCRIPTION_FORM:
			return Object.assign({}, state, { description: action.text });
		case ACTIONS.CHANGE_CATEGORY_FORM:
			return Object.assign({}, state, { category: action.text });
		case ACTIONS.TOGGLE_WATCHED_FORM:
			return Object.assign({}, state, { watched: !state.watched });
		case ACTIONS.CLEAR_FORM:
			return Object.assign({}, state, { title: '', description: '', watched: false, category: state.categories[0] });
		default:
			return state;
	}
};

const labels = (state = [{ title: 'lab1', description: 'lab2' }], action) => {
	switch (action.type) {
		case ACTIONS.ADD_LABEL:
			return state.concat(action.label);
		case ACTIONS.REMOVE_LABEL:
			return state.filter((p, i) => i !== action.index);
		case ACTIONS.TOGGLE_WATCHED:
			return state.map((p, i) => {
				if (action.index === i) {
					return Object.assign({}, p, { watched: !p.watched });
				}
				return p;
			});
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

const reducers = combineReducers({
	addLabelForm,
	labels,
	repos,
});

export default reducers;
