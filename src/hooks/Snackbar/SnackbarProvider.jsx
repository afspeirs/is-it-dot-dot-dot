import { useState } from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';

import SnackbarContext from './SnackbarContext';

const propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
};

const SnackbarProvider = ({ children }) => {
	const [content, setContent] = useState(null);

	const showMessage = ({
		actionFunction,
		actionText,
		message,
	}) => setContent({
		actionFunction,
		actionText,
		message,
	});

	const handleClose = () => setContent(null);

	const handleActionClick = () => {
		handleClose();
		content.actionFunction();
	};

	const contextValue = {
		showMessage,
	};

	return (
		<>
			<SnackbarContext.Provider value={contextValue}>
				{children}
			</SnackbarContext.Provider>

			<Snackbar
				anchorOrigin={{
					horizontal: 'left',
					vertical: 'bottom',
				}}
				open={Boolean(content?.message)}
				autoHideDuration={6000}
				onClose={handleClose}
				ContentProps={{ 'aria-describedby': 'message-id' }}
				message={content?.message ? <span id="message-id">{content.message}</span> : ''}
				action={content?.actionText && (
					<Button
						key="update"
						color="primary"
						size="small"
						onClick={handleActionClick}
					>
						{content.actionText}
					</Button>
				)}
			/>
		</>
	);
};

SnackbarProvider.propTypes = propTypes;

export default SnackbarProvider;
