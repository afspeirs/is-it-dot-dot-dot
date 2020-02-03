import React from 'react';
import {
	Button,
	CircularProgress,
	IconButton,
	ListItem,
	ListItemSecondaryAction,
	ListItemText,
} from '@material-ui/core';
import {
	Refresh as RefreshIcon,
} from '@material-ui/icons';

const CheckForUpdate = () => {
	const [loading, setLoading] = React.useState(false);
	const timer = React.useRef();

	// This abominable one-liner will clear the timer if CheckForUpdate unmounts
	React.useEffect(() => () => clearTimeout(timer.current), []);

	const updateServiceWorker = () => {
		if ('serviceWorker' in navigator) {
			navigator.serviceWorker.ready.then((registration) => registration.update());
		} else {
			setTimeout(() => window.location.reload(window.location.href), 1500);
		}
	};

	const handleButtonClick = () => {
		if (!loading) {
			setLoading(true);
			updateServiceWorker();
			timer.current = setTimeout(() => setLoading(false), 2000);
		}
	};

	return (
		<ListItem>
			<ListItemText primary="Check for update" />
			{updateAvailable ? (
				<ListItemSecondaryAction>
					<Button
						variant="contained"
						color="primary"
						onClick={() => window.location.reload(true)}
					>
						Update
					</Button>
				</ListItemSecondaryAction>
			) : (
				<ListItemSecondaryAction>
					{loading ? (
						<CircularProgress size={24} color="inherit" />
					) : (
						<IconButton
							color="inherit"
							disabled={loading}
							onClick={handleButtonClick}
							edge="end"
						>
							<RefreshIcon />
						</IconButton>
					)}
				</ListItemSecondaryAction>
			)}
		</ListItem>
	);
};

export default CheckForUpdate;
