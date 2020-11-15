import React from 'react';
import ReactDOM from 'react-dom';
import {
	Button,
	Dialog,
	DialogActions,
	DialogTitle,
} from '@material-ui/core';

const UserConfirmation = (message, callback) => {
	const container = document.getElementById('user-confirmation');

	const closeModal = (callbackState) => {
		ReactDOM.unmountComponentAtNode(container);
		callback(callbackState);
	};

	ReactDOM.render(
		(
			<Dialog
				open
				maxWidth="xs"
				aria-labelledby="user-confirmation-dialog-title"
				onClose={() => closeModal(false)}
			>
				<DialogTitle id="user-confirmation-dialog-title">{message}</DialogTitle>
				<DialogActions>
					<Button onClick={() => closeModal(false)} autoFocus>Cancel</Button>
					<Button onClick={() => closeModal(true)} color="secondary">Leave without saving</Button>
				</DialogActions>
			</Dialog>
		),
		container,
	);
};

export default UserConfirmation;
