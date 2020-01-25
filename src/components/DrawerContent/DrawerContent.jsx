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

const DrawerContent = ({
	tab,
	handleTabChange,
}) => {
	const classes = useStyles();

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
				<Tab
					label="Item One"
					id={`vertical-tab-${0}`}
					aria-controls={`vertical-tabpanel-${0}`}
				/>
				<Tab
					label="Item Two"
					id={`vertical-tab-${1}`}
					aria-controls={`vertical-tabpanel-${1}`}
				/>
				<Tab
					label="Item Three"
					id={`vertical-tab-${2}`}
					aria-controls={`vertical-tabpanel-${2}`}
				/>
				<Tab
					label="Item Four"
					id={`vertical-tab-${3}`}
					aria-controls={`vertical-tabpanel-${3}`}
				/>
				<Tab
					label="Item Five"
					id={`vertical-tab-${4}`}
					aria-controls={`vertical-tabpanel-${4}`}
				/>
				<Tab
					label="Item Six"
					id={`vertical-tab-${5}`}
					aria-controls={`vertical-tabpanel-${5}`}
				/>
				<Tab
					label="Item Seven"
					id={`vertical-tab-${6}`}
					aria-controls={`vertical-tabpanel-${6}`}
				/>
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
