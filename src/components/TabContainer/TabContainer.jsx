import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { useDates } from '../../hooks/DatesContext';

const TabPanel = ({
	children,
	index,
	value,
}) => (
	<Typography
		component="div"
		role="tabpanel"
		hidden={value !== index}
		id={`vertical-tabpanel-${index}`}
		aria-labelledby={`vertical-tab-${index}`}
	>
		{value === index && <Box p={3}>{children}</Box>}
	</Typography>
);

TabPanel.propTypes = {
	children: PropTypes.node.isRequired,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		color: theme.palette.text,
		display: 'flex',
	},
	tabs: {
		borderRight: `1px solid ${theme.palette.divider}`,
	},
}));

const TabContainer = ({ tab }) => {
	const classes = useStyles();
	const { dates, isToday } = useDates();
	// console.log(dates);

	return (
		<div className={classes.root}>
			{dates.map((date, index) => (
				<TabPanel
					key={date.name}
					value={tab}
					index={index}
				>
					{isToday(date)}
				</TabPanel>
			))}
		</div>
	);
};

TabContainer.propTypes = {
	tab: PropTypes.number.isRequired,
};

export default TabContainer;
