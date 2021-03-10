import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
	Divider,
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
import RouterNavLink from '../shared/RouterNavLink';
import { useDates } from '../../hooks/Dates';
import { toKebabCase } from '../../utils';

const DrawerContent = () => {
	const classes = useStyles();
	const { dates } = useDates();
	const location = useLocation();
	// console.log(dates);

	return (
		<>
			<Tabs
				orientation="vertical"
				variant="scrollable"
				value={!location?.state?.modal && location.pathname}
				className={classes.list}
			>
				{dates.map((date) => (
					<Tab
						key={date.name}
						label={date.name}
						component={Link}
						to={`/${toKebabCase(date.name)}/`}
						value={`/${toKebabCase(date.name)}/`}
					/>
				))}
			</Tabs>

			<List>
				<ListItem>
					<Typography variant="body2">This app informs you if it is the date specified</Typography>
				</ListItem>
				<ListItem>
					<Typography variant="body2">Add a date to show it in the list below</Typography>
				</ListItem>
			</List>

			<Divider />

			<List disablePadding>
				<ListItem
					button
					component={RouterNavLink}
					to={{
						pathname: '/edit-dates/',
						state: { modal: true },
					}}
				>
					<ListItemIcon>
						<EditIcon />
					</ListItemIcon>
					<ListItemText primary="Edit Dates" />
				</ListItem>
				<ListItem
					button
					component={RouterNavLink}
					to={{
						pathname: '/settings/',
						state: { modal: true },
					}}
				>
					<ListItemIcon>
						<SettingsIcon />
					</ListItemIcon>
					<ListItemText primary="Settings" />
				</ListItem>
			</List>
		</>
	);
};

export default DrawerContent;
