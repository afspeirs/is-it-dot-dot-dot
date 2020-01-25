import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@material-ui/styles';

import './App.css';
import Navigation from '../Navigation';
import datesToDisplay from '../../dates';
import theme from '../../theme';
import { getDate } from '../../utils';

const App = () => {
	const [date, setDate] = useState(getDate);
	const [text, setText] = useState('NO');

	// Only update the date variable if the date changes
	useEffect(() => {
		const currentDate = getDate();
		const interval = setInterval(() => {
			if (JSON.stringify(date) !== JSON.stringify(currentDate)) {
				setDate(getDate);
			}
		}, 1000);
		return () => clearInterval(interval);
	}, []); // eslint-disable-line

	// Update the text if one of the dates is today
	useEffect(() => {
		console.log(date);

		datesToDisplay.forEach((event) => {
			console.log(event);
			const matchDay = event.day === date.day;
			const matchMonth = event.month === date.month;

			if (matchDay && matchMonth) {
				setText(event.name);
			}
		});
	}, [date]); // eslint-disable-line

	return (
		<ThemeProvider theme={theme}>
			<Navigation />
			<header className="app-header">
				{text}
				{/* {date.day === 25 && date.month === 12 && (
					<p>CHRISTMAS</p>
				)} */}
			</header>
		</ThemeProvider>
	);
};

export default App;
