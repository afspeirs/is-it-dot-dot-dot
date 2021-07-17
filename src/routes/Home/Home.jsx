import { useEffect } from 'react';
import queryString from 'query-string';
import { Redirect, useParams, useLocation } from 'react-router-dom';
import { Typography } from '@material-ui/core';

import { isModal } from '@/components/Routes';
import { useDates } from '@/hooks/Dates';
import { toKebabCase } from '@/utils';
import useStyles from './Home.styled';

const HomePage = () => {
	const classes = useStyles();
	const { name } = useParams();
	const { pathname, search } = useLocation();
	const {
		addDate,
		dates,
		isToday,
		selectedDate,
		setSelectedDate,
	} = useDates();

	const date = queryString.parse(search);

	useEffect(() => {
		if (isModal(pathname)) return; // Disable functionally when on a modal page.

		if (name) {
			setSelectedDate(name);
		}
		if (date?.name) {
			addDate(date, true);
		}
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
			{!isModal(pathname) && (name === undefined || selectedDate?.name === undefined) && (
				<Redirect to={`/${toKebabCase(dates[0].name)}/`} />
			)}
		</>
	);
};

export default HomePage;
