export const ADD_LABEL = 'ADD_LABEL';
export const REMOVE_LABEL = 'REMOVE_LABEL';
export const TOGGLE_WATCHED = 'TOGGLE_WATCHED';

export const CHANGE_TITLE_FORM = 'CHANGE_TITLE_FORM';
export const CHANGE_DESCRIPTION_FORM = 'CHANGE_DESCRIPTION_FORM';
export const CHANGE_CATEGORY_FORM = 'CHANGE_CATEGORY_FORM';
export const TOGGLE_WATCHED_FORM = 'TOGGLE_WATCHED_FORM';
export const CLEAR_FORM = 'CLEAR_FORM';

export function addLabel(label) {
	return { type: ADD_LABEL, label: label };
}
export function removeLabel(index) {
	return { type: REMOVE_LABEL, index: index };
}
export function toggleWatched(index) {
	return { type: TOGGLE_WATCHED, index: index };
}
export function changeTitle(text) {
	return { type: CHANGE_TITLE_FORM, text: text };
}
export function changeDescription(text) {
	return { type: CHANGE_DESCRIPTION_FORM, text: text };
}
export function changeCategory(text) {
	return { type: CHANGE_CATEGORY_FORM, text: text };
}
export function toggleWatchedForm() {
	return { type: TOGGLE_WATCHED_FORM };
}
export function clearForm() {
	return { type: CLEAR_FORM };
}
