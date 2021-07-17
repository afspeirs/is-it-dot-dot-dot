import React, { useEffect } from 'react';
import { Redirect, useParams, useLocation } from 'react-router-dom';
import { Typography } from '@material-ui/core';

import { isModal } from '@/components/Routes';
import { useDates } from '@/hooks/Dates';
import { toKebabCase } from '@/utils';
import useStyles from './Home.styled';

const HomePage = () => {
	const classes = useStyles();
	const { name } = useParams();
	const { pathname } = useLocation();
	const {
		dates,
		isToday,
		selectedDate,
		setSelectedDate,
	} = useDates();

	useEffect(() => {
		if (isModal(pathname)) return; // Disable functionally when on a modal page.

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
