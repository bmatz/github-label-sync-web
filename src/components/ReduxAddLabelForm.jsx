import { connect } from 'react-redux';
import { AddLabelForm } from './AddLabelForm';
import * as ACTIONS from './actions';

const mapStateToProps = (state) => {
	return {
		title: state.addLabelForm.title,
		description: state.addLabelForm.description,
		watched: state.addLabelForm.watched,
		category: state.addLabelForm.category,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onTitleChange: (text) => {
			dispatch(ACTIONS.changeTitle(text));
		},
		onDescriptionChange: (text) => {
			dispatch(ACTIONS.changeDescription(text));
		},
		onCategoryChange: (text) => {
			dispatch(ACTIONS.changeCategory(text));
		},
		onToggleWatched: () => {
			dispatch(ACTIONS.toggleWatchedForm());
		},
		onLabelAdd: (label) => {
			dispatch(ACTIONS.addLabel(label));
			dispatch(ACTIONS.clearForm());
		},
	};
};

const ReduxAddLabelForm = connect(mapStateToProps, mapDispatchToProps)(AddLabelForm);
export { ReduxAddLabelForm };
