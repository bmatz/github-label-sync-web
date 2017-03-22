import { connect } from 'react-redux';
import { Label } from './Label';
import * as ACTIONS from './actions';

const mapStateToProps = (state, ownProps) => {
	return {
		title: state.labels[ownProps.nr].title,
		description: state.labels[ownProps.nr].description,
		watched: state.labels[ownProps.nr].watched,
		category: state.labels[ownProps.nr].category,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onToggleWatched: (index) => {
			dispatch(ACTIONS.toggleWatched(index));
		},
	};
};

const LabelContainer = connect(mapStateToProps, mapDispatchToProps)(Label);
export default LabelContainer;
