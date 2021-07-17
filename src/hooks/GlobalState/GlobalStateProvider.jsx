import { useReducer } from 'react';
import PropTypes from 'prop-types';

import { initialState, reducer } from '@/reducer';
import GlobalStateContext from './GlobalStateContext';

const propTypes = {
	children: PropTypes.node.isRequired,
};

const GlobalStateProvider = ({ children }) => (
	<GlobalStateContext.Provider value={useReducer(reducer, initialState)}>
		{children}
	</GlobalStateContext.Provider>
);

GlobalStateProvider.propTypes = propTypes;

export default GlobalStateProvider;
