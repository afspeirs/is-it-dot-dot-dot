import React from 'react';
import PropTypes from 'prop-types';
import {
	List,
	ListItem,
	ListItemSecondaryAction,
	ListItemText,
} from '@material-ui/core';

import Modal from '../../components/Modal';

const Settings = ({
	open,
	handleClose,
}) => (
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
		</List>
	</Modal>
);

Settings.propTypes = {
	open: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired,
};


export default Settings;
