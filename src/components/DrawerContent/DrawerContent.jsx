import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Tab,
	Tabs,
} from '@material-ui/core';
import {
	Settings as SettingsIcon,
} from '@material-ui/icons';

import useStyles from './DrawerContent.styled';
import Settings from '../../modals/Settings';
import { useDates } from '../../hooks/DatesContext';

const DrawerContent = ({
	tab,
	handleTabChange,
}) => {
	const classes = useStyles();
	const { dates } = useDates();
	const [openSettings, setOpenSettings] = useState(false);
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

			<List disablePadding>
				<ListItem button onClick={handleOpenSettings}>
					<ListItemIcon>
						<SettingsIcon />
					</ListItemIcon>
					<ListItemText primary="Settings" />
				</ListItem>
			</List>

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
