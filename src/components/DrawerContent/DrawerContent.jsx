import React from 'react';
import {
	List,
	ListItem,
	ListItemSecondaryAction,
	ListItemText,
} from '@material-ui/core';

import useStyles from './DrawerContent.styled';

const DrawerContent = () => {
	const classes = useStyles();

	return (
		<>
			<List className={classes.list} disablePadding>
				<ListItem>
					<ListItemText primary="Example ListItem" />
				</ListItem>
			</List>

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

export default DrawerContent;
