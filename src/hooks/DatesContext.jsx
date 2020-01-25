import React, {
	createContext,
	useContext,
	useEffect,
	useState,
} from 'react';
import PropTypes from 'prop-types';

import dates from '../dates';
import { getCurrentDate } from '../utils';

const DatesContext = createContext();

// Hook for child components to get the dates object and re-render when it changes.
export const useDates = () => useContext(DatesContext);

// Provider hook that creates dates object and handles state
function useDatesProvider() {
	const [currentDate, setCurrentDate] = useState(getCurrentDate);
	const [textYes] = useState('YES');
	const [textNo] = useState('NO');

	const isToday = (date) => {
		const matchDay = currentDate.day === date.day;
		const matchMonth = currentDate.month === date.month;

		if (matchDay && matchMonth) {
			return (date.value || textYes);
		}
		return (date.value || textNo);
	};

	// Only update the date variable if the date changes
	useEffect(() => {
		const now = getCurrentDate();
		const interval = setInterval(() => {
			if (JSON.stringify(currentDate) !== JSON.stringify(now)) {
				setCurrentDate(getCurrentDate);
			}
		}, 1000);
		return () => clearInterval(interval);
	}, []); // eslint-disable-line

	// // Update the text if one of the dates is today
	// useEffect(() => {
	// 	// console.log(currentDate);

	// 	dates.forEach((event) => {
	// 		// console.log(event);
	// 		const matchDay = event.day === currentDate.day;
	// 		const matchMonth = event.month === currentDate.month;

	// 		if (matchDay && matchMonth) {
	// 			setText(event.name);
	// 		}
	// 	});
	// }, [currentDate]); // eslint-disable-line

	return {
		currentDate,
		dates,
		isToday,
	};
}

// Provider component that wraps your app and makes dates object ...
// ... available to any child component that calls useDates().
export function DatesProvider({ children }) {
	const value = useDatesProvider();
	return <DatesContext.Provider value={value}>{children}</DatesContext.Provider>;
}

DatesProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
