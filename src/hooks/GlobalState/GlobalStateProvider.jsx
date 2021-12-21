import { useReducer } from 'react';
import PropTypes from 'prop-types';

import reducer from './reducer';
import GlobalStateContext from './GlobalStateContext';

const propTypes = {
	children: PropTypes.node.isRequired,
	initialState: PropTypes.objectOf(PropTypes.any).isRequired,
};

const GlobalStateProvider = ({ children, initialState }) => (
	<GlobalStateContext.Provider value={useReducer(reducer, initialState)}>
		{children}
	</GlobalStateContext.Provider>
);

GlobalStateProvider.propTypes = propTypes;

export default GlobalStateProvider;
