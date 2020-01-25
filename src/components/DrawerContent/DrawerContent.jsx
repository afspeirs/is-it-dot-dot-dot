import React from 'react';
import PropTypes from 'prop-types';
import {
	List,
	ListItem,
	ListItemSecondaryAction,
	ListItemText,
	Tabs,
	Tab,
} from '@material-ui/core';

import useStyles from './DrawerContent.styled';
import { useDates } from '../../hooks/DatesContext';

const DrawerContent = ({
	tab,
	handleTabChange,
}) => {
	const classes = useStyles();
	const { dates } = useDates();
	// console.log(dates);

	return (
		<>
			<Tabs
				orientation="vertical"
				variant="scrollable"
				value={tab}
				onChange={handleTabChange}
				aria-label="Vertical tabs example"
				className={classes.list}
			>
				{dates.map((date, index) => (
					<Tab
						label={date.name}
						key={date.name}
						id={`vertical-tab-${index}`}
						aria-controls={`vertical-tabpanel-${index}`}
					/>
				))}
			</Tabs>

			<List disablePadding>
				<ListItem>
					<ListItemText primary="App version:" />
					<ListItemSecondaryAction>
						{`v${process.env.REACT_APP_VERSION}`}
					</ListItemSecondaryAction>
				</ListItem>
			</List>
		</>
	);
};

DrawerContent.propTypes = {
	tab: PropTypes.number.isRequired,
	handleTabChange: PropTypes.func.isRequired,
};

export default DrawerContent;
