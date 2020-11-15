import React from 'react';
import {
	Divider,
	IconButton,
	List,
	ListItem,
	ListItemSecondaryAction,
	ListItemText,
} from '@material-ui/core';
import {
	Delete as DeleteIcon,
} from '@material-ui/icons';

import Modal from '../../components/Modal';
import AppVersion from '../../components/AppVersion';
import CheckForUpdate from '../../components/CheckForUpdate';

const Settings = () => (
	<Modal title="Settings">
		<List>
			<AppVersion />
			<CheckForUpdate />

			<Divider />

			<ListItem>
				<ListItemText primary="Clear Dates:" />
				<ListItemSecondaryAction>
					<IconButton
						aria-label="clear"
						color="secondary"
						edge="end"
						onClick={() => localStorage.clear()}
					>
						<DeleteIcon />
					</IconButton>
				</ListItemSecondaryAction>
			</ListItem>
		</List>
	</Modal>
);

export default Settings;
