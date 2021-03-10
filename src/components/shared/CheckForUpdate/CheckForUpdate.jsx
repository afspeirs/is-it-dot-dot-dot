import { useEffect, useRef, useState } from 'react';
import {
	Chip,
	CircularProgress,
	ListItem,
	ListItemIcon,
	ListItemSecondaryAction,
	ListItemText,
} from '@material-ui/core';
import {
	SystemUpdate as SystemUpdateIcon,
} from '@material-ui/icons';

import useStyles from './CheckForUpdate.styled';
import { useGlobalState } from '../../../hooks/GlobalState';

const CheckForUpdate = () => {
	const [{ updateAvailable }] = useGlobalState();
	const [loading, setLoading] = useState(false);
	const timer = useRef();
	const classes = useStyles();

	// This abominable one-liner will clear the timer if CheckForUpdate component un-mounts
	useEffect(() => () => clearTimeout(timer.current), []);

	const updateServiceWorker = () => {
		if ('serviceWorker' in navigator) {
			navigator.serviceWorker.ready.then((registration) => registration.update());
		} else {
			setTimeout(() => window.location.reload(window.location.href), 1500);
		}
	};

	const handleButtonClick = () => {
		if (updateAvailable) {
			window.location.reload();
		} else if (!loading) {
			setLoading(true);
			updateServiceWorker();
			timer.current = setTimeout(() => setLoading(false), 2000);
		}
	};

	return (
		<ListItem button onClick={handleButtonClick}>
			<ListItemIcon>
				<SystemUpdateIcon />
			</ListItemIcon>
			<ListItemText primary="Check for update" />
			<ListItemSecondaryAction className={classes.listItemSecondaryAction}>
				{updateAvailable ? (
					<Chip
						color="primary"
						label="UPDATE"
					/>
				) : (
					<>
						{loading && <CircularProgress size={24} color="inherit" />}
					</>
				)}
			</ListItemSecondaryAction>
		</ListItem>
	);
};

export default CheckForUpdate;
