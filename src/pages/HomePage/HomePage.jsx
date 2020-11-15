import React, { useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { Typography } from '@material-ui/core';

import useStyles from './HomePage.styled';
import { useDates } from '../../hooks/DatesContext';
import { toKebabCase } from '../../utils';

const HomePage = () => {
	const classes = useStyles();
	const { name } = useParams();
	const {
		dates,
		isToday,
		selectedDate,
		setSelectedDate,
	} = useDates();

	useEffect(() => {
		setSelectedDate(name);
	}, [name]); // eslint-disable-line

	return (
		<>
			<main className={classes.root}>
				<Typography
					className={classes.typography}
					component="h2"
					variant="body1"
				>
					{selectedDate ? (
						isToday(selectedDate)
					) : (
						'Loading'
					)}
				</Typography>
			</main>

			{/* If no date is selected... Redirect to the first one */}
			{name === undefined && (
				<Redirect to={`/${toKebabCase(dates[0].name)}/`} />
			)}
		</>
	);
};

export default HomePage;
