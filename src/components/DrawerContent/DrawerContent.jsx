import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Tab,
	Tabs,
	Typography,
} from '@material-ui/core';
import {
	Edit as EditIcon,
	Settings as SettingsIcon,
} from '@material-ui/icons';

import useStyles from './DrawerContent.styled';
import EditDates from '../../modals/EditDates';
import Settings from '../../modals/Settings';
import { useDates } from '../../hooks/DatesContext';

const DrawerContent = ({
	tab,
	handleTabChange,
}) => {
	const classes = useStyles();
	const { dates } = useDates();
	const [openEditDates, setOpenEditDates] = useState(false);
	const [openSettings, setOpenSettings] = useState(false);
	const handleOpenEditDates = () => setOpenEditDates(true);
	const handleCloseEditDates = () => setOpenEditDates(false);
	const handleOpenSettings = () => setOpenSettings(true);
	const handleCloseSettings = () => setOpenSettings(false);
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

			<List>
				<ListItem>
					<Typography variant="body2">This app shows tells you if it is the date specified</Typography>
				</ListItem>
				<ListItem>
					<Typography variant="body2">Add a date to show it in the list below</Typography>
				</ListItem>
			</List>

			<List disablePadding>
				<ListItem button onClick={handleOpenEditDates}>
					<ListItemIcon>
						<EditIcon />
					</ListItemIcon>
					<ListItemText primary="Edit Dates" />
				</ListItem>
				<ListItem button onClick={handleOpenSettings}>
					<ListItemIcon>
						<SettingsIcon />
					</ListItemIcon>
					<ListItemText primary="Settings" />
				</ListItem>
			</List>

			<EditDates
				open={openEditDates}
				handleClose={handleCloseEditDates}
			/>
			<Settings
				open={openSettings}
				handleClose={handleCloseSettings}
			/>
		</>
	);
};

DrawerContent.propTypes = {
	tab: PropTypes.number.isRequired,
	handleTabChange: PropTypes.func.isRequired,
};

export default DrawerContent;
