import { connect } from 'react-redux';
import App from './App';
import * as ACTIONS from './actions';

const mapStateToProps = (state) => {
	return {
		labels: state.labels,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onLabelRemove: (index) => {
			dispatch(ACTIONS.removeLabel(index));
		},
	};
};

const ReduxApp = connect(mapStateToProps, mapDispatchToProps)(App);
export { ReduxApp };
