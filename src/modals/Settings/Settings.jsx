import React from 'react';
import PropTypes from 'prop-types';
import {
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
import CheckForUpdate from '../../components/CheckForUpdate';

const Settings = ({ open, handleClose }) => (
	<Modal
		title="Settings"
		open={open}
		handleClose={handleClose}
	>
		<List>
			<ListItem>
				<ListItemText primary="App version:" />
				<ListItemSecondaryAction>
					{`v${process.env.REACT_APP_VERSION}`}
				</ListItemSecondaryAction>
			</ListItem>
			<ListItem>
				<ListItemText primary="Clear Dates:" />
				<ListItemSecondaryAction>
					<IconButton
						aria-label="delete"
						color="secondary"
						onClick={() => localStorage.clear()}
					>
						<DeleteIcon />
					</IconButton>
				</ListItemSecondaryAction>
			</ListItem>
			<CheckForUpdate />
		</List>
	</Modal>
);

Settings.propTypes = {
	open: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired,
};


export default Settings;
