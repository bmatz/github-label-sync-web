import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = (state) => {
	return {
		labels: state.labels,
		repos: state.repos.repos,
		loading: state.repos.loading,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		dispatch,
	};
};

const ReduxApp = connect(mapStateToProps, mapDispatchToProps)(App);
export { ReduxApp };
