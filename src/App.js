import React, { useEffect, useState } from 'react';
import datesToDisplay from './dates';
import './App.css';

const App = () => {
	const getDate = () => {
		const d = new Date();

		return {
			day: d.getDate(),
			month: d.getMonth() + 1,
		}
	};

	const [date, setDate] = useState(getDate);
	const [text, setText] = useState('NO');

	// Only update the date variable if the date changes
	useEffect(() => {
		const currentDate = getDate();
		const interval = setInterval(() => {
			if (JSON.stringify(date) !== JSON.stringify(currentDate)) {
				setDate(getDate);
			}
		}, 1000)
		return () => clearInterval(interval);
	}, []); // eslint-disable-line

	// Update the text if one of the dates is today
	useEffect(() => {
		console.log(date);

		datesToDisplay.forEach(event => {
			console.log(event);
			const matchDay = event.day === date.day;
			const matchMonth = event.month === date.month;

			if (matchDay && matchMonth) {
				setText(event.name)
			}

		})
	}, [date]); // eslint-disable-line

	return (
		<div className="app">
			<header className="app-header">
				{text}
				{/* {date.day === 25 && date.month === 12 && (
					<p>CHRISTMAS</p>
				)} */}
			</header>
		</div>
	);
}

export default App;
