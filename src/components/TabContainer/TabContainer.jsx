import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

import useStyles from './TabContainer.styled';
import { useDates } from '../../hooks/DatesContext';

const TabContainer = ({ tab }) => {
	const classes = useStyles();
	const { dates, isToday } = useDates();
	// console.log(dates);

	return (
		<main className={classes.root}>
			{dates.map((date, index) => (
				<Typography
					key={date.name}
					component="div"
					role="tabpanel"
					hidden={tab !== index}
					id={`vertical-tabpanel-${index}`}
					aria-labelledby={`vertical-tab-${index}`}
					className={classes.typography}
				>
					{tab === index && isToday(date)}
				</Typography>
			))}
		</main>
	);
};

TabContainer.propTypes = {
	tab: PropTypes.number.isRequired,
};

export default TabContainer;
