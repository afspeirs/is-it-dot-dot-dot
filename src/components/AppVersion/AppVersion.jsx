import React from 'react';
import {
	ListItem,
	ListItemText,
	ListItemSecondaryAction,
} from '@material-ui/core';

const AppVersion = () => (
	<ListItem>
		<ListItemText primary="App version:" />
		<ListItemSecondaryAction>
			{`v${process.env.REACT_APP_VERSION}`}
		</ListItemSecondaryAction>
	</ListItem>
);

export default AppVersion;
