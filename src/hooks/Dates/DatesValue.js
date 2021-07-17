import { useEffect, useState } from 'react';

import localDates from '@/dates';
import { getCurrentDate, toKebabCase } from '@/utils';

const DatesValue = () => {
	const [selectedDate, setSelectedDate] = useState();
	const [currentDate, setCurrentDate] = useState(getCurrentDate);
	const [dates, setDates] = useState(JSON.parse(localStorage.getItem('dates')) || localDates);
	const [textYes] = useState('YES');
	const [textNo] = useState('NO');
	const blankDate = { day: 1, month: 1, name: '' };

	// Return yes values if today
	// Return no values if not
	const isToday = (date) => {
		if (date.day === currentDate.day && date.month === currentDate.month) {
			return date.valueYes || textYes;
		}
		return date.valueNo || textNo;
	};

	const addDate = () => setDates([...dates, { ...blankDate }]);

	const deleteDate = (index) => {
		const updatedDates = [...dates];
		updatedDates.splice(index, 1);
		setDates(updatedDates);
	};

	const resetDates = () => {
		localStorage.removeItem('dates');
		setDates(localDates);
	};

	const updateDates = (array) => {
		localStorage.setItem('dates', JSON.stringify(array));
		setDates(array);
	};

	const getDateFromSlug = (slug) => dates
		.find((date) => toKebabCase(date.name) === slug);

	const updateSelectedDate = (slug) => {
		const newDate = getDateFromSlug(slug);
		setSelectedDate(newDate);
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

	useEffect(() => {
		if (dates.length === 0) addDate();
	}, [dates]); // eslint-disable-line

	return {
		addDate,
		currentDate,
		dates,
		deleteDate,
		isToday,
		resetDates,
		selectedDate,
		setDates: updateDates,
		setSelectedDate: updateSelectedDate,
	};
};

export default DatesValue;
