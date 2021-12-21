import { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@mui/material/Snackbar';
import Button from '@mui/material/Button';

import SnackbarContext from './SnackbarContext';

const defaultProps = {
	forceSecondaryButtonColor: false,
};

const propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
	forceSecondaryButtonColor: PropTypes.bool,
};

const SnackbarProvider = ({ children, forceSecondaryButtonColor }) => {
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

	const contextValue = useMemo(() => ({
		showMessage,
	}), [content]);

	return (
		<>
			<SnackbarContext.Provider value={contextValue}>
				{children}
			</SnackbarContext.Provider>

			<Snackbar
				anchorOrigin={{
					horizontal: 'right',
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
						color={forceSecondaryButtonColor ? 'secondary' : 'primary'}
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

SnackbarProvider.defaultProps = defaultProps;
SnackbarProvider.propTypes = propTypes;

export default SnackbarProvider;
