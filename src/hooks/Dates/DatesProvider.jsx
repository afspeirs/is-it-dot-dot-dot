import PropTypes from 'prop-types';

import DatesContext from './DatesContext';
import DatesValue from './DatesValue';

const propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
};

const DatesProvider = ({ children }) => {
	const value = DatesValue();
	return (
		<DatesContext.Provider value={value}>
			{children}
		</DatesContext.Provider>
	);
};

DatesProvider.propTypes = propTypes;

export default DatesProvider;
