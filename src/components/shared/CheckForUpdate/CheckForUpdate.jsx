import { useEffect, useRef, useState } from 'react';
import {
	Chip,
	CircularProgress,
	ListItem,
	ListItemIcon,
	ListItemSecondaryAction,
	ListItemText,
} from '@mui/material';
import {
	SystemUpdate as SystemUpdateIcon,
} from '@mui/icons-material';

import { useGlobalState } from '@/hooks/GlobalState';
import styles from './CheckForUpdate.styled';

const CheckForUpdate = () => {
	const [{ updateAvailable }] = useGlobalState();
	const [loading, setLoading] = useState(false);
	const timer = useRef();

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
			<ListItemSecondaryAction sx={styles.listItemSecondaryAction}>
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
