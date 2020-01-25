import React from 'react';
import {
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from '@material-ui/core';
import {
	Add as AddIcon,
} from '@material-ui/icons';

const DrawerContent = () => (
	<List disablePadding>
		<ListItem>
			<ListItemIcon>
				<AddIcon />
			</ListItemIcon>
			<ListItemText primary="Create Note" />
		</ListItem>
	</List>
);

export default DrawerContent;
