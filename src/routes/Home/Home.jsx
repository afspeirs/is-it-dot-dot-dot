import { useEffect } from 'react';
import queryString from 'query-string';
import { Redirect, useParams, useLocation } from 'react-router-dom';
import {
	Box,
	Typography,
} from '@mui/material';

import { useDates } from '@/hooks/Dates';
import { toKebabCase } from '@/utils';
import styles from './Home.styled';

const HomePage = () => {
	const { name } = useParams();
	const { search } = useLocation();
	const {
		addDate,
		dates,
		isToday,
		selectedDate,
		setSelectedDate,
	} = useDates();

	const date = queryString.parse(search);

	useEffect(() => {
		if (name) {
			setSelectedDate(name);
		}
		if (date?.name) {
			addDate(date, true);
		}
	}, [name]); // eslint-disable-line

	return (
		<>
			<Box
				component="main"
				sx={styles.root}
			>
				<Typography
					sx={styles.typography}
					component="h2"
					variant="body1"
				>
					{selectedDate ? (
						isToday(selectedDate)
					) : (
						'Loading'
					)}
				</Typography>
			</Box>

			{/* If no date is selected... Redirect to the first one */}
			{(name === undefined || selectedDate?.name === undefined) && (
				<Redirect to={`/${toKebabCase(dates[0].name)}/`} />
			)}
		</>
	);
};

export default HomePage;
