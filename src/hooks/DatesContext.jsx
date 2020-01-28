import React, {
	createContext,
	useContext,
	useEffect,
	useState,
} from 'react';
import PropTypes from 'prop-types';

import localDates from '../dates';
import { getCurrentDate } from '../utils';

const DatesContext = createContext();

// Hook for child components to get the dates object and re-render when it changes.
export const useDates = () => useContext(DatesContext);

// Provider hook that creates dates object and handles state
function useDatesProvider() {
	const [currentDate, setCurrentDate] = useState(getCurrentDate);
	const [dates, setDates] = useState(localDates);
	const [textYes] = useState('YES');
	const [textNo] = useState('NO');

	// Return yes values if today
	// Return no values if not
	const isToday = (date) => (date.today ? (date.valueYes || textYes) : (date.valueNo || textNo));

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

	// Update the text if one of the dates is today
	useEffect(() => {
		dates.forEach((event, index) => {
			// console.log(event);
			const matchDay = event.day === currentDate.day;
			const matchMonth = event.month === currentDate.month;

			if (matchDay && matchMonth) {
				dates[index].today = true;
			} else {
				dates[index].today = false;
			}
		});
	}, [currentDate]); // eslint-disable-line

	return {
		currentDate,
		dates,
		isToday,
		setDates,
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
